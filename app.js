/* ==========================================================================
   OM-D Moment — Olympus OM-D E-M10 Mark IV Interactive Studio (app.js v3)
   ========================================================================== */
(function () {
  "use strict";

  const DATA = window.OMD_DATA;
  if (!DATA) return;

  const STORAGE_KEY = "omd_em10m4_course_v1";

  const TAB_PANEL_MAP = {
    "tab-start": "panel-start",
    "tab-ueberblick": "panel-ueberblick",
    "tab-menue": "panel-menue",
    "tab-genres": "panel-genres",
    "tab-lernpfad": "panel-lernpfad",
    "tab-handbuch": "panel-handbuch"
  };

  const DEFAULT_STATE = {
    completedExercises: [],
    exerciseNotes: {},
    quizAnswers: {},
    basicsRead: [],
    exploredControls: [],
    activeTabId: "tab-start",
    camView: "top",
    photoMode: "real",
    selectedControlId: "on-off-flash",
    scpPreset: "landscape",
    selectedScpId: "scp-picture-mode",
    menuDepthMode: "curated",
    activeMenuTabId: "custom",
    menuFilter: "all",
    activeGenreId: "landscape",
    exFilter: "all",
    theme: "dark",
    labApertureIdx: 3, // f/5.6
    labShutterIdx: 5,  // 1/500
    labIsoIdx: 0       // ISO 200
  };

  let state = loadState();
  let pendingSharePayload = null;

  // Exposure Lab calibrated steps
  const LAB_APERTURES = [2.0, 2.8, 4.0, 5.6, 8.0, 11.0, 16.0];
  const LAB_SHUTTERS = [
    { label: "1/4 s", val: 0.25 },
    { label: "1/15 s", val: 1 / 15 },
    { label: "1/60 s", val: 1 / 60 },
    { label: "1/125 s", val: 1 / 125 },
    { label: "1/250 s", val: 1 / 250 },
    { label: "1/500 s", val: 1 / 500 },
    { label: "1/1000 s", val: 1 / 1000 },
    { label: "1/2000 s", val: 1 / 2000 }
  ];
  const LAB_ISOS = [200, 400, 800, 1600, 3200, 6400];

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function svgIcon(name, className = "icon") {
    const map = {
      compass:
        '<circle cx="12" cy="12" r="9"/><polygon points="16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9 16.2 7.8"/>',
      camera:
        '<path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="3.5"/>',
      sliders:
        '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="10" cy="17" r="2"/>',
      mountain: '<path d="M3 19l6-9 4 5 3-4 5 8H3z"/>',
      street:
        '<rect x="4" y="4" width="6" height="16"/><rect x="14" y="8" width="6" height="12"/><line x1="2" y1="20" x2="22" y2="20"/>',
      portrait:
        '<circle cx="12" cy="8" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/>',
      moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
      leaf:
        '<path d="M17 4C9 4 5 10 5 17c7 0 12-4 12-13z"/><path d="M5 19l6-6"/>',
      arch:
        '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6a3 3 0 0 1 6 0v6"/>',
      motion:
        '<circle cx="15" cy="12" r="5"/><path d="M3 9h5M2 12h6M4 15h4"/>',
      check: '<polyline points="20 6 9 17 4 12"/>',
      award:
        '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7"/>',
      book:
        '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
      arrowLeft: '<polyline points="15 18 9 12 15 6"/>',
      arrowRight: '<polyline points="9 18 15 12 9 6"/>',
      external:
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'
    };
    const path = map[name] || map.camera;
    return `<svg class="${esc(className)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      const merged = { ...DEFAULT_STATE, ...parsed };
      if (!TAB_PANEL_MAP[merged.activeTabId]) {
        merged.activeTabId = "tab-start";
      }
      return merged;
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors in private browsing
    }
    updateHeaderProgress();
  }

  function applyTheme(theme) {
    state.theme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", state.theme === "light" ? "#f6f4ef" : "#11141a");
    }
  }

  function encodeShareUrl() {
    const payload = {
      v: 1,
      c: state.completedExercises,
      q: state.quizAnswers,
      g: state.activeGenreId,
      p: state.scpPreset,
      b: state.basicsRead
    };
    const json = JSON.stringify(payload);
    const b64 = btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    const url = new URL(window.location.href);
    url.searchParams.set("share", b64);
    url.hash = "";
    return url.toString();
  }

  function checkIncomingShareParam() {
    try {
      const url = new URL(window.location.href);
      const raw = url.searchParams.get("share");
      if (!raw) return;
      const padded = raw.replace(/-/g, "+").replace(/_/g, "/");
      const json = decodeURIComponent(escape(atob(padded)));
      const data = JSON.parse(json);
      if (data && typeof data === "object") {
        pendingSharePayload = data;
        const banner = document.getElementById("share-import-banner");
        const sum = document.getElementById("share-import-summary");
        const exCount = Array.isArray(data.c) ? data.c.length : 0;
        const quizCount = data.q ? Object.keys(data.q).length : 0;
        if (sum) {
          sum.textContent = `Geteilter Lernstand gefunden (${exCount} Missionen, ${quizCount} Quiz-Antworten). Möchtest du ihn laden?`;
        }
        if (banner) banner.hidden = false;
      }
    } catch {
      // Malformed share parameter ignored cleanly
    }
  }

  function activateTab(tabId, { focusTab = false, scrollTarget = null } = {}) {
    if (!TAB_PANEL_MAP[tabId]) tabId = "tab-start";
    state.activeTabId = tabId;
    saveState();

    Object.entries(TAB_PANEL_MAP).forEach(([tId, pId]) => {
      const tab = document.getElementById(tId);
      const panel = document.getElementById(pId);
      const isSelected = tId === tabId;
      if (tab) {
        tab.setAttribute("aria-selected", isSelected ? "true" : "false");
        tab.setAttribute("tabindex", isSelected ? "0" : "-1");
        if (isSelected) tab.setAttribute("focusgroupstart", "");
        else tab.removeAttribute("focusgroupstart");
      }
      if (panel) {
        if (isSelected) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "until-found");
        }
      }
    });

    // Sync mobile bottom thumb navigation
    document.querySelectorAll(".thumb-nav-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-target-tab") === tabId);
    });

    const activeTabEl = document.getElementById(tabId);
    if (activeTabEl) {
      try {
        activeTabEl.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
      } catch {
        activeTabEl.scrollIntoView();
      }
      if (focusTab) activeTabEl.focus();
    }

    if (scrollTarget) {
      requestAnimationFrame(() => {
        const target = document.querySelector(scrollTarget);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function updateHeaderProgress() {
    const done = state.completedExercises.length;
    const total = DATA.exercises.length;
    const pct = Math.round((done / Math.max(total, 1)) * 100);
    const txt = document.getElementById("header-progress-text");
    const fill = document.getElementById("header-progress-fill");
    if (txt) txt.textContent = `${done} / ${total} Missionen`;
    if (fill) fill.style.width = `${pct}%`;
  }

  function computeExplorerStats() {
    const exCount = state.completedExercises.length;
    const essaysCount = state.basicsRead.length;
    const ctrlCount = state.exploredControls.length;
    const quizCorrect = Object.entries(state.quizAnswers).filter(([qid, idx]) => {
      const q = DATA.quizQuestions.find((item) => item.id === qid);
      return q && q.correctIndex === idx;
    }).length;
    const xp = exCount * 25 + essaysCount * 20 + ctrlCount * 5 + quizCorrect * 15;

    let rank = "Ruhiger Einstieg";
    if (xp >= 550) rank = "Souveräner OM-D Entdecker";
    else if (xp >= 320) rank = "Sicherer Blick";
    else if (xp >= 150) rank = "Neugieriger Fotograf";
    else if (xp >= 45) rank = "Erste Schritte";

    const stage1Ids = DATA.exercises.filter((e) => e.stageId === "stage-1").map((e) => e.id);
    const stage1Done = stage1Ids.every((id) => state.completedExercises.includes(id));
    const landscapeDone = DATA.exercises.filter(
      (e) => e.stageId === "stage-3" && state.completedExercises.includes(e.id)
    ).length;
    const streetDone = DATA.exercises.filter(
      (e) => e.stageId === "stage-4" && state.completedExercises.includes(e.id)
    ).length;

    const unlockedMap = {
      basics_all: essaysCount >= DATA.dslrBridge.length,
      controls_8: ctrlCount >= 8,
      stage_1: stage1Done,
      landscape_3: landscapeDone >= 3,
      street_3: streetDone >= 3,
      quiz_6: quizCorrect >= 6
    };

    return { xp, rank, exCount, essaysCount, ctrlCount, quizCorrect, unlockedMap };
  }

  function markControlExplored(id) {
    if (!id) return;
    if (!state.exploredControls.includes(id)) {
      state.exploredControls.push(id);
      saveState();
      renderStart();
    }
  }

  function manualPageHref(page) {
    return `${DATA.meta.manualLocalUrl}#page=${Number(page) || 1}`;
  }

  // =========================================================================
  // TAB 1 RENDER: Start, Discovery Worlds, Explorer Stats, Exposure Lab, Essays
  // =========================================================================
  function renderStart() {
    const mount = document.getElementById("mount-start");
    if (!mount) return;
    const stats = computeExplorerStats();

    const nextEssay = DATA.dslrBridge.find((e) => !state.basicsRead.includes(e.id));
    const nextExercise = DATA.exercises.find((e) => !state.completedExercises.includes(e.id));

    const worldsHtml = DATA.discoveryWorlds
      .map(
        (w) => `
      <article class="world-card">
        <div>
          <div class="world-card-top">
            <span class="world-step">BEREICH ${esc(w.step)}</span>
            <span class="world-icon-wrap">${svgIcon(w.iconKey)}</span>
          </div>
          <h3>${esc(w.title)}</h3>
          <p class="world-subtitle">${esc(w.subtitle)}</p>
          <p class="world-desc">${esc(w.description)}</p>
        </div>
        <div>
          <button type="button" class="btn btn-sm world-jump-btn"
            data-tab="${esc(w.targetTab)}"
            data-section="${esc(w.targetSection || "")}"
            data-menumode="${esc(w.targetMenuMode || "")}">
            <span>${esc(w.cta)}</span>
            ${svgIcon("arrowRight")}
          </button>
        </div>
      </article>`
      )
      .join("");

    const milestonesHtml = DATA.milestones
      .map((m) => {
        const ok = Boolean(stats.unlockedMap[m.rule]);
        return `
        <div class="milestone-item ${ok ? "unlocked" : ""}">
          <div class="milestone-icon">${svgIcon(ok ? "check" : "award")}</div>
          <div>
            <div style="font-weight:600;font-size:0.9rem;">${esc(m.title)}</div>
            <div style="font-size:0.8rem;color:var(--text-muted);">${esc(m.desc)}</div>
          </div>
        </div>`;
      })
      .join("");

    const scenariosHtml = DATA.exposureScenarios
      .map(
        (sc) => `
      <button type="button" class="btn btn-sm lab-scenario-btn"
        data-ap="${sc.apertureIdx}" data-sh="${sc.shutterIdx}" data-iso="${sc.isoIdx}" data-scid="${esc(sc.id)}">
        ${esc(sc.label)}
      </button>`
      )
      .join("");

    const essaysHtml = DATA.dslrBridge
      .map((essay) => {
        const isRead = state.basicsRead.includes(essay.id);
        const paras = essay.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
        return `
        <article class="essay-card" id="${esc(essay.id)}">
          <div class="essay-meta">
            <span class="badge badge-accent">${esc(essay.number)}</span>
            <span>${esc(essay.readTime)}</span>
          </div>
          <h3 class="essay-title">${esc(essay.title)}</h3>
          <p class="essay-summary">${esc(essay.summary)}</p>
          <div class="essay-body">${paras}</div>
          <div class="essay-takeaway">
            <strong>Kurz mitgenommen:</strong> ${esc(essay.takeaway)}
          </div>
          <div class="essay-footer">
            <button type="button" class="btn btn-sm essay-read-toggle ${isRead ? "btn-primary" : ""}" data-essay-id="${esc(essay.id)}">
              ${svgIcon("check")}
              <span>${isRead ? "Gelesen (verstanden)" : "Als gelesen markieren"}</span>
            </button>
          </div>
        </article>`;
      })
      .join("");

    const resumeAction = nextEssay
      ? `<button type="button" class="btn btn-primary" data-jump-tab="tab-start" data-jump-sec="#${esc(nextEssay.id)}">Weiterlesen: ${esc(nextEssay.number)}</button>`
      : nextExercise
        ? `<button type="button" class="btn btn-primary" data-jump-tab="tab-lernpfad">Nächste Mission (#${nextExercise.number})</button>`
        : `<button type="button" class="btn btn-primary" data-jump-tab="tab-genres">Kreative Praxis-Ideen</button>`;

    mount.innerHTML = `
      <section class="hero-welcome" aria-labelledby="welcome-heading">
        <div>
          <div class="section-kicker">Persönliches Praxis-Studio • Modell IM021</div>
          <h2 id="welcome-heading">Willkommen bei deiner OM-D E-M10 Mark IV — in deinem eigenen Tempo</h2>
          <p>
            Der Umstieg von einer Spiegelreflex auf diese leichte Olympus fühlt sich am Anfang voller kleiner Schalter und Menüs an. Hier musst du nichts auswendig lernen: Starte einfach mit dem Bereich, der dich heute am meisten neugierig macht — ganz ohne Druck oder Abhakzwang.
          </p>
          <div class="hero-actions">
            ${resumeAction}
            <button type="button" class="btn" data-jump-tab="tab-ueberblick">Echte Kamera erkunden</button>
            <button type="button" class="btn btn-ghost" data-jump-tab="tab-menue" data-menumode="curated">Nur die Top 8 Menüs</button>
          </div>
        </div>
        <div class="hero-photo-frame">
          <img src="assets/camera/top-real.jpg" alt="Draufsicht auf die echte Olympus OM-D E-M10 Mark IV mit Modusrad und Einstellrädern" width="1500" height="795">
          <div class="hero-photo-caption">
            <span>Echte E-M10 Mark IV Draufsicht</span>
            <span>20,3 MP • 5-Achsen-IBIS</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="worlds-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Dein Einstieg</div>
            <h2 id="worlds-heading" class="section-title">Wo möchtest du heute anfangen?</h2>
            <p class="section-lead">Vier übersichtliche Bereiche statt einer überladenen Checkliste. Du kannst jederzeit zwischen Grundlagen, Kamerafotos, den wichtigsten Menüschaltern und echten Fotothemen wechseln.</p>
          </div>
        </div>
        <div class="worlds-grid">${worldsHtml}</div>
      </section>

      <section class="card companion-panel" aria-labelledby="companion-heading">
        <div class="companion-top">
          <div>
            <div class="section-kicker">Dein aktueller Stand</div>
            <h2 id="companion-heading" class="level-title">${esc(stats.rank)} (${stats.xp} Entdecker-Punkte)</h2>
            <p style="margin:0;color:var(--text-muted);font-size:0.9rem;">
              ${stats.essaysCount} von ${DATA.dslrBridge.length} Lesekapiteln • ${stats.ctrlCount} von ${DATA.bodyControls.length} Bedienelementen • ${stats.exCount} von ${DATA.exercises.length} Missionen • ${stats.quizCorrect} Quiz-Situationen
            </p>
          </div>
          <span class="badge badge-teal">Kein Zeitdruck • Lokaler Speicher aktiv</span>
        </div>
        <div class="milestones-grid">${milestonesHtml}</div>
      </section>

      <section id="exposure-lab-section" class="card" aria-labelledby="lab-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Interaktives Labor</div>
            <h2 id="lab-heading" class="section-title">Das Belichtungsdreieck zum Ausprobieren</h2>
            <p class="section-lead">Bewege Blende, Zeit und ISO — und sieh sofort am Motiv rechts, wie sich Helligkeit, Hintergrundunschärfe und Bewegung verändern. Oder wähle ein typisches Fotomotiv als Startpunkt.</p>
          </div>
        </div>
        <div class="lab-scenarios">${scenariosHtml}</div>
        <div class="exposure-lab">
          <div class="slider-group">
            <label class="slider-row">
              <span class="slider-label-row">
                <span>Blende (Öffnung im Objektiv)</span>
                <span class="slider-value" id="lab-ap-val">f/5.6</span>
              </span>
              <input id="lab-ap-slider" type="range" min="0" max="${LAB_APERTURES.length - 1}" step="1" value="${state.labApertureIdx}">
            </label>
            <label class="slider-row">
              <span class="slider-label-row">
                <span>Verschlusszeit (Dauer des Vorhangs)</span>
                <span class="slider-value" id="lab-sh-val">1/500 s</span>
              </span>
              <input id="lab-sh-slider" type="range" min="0" max="${LAB_SHUTTERS.length - 1}" step="1" value="${state.labShutterIdx}">
            </label>
            <label class="slider-row">
              <span class="slider-label-row">
                <span>ISO (Sensor-Verstärkung)</span>
                <span class="slider-value" id="lab-iso-val">ISO 200</span>
              </span>
              <input id="lab-iso-slider" type="range" min="0" max="${LAB_ISOS.length - 1}" step="1" value="${state.labIsoIdx}">
            </label>
          </div>
          <div class="lab-preview-stage" id="lab-preview-output"></div>
        </div>
      </section>

      <section id="dslr-bridge-section" aria-labelledby="bridge-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Verständlich erklärt • Grundlagen &amp; Spiegelreflex-Umstieg</div>
            <h2 id="bridge-heading" class="section-title">Technik in natürlicher Sprache — ohne Handbuch-Chinesisch</h2>
            <p class="section-lead">Vier ruhig geschriebene Kapitel verbinden allgemeines Fotowissen mit dem, was die Olympus OM-D E-M10 Mark IV im Vergleich zur klassischen Spiegelreflex besonders macht.</p>
          </div>
        </div>
        <div class="essays-grid">${essaysHtml}</div>
      </section>
    `;

    mount.querySelectorAll(".world-jump-btn, [data-jump-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab") || btn.getAttribute("data-jump-tab");
        const sec = btn.getAttribute("data-section") || btn.getAttribute("data-jump-sec") || null;
        const menuMode = btn.getAttribute("data-menumode");
        if (menuMode) {
          state.menuDepthMode = menuMode;
          saveState();
          renderMenue();
        }
        if (targetTab) activateTab(targetTab, { scrollTarget: sec || undefined });
      });
    });

    mount.querySelectorAll(".essay-read-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-essay-id");
        if (!id) return;
        const idx = state.basicsRead.indexOf(id);
        if (idx >= 0) state.basicsRead.splice(idx, 1);
        else state.basicsRead.push(id);
        saveState();
        renderStart();
      });
    });

    const apEl = document.getElementById("lab-ap-slider");
    const shEl = document.getElementById("lab-sh-slider");
    const isoEl = document.getElementById("lab-iso-slider");

    const updateLab = () => {
      state.labApertureIdx = Number(apEl.value);
      state.labShutterIdx = Number(shEl.value);
      state.labIsoIdx = Number(isoEl.value);
      saveState();
      renderExposureLabPreview();
    };

    [apEl, shEl, isoEl].forEach((el) => {
      if (el) el.addEventListener("input", updateLab);
    });

    mount.querySelectorAll(".lab-scenario-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.labApertureIdx = Number(btn.getAttribute("data-ap"));
        state.labShutterIdx = Number(btn.getAttribute("data-sh"));
        state.labIsoIdx = Number(btn.getAttribute("data-iso"));
        apEl.value = state.labApertureIdx;
        shEl.value = state.labShutterIdx;
        isoEl.value = state.labIsoIdx;
        saveState();
        renderExposureLabPreview(btn.getAttribute("data-scid"));
      });
    });

    renderExposureLabPreview();
  }

  function renderExposureLabPreview(scenarioId = null) {
    const out = document.getElementById("lab-preview-output");
    if (!out) return;

    const f = LAB_APERTURES[state.labApertureIdx] ?? 5.6;
    const sh = LAB_SHUTTERS[state.labShutterIdx] ?? LAB_SHUTTERS[5];
    const iso = LAB_ISOS[state.labIsoIdx] ?? 200;

    const apLabel = document.getElementById("lab-ap-val");
    const shLabel = document.getElementById("lab-sh-val");
    const isoLabel = document.getElementById("lab-iso-val");
    if (apLabel) apLabel.textContent = `f/${f}`;
    if (shLabel) shLabel.textContent = sh.label;
    if (isoLabel) isoLabel.textContent = `ISO ${iso}`;

    // Reference comfortable outdoor light around f/5.6 + 1/500 + ISO 200 (evRef ~ 13.97)
    const evCurrent = Math.log2((f * f) / sh.val) - Math.log2(iso / 100);
    const evRef = Math.log2((5.6 * 5.6) / (1 / 500)) - Math.log2(200 / 100);
    // Higher EV setting means darker image relative to scene
    const evDelta = Number((evRef - evCurrent).toFixed(1));
    const clampedEv = Math.max(-3, Math.min(3, Math.round(evDelta)));

    const brightness = Math.max(0.35, Math.min(1.85, Math.pow(2, evDelta * 0.45)));
    const bgBlur = f <= 2.8 ? "3.2px" : f <= 4.0 ? "1.6px" : "0px";
    const subjectBlur = sh.val >= 0.06 ? "blur(3px) skewX(-6deg)" : sh.val >= 0.016 ? "blur(1px)" : "none";
    const grainNote =
      iso >= 3200
        ? "Leicht sichtbares digitales Korn (unter 'Rauschfilter: schwach' sehr organisch)"
        : iso >= 800
          ? "Angenehm sauber für Dämmerung & schattige Straßen"
          : "Basisbereich: Maximale Farbtiefe und ruhigste Himmel";

    const dofNote =
      f >= 11
        ? `Achtung ab f/${f}: Auf dem Micro-Four-Thirds-Sensor setzt bereits leichte Beugungsunschärfe ein. Für Landschaften genügen fast immer f/5.6 bis f/8!`
        : f >= 5.6
          ? `Ideal für Landschaft: f/${f} am MFT-Sensor liefert ungefähr dieselbe Tiefenschärfe wie f/${(f * 2).toFixed(0)} am Vollformat.`
          : `Freistellend: Weicher Hintergrund für Porträts und ruhige Street-Details (wie f/${(f * 2).toFixed(1)} am Vollformat).`;

    const motionNote =
      sh.val >= 1 / 20
        ? "Sehr lange Zeit: Fließendes Wasser verwischt weich. Dank 5-Achsen-IBIS mit ruhiger Hand machbar — oder fest abgestützt."
        : sh.val >= 1 / 100
          ? "Mittlere Zeit: Statische Szenen gelingen sicher aus der Hand; schnelle Personen könnten leicht verwischen."
          : "Kurze Verschlusszeit: Schnelle Schritte, Radfahrer und Blätter im Wind werden sauber eingefroren.";

    const scenario = scenarioId ? DATA.exposureScenarios.find((s) => s.id === scenarioId) : null;
    const evSteps = [-3, -2, -1, 0, 1, 2, 3]
      .map(
        (step) =>
          `<div class="ev-pip ${step === clampedEv ? "active" : ""}">${step > 0 ? `+${step}` : step} EV</div>`
      )
      .join("");

    out.innerHTML = `
      <div class="lab-canvas-card">
        <div class="lab-scene-sim" style="filter:brightness(${brightness.toFixed(2)});">
          <div class="lab-bg-mountain" style="filter:blur(${bgBlur});">
            <svg viewBox="0 0 320 145" preserveAspectRatio="none" aria-hidden="true">
              <circle cx="255" cy="34" r="14" fill="#f3d69c" opacity="0.88"/>
              <path d="M0 105 L65 55 L125 92 L195 44 L270 90 L320 68 L320 145 L0 145 Z" fill="#2a3d4c"/>
              <path d="M0 120 L90 88 L175 112 L255 82 L320 105 L320 145 L0 145 Z" fill="#1e2d28"/>
            </svg>
          </div>
          <div class="lab-fg-subject" style="filter:${subjectBlur === "none" ? "none" : "blur(1.5px)"};"></div>
        </div>
        <div class="lab-meter-row">
          <div style="display:flex;justify-content:space-between;color:#d6dce6;">
            <span>Helligkeit gegenüber Standard-Tageslicht</span>
            <strong>${evDelta >= 0 ? "+" : ""}${evDelta} EV</strong>
          </div>
          <div class="ev-scale">${evSteps}</div>
        </div>
      </div>
      <div class="card-subtle" style="display:grid;gap:0.45rem;font-size:0.9rem;">
        ${scenario ? `<div class="badge badge-accent">${esc(scenario.label)}</div><p style="margin:0.2rem 0;">${esc(scenario.note)}</p>` : ""}
        <p style="margin:0;"><strong>Schärfezone:</strong> ${esc(dofNote)}</p>
        <p style="margin:0;"><strong>Bewegung:</strong> ${esc(motionNote)}</p>
        <p style="margin:0;"><strong>Rauschen:</strong> ${esc(grainNote)}</p>
      </div>
    `;
  }

  // =========================================================================
  // TAB 2 RENDER: Real-Photo Camera Studio + Exposure Modes
  // =========================================================================
  function renderUeberblick() {
    const mount = document.getElementById("mount-ueberblick");
    if (!mount) return;

    const viewMeta = {
      top: {
        label: "Oberseite (Wählräder & Blitz-Hebel)",
        realImg: "assets/camera/top-real.jpg",
        manualImg: "assets/camera/manual-p11.png",
        pageRef: "S. 11"
      },
      rear: {
        label: "Rückseite (Sucher, Klappmonitor & OK)",
        realImg: "assets/camera/rear-real.jpg",
        manualImg: "assets/camera/manual-p12.png",
        pageRef: "S. 12"
      },
      front: {
        label: "Vorderseite (Sensor & Objektiv)",
        realImg: "assets/camera/front-real.jpg",
        manualImg: "assets/camera/front-studio.png",
        pageRef: "S. 11 / 166"
      }
    };

    const controlsInView = DATA.bodyControls.filter((c) => c.view === state.camView);
    let selected = DATA.bodyControls.find((c) => c.id === state.selectedControlId);
    if (!selected || selected.view !== state.camView) {
      selected = controlsInView[0] || DATA.bodyControls[0];
      state.selectedControlId = selected.id;
    }

    const activeIdx = DATA.bodyControls.findIndex((c) => c.id === selected.id);
    const prevCtrl = DATA.bodyControls[(activeIdx - 1 + DATA.bodyControls.length) % DATA.bodyControls.length];
    const nextCtrl = DATA.bodyControls[(activeIdx + 1) % DATA.bodyControls.length];

    const pinsHtml =
      state.photoMode === "real"
        ? controlsInView
            .map((c) => {
              const isSel = c.id === selected.id;
              const isDone = state.exploredControls.includes(c.id);
              return `<button type="button"
                class="photo-pin ${isSel ? "selected" : ""} ${isDone ? "explored" : ""}"
                style="left:${c.pctCoords.x}%;top:${c.pctCoords.y}%;"
                data-ctrl-id="${esc(c.id)}"
                title="#${esc(c.number)} ${esc(c.name)}"
                aria-label="#${esc(c.number)} ${esc(c.name)}"
                aria-pressed="${isSel ? "true" : "false"}">${esc(c.number)}</button>`;
            })
            .join("")
        : "";

    const chipsHtml = controlsInView
      .map((c) => {
        const isSel = c.id === selected.id;
        const shortLabel = c.name.replace(/\s*\([^)]*\)/g, "").replace(/-\s*\//g, " /").trim();
        return `<button type="button" class="chip-btn ${isSel ? "selected" : ""}" data-ctrl-id="${esc(c.id)}">
          <span>#${esc(c.number)}</span>
          <span>${esc(shortLabel)}</span>
        </button>`;
      })
      .join("");

    const vm = viewMeta[state.camView] || viewMeta.top;
    const stageImg = state.photoMode === "real" ? vm.realImg : vm.manualImg;

    const modesHtml = DATA.exposureModes
      .map((m) => {
        const subModesHtml = Array.isArray(m.submodes)
          ? `<details>
              <summary><span class="summary-title">Alle ${m.submodes.length} erweiterten AP-Untermodi anzeigen</span><span class="summary-meta">S. 40–49</span></summary>
              <div class="accordion-body">
                ${m.submodes
                  .map(
                    (sm) =>
                      `<p style="margin:0;"><strong>${esc(sm.name)}:</strong> ${esc(sm.desc)}</p>`
                  )
                  .join("")}
              </div>
            </details>`
          : "";

        return `
        <article class="mode-card">
          <div class="mode-card-head">
            <span class="mode-dial-badge">${esc(m.code)}</span>
            <div>
              <h3 style="margin:0;font-size:1.05rem;">${esc(m.name)}</h3>
              <span style="font-size:0.78rem;color:var(--text-dim);">Handbuch S. ${esc(m.page)}</span>
            </div>
          </div>
          <p style="margin:0;color:var(--text-muted);font-size:0.92rem;">${esc(m.desc)}</p>
          <div style="display:grid;gap:0.35rem;font-size:0.86rem;background:var(--bg-elev);padding:0.7rem 0.85rem;border-radius:8px;border:1px solid var(--border);">
            <div><strong>Vorderes Rad:</strong> ${esc(m.frontDial)}</div>
            <div><strong>Hinteres Rad:</strong> ${esc(m.rearDial)}</div>
          </div>
          <div style="font-size:0.88rem;">
            <strong style="color:var(--accent-strong);">Landschaft:</strong> ${esc(m.landscapeAdvice)}<br>
            <strong style="color:var(--teal);">Street:</strong> ${esc(m.streetAdvice)}
          </div>
          ${subModesHtml}
        </article>`;
      })
      .join("");

    mount.innerHTML = `
      <section aria-labelledby="inspector-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Echte Gehäuse-Ansichten &amp; Handbuch-Referenz</div>
            <h2 id="inspector-heading" class="section-title">Gehäuse, Tasten und die zwei Einstellräder</h2>
            <p class="section-lead">Tippe direkt auf eine der Ziffern auf den Kamerafotos — oder blättere mit Vor und Zurück entspannt einmal um deine neue E-M10 Mark IV herum.</p>
          </div>
        </div>

        <div class="studio-toolbar">
          <div class="segmented" role="group" aria-label="Kamera-Ansicht wählen">
            <button type="button" class="view-switch-btn" data-view="top" aria-pressed="${state.camView === "top"}">Oberseite (#1–8)</button>
            <button type="button" class="view-switch-btn" data-view="rear" aria-pressed="${state.camView === "rear"}">Rückseite (#9–16)</button>
            <button type="button" class="view-switch-btn" data-view="front" aria-pressed="${state.camView === "front"}">Vorderseite (#17–18)</button>
          </div>
          <div class="segmented" role="group" aria-label="Darstellungsart">
            <button type="button" class="photomode-btn" data-pm="real" aria-pressed="${state.photoMode === "real"}">Echte Fotos (Pins)</button>
            <button type="button" class="photomode-btn" data-pm="manual" aria-pressed="${state.photoMode === "manual"}">Handbuch-Zeichnung (${esc(vm.pageRef)})</button>
          </div>
        </div>

        <div class="inspector-layout">
          <div class="photo-stage-card">
            <div class="photo-stage">
              <img src="${esc(stageImg)}" alt="${esc(vm.label)}" width="1500" height="1000">
              ${pinsHtml}
            </div>
            <div class="chip-index" aria-label="Bedienelemente dieser Ansicht">
              ${chipsHtml}
            </div>
          </div>

          <aside class="card inspector-detail-card" aria-live="polite">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
              <span class="badge badge-accent">#${esc(selected.number)} • ${esc(selected.category)}</span>
              <a class="badge" href="${esc(manualPageHref(selected.manualPage))}" target="_blank" rel="noopener">
                Handbuch S. ${esc(selected.manualPage)} ${svgIcon("external")}
              </a>
            </div>
            <div>
              <h3 style="margin:0 0 0.35rem;font-size:1.22rem;">${esc(selected.name)}</h3>
              <p style="margin:0;color:var(--text-muted);">${esc(selected.shortDesc)}</p>
            </div>
            <div class="detail-macro-box">
              <img src="${esc(selected.detailImage)}" alt="Detailansicht für ${esc(selected.name)}" width="900" height="450">
            </div>
            <p style="margin:0;font-size:0.95rem;line-height:1.65;">${esc(selected.details)}</p>
            <div class="tip-split">
              <div class="tip-box">
                <strong>Für Landschaften</strong>
                <span>${esc(selected.landscapeTip)}</span>
              </div>
              <div class="tip-box">
                <strong>Für Streetfotografie</strong>
                <span>${esc(selected.streetTip)}</span>
              </div>
              <div class="tip-box" style="border-left:3px solid var(--teal);">
                <strong style="color:var(--teal);">Direkt kurz ausprobieren</strong>
                <span>${esc(selected.quickExercise)}</span>
              </div>
            </div>
            <div class="tour-nav">
              <button type="button" class="btn btn-sm tour-step-btn" data-next-ctrl="${esc(prevCtrl.id)}">
                ${svgIcon("arrowLeft")} <span>#${esc(prevCtrl.number)} Zurück</span>
              </button>
              <button type="button" class="btn btn-sm tour-step-btn" data-next-ctrl="${esc(nextCtrl.id)}">
                <span>#${esc(nextCtrl.number)} Weiter</span> ${svgIcon("arrowRight")}
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="modes-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Programmwählscheibe</div>
            <h2 id="modes-heading" class="section-title">Alle 9 Belichtungsmodi im Überblick</h2>
            <p class="section-lead">Wenn du von einer Spiegelreflex kommst, sind dir P, A, S und M vertraut. Besonders spannend an Olympus sind außerdem AP (Rechnergestützte Kreativ-Modi wie Live Composite und HDR).</p>
          </div>
        </div>
        <div class="modes-grid">${modesHtml}</div>
      </section>
    `;

    mount.querySelectorAll(".view-switch-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.camView = btn.getAttribute("data-view");
        saveState();
        renderUeberblick();
      });
    });

    mount.querySelectorAll(".photomode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.photoMode = btn.getAttribute("data-pm");
        saveState();
        renderUeberblick();
      });
    });

    mount.querySelectorAll("[data-ctrl-id], .tour-step-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-ctrl-id") || btn.getAttribute("data-next-ctrl");
        const found = DATA.bodyControls.find((c) => c.id === id);
        if (!found) return;
        state.selectedControlId = found.id;
        state.camView = found.view;
        markControlExplored(found.id);
        saveState();
        renderUeberblick();
      });
    });
  }

  // =========================================================================
  // TAB 3 RENDER: Curated Menu Top 8 vs Full 6-Tab Registry + SCP Simulator
  // =========================================================================
  function renderMenue() {
    const mount = document.getElementById("mount-menue");
    if (!mount) return;

    const scpPresetLabels = {
      default: "Werkseinstellung",
      landscape: "Landschafts-Profil",
      street: "Street-Stealth-Profil",
      night: "Nacht & Astro"
    };

    const selectedScp = DATA.scpTiles.find((t) => t.id === state.selectedScpId) || DATA.scpTiles[0];
    const presetInfo = selectedScp.presets[state.scpPreset] || selectedScp.presets.default;

    const curatedCardsHtml = DATA.curatedMenuHighlights
      .map(
        (h) => `
      <article class="curated-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
          <span class="curated-card-num">SCHRITT ${esc(h.step)}</span>
          <a class="badge" href="${esc(manualPageHref(h.page.match(/\d+/)?.[0] || 80))}" target="_blank" rel="noopener">${esc(h.page)}</a>
        </div>
        <h3 style="margin:0;font-size:1.08rem;">${esc(h.title)}</h3>
        <div style="font-family:var(--font-mono);font-size:0.78rem;padding:0.45rem 0.65rem;background:var(--bg-elev);border:1px solid var(--border);border-radius:6px;">
          ${esc(h.where)}
        </div>
        <p style="margin:0;color:var(--text-muted);font-size:0.94rem;line-height:1.65;">${esc(h.why)}</p>
      </article>`
      )
      .join("");

    // Full registry view
    const activeTabObj = DATA.menuTabs.find((m) => m.id === state.activeMenuTabId) || DATA.menuTabs[4];
    const filteredItems = activeTabObj.items.filter(
      (item) => state.menuFilter === "all" || item.tag === state.menuFilter
    );

    const menuTabsSwitchHtml = DATA.menuTabs
      .map(
        (m) => `
      <button type="button" class="chip-btn ${m.id === activeTabObj.id ? "selected" : ""}" data-menutab="${esc(m.id)}">
        ${esc(m.symbol)}
      </button>`
      )
      .join("");

    const fullItemsHtml =
      filteredItems.length > 0
        ? filteredItems
            .map(
              (item) => `
          <details>
            <summary>
              <span class="summary-title">${esc(item.name)}</span>
              <span class="summary-meta">${esc(item.page)}</span>
            </summary>
            <div class="accordion-body">
              <div style="display:flex;flex-wrap:wrap;gap:0.45rem;align-items:center;">
                <code>${esc(item.path)}</code>
                <span class="badge">${esc(item.tag)}</span>
              </div>
              <p style="margin:0;color:var(--text-muted);">${esc(item.desc)}</p>
              <div class="recipe-grid">
                <div class="recipe-item"><div class="recipe-label">Ab Werk</div><div class="recipe-val">${esc(item.defaultVal)}</div></div>
                <div class="recipe-item"><div class="recipe-label">Landschaft</div><div class="recipe-val">${esc(item.recLandscape)}</div></div>
                <div class="recipe-item"><div class="recipe-label">Street</div><div class="recipe-val">${esc(item.recStreet)}</div></div>
              </div>
              <div class="tip-box" style="border-left:3px solid var(--teal);">
                <strong style="color:var(--teal);">Ausprobieren</strong>
                <span>${esc(item.exercise)}</span>
              </div>
            </div>
          </details>`
            )
            .join("")
        : `<p style="color:var(--text-muted);">Für diesen Filter liegen in diesem Register keine Einträge vor.</p>`;

    const menuMainContent =
      state.menuDepthMode === "curated"
        ? `
        <div class="card-subtle" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
          <div>
            <strong>Bewusst ruhiger Einstieg:</strong> Das sind nur die acht Einstellungen, die das Arbeiten mit der E-M10 Mark IV spürbar angenehmer machen. Alles andere lassen wir zunächst in Ruhe.
          </div>
          <button type="button" class="btn btn-sm" id="btn-switch-full-menu">Später auch komplettes Register ansehen</button>
        </div>
        <div class="curated-grid">${curatedCardsHtml}</div>`
        : `
        <div class="studio-toolbar">
          <div class="chip-index" style="margin:0;">${menuTabsSwitchHtml}</div>
          <div class="segmented" role="group" aria-label="Menüfilter">
            ${["all", "empfohlen", "landschaft", "street", "profi"]
              .map(
                (f) =>
                  `<button type="button" class="menu-filter-btn" data-mfilter="${f}" aria-pressed="${state.menuFilter === f}">${
                    f === "all" ? "Alle" : f[0].toUpperCase() + f.slice(1)
                  }</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="card-subtle">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
            <strong>${esc(activeTabObj.title)}</strong>
            <span class="badge">${esc(activeTabObj.pageRange)}</span>
          </div>
          <p style="margin:0.35rem 0 0;color:var(--text-muted);">${esc(activeTabObj.summaryDesc)}</p>
        </div>
        <div class="accordion-controls">
          <span style="font-size:0.88rem;color:var(--text-dim);">${filteredItems.length} Einträge in diesem Register</span>
          <button type="button" class="btn btn-sm" id="menu-toggle-all" command="--toggle-all" commandfor="menu-accordion-group">Alle ausklappen</button>
        </div>
        <div id="menu-accordion-group" class="accordion-group">${fullItemsHtml}</div>`;

    // SCP 20 tiles
    const scpTilesHtml = DATA.scpTiles
      .map((tile) => {
        const isSel = tile.id === selectedScp.id;
        const p = tile.presets[state.scpPreset] || tile.presets.default;
        return `<button type="button" class="scp-tile ${isSel ? "selected" : ""}" data-scpid="${esc(tile.id)}" aria-pressed="${isSel}">
          <span class="scp-tile-code">${esc(tile.code)}</span>
          <span class="scp-tile-val">${esc(p.value.split("(")[0].trim())}</span>
        </button>`;
      })
      .join("");

    mount.innerHTML = `
      <section aria-labelledby="menu-guide-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Verständliche Menüführung</div>
            <h2 id="menu-guide-heading" class="section-title">Das Olympus-Menü gezähmt</h2>
            <p class="section-lead">Wähle oben zwischen den acht wirkungsvollsten Alltags-Schaltern oder dem kompletten sechsteiligen Nachschlagewerk.</p>
          </div>
          <div class="segmented" role="group" aria-label="Menütiefe">
            <button type="button" class="menudepth-btn" data-depth="curated" aria-pressed="${state.menuDepthMode === "curated"}">Top 8 Starter (Empfohlen)</button>
            <button type="button" class="menudepth-btn" data-depth="full" aria-pressed="${state.menuDepthMode === "full"}">Komplettes 6-Tab-Menü</button>
          </div>
        </div>
        ${menuMainContent}
      </section>

      <section aria-labelledby="scp-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Herzstück der Bedienung • S. 80 &amp; 176</div>
            <h2 id="scp-heading" class="section-title">Super Control Panel (SCP) — Alle 20 Kacheln ausprobieren</h2>
            <p class="section-lead">Einmal über Anwender C1 aktiviert, ersetzt dieses Raster im Alltag fast das ganze Menü. Wähle links oben dein Einsatzprofil und tippe eine der 20 Kacheln an.</p>
          </div>
          <div class="segmented" role="group" aria-label="SCP Einsatzprofil">
            ${Object.entries(scpPresetLabels)
              .map(
                ([k, lbl]) =>
                  `<button type="button" class="scp-preset-btn" data-preset="${k}" aria-pressed="${state.scpPreset === k}">${esc(lbl)}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="scp-studio">
          <div style="display:grid;gap:0.9rem;">
            <div class="scp-screen">
              <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.76rem;color:#aeb7c6;">
                <span>OLYMPUS LV-FUNKTIONSANZEIGE</span>
                <span>${esc(scpPresetLabels[state.scpPreset])}</span>
              </div>
              <div class="scp-grid">${scpTilesHtml}</div>
            </div>
            <details>
              <summary><span class="summary-title">Original-Ansicht aus der Bedienungsanleitung einblenden</span><span class="summary-meta">S. 80</span></summary>
              <div class="accordion-body">
                <div class="scp-reference-img">
                  <img src="assets/camera/manual-scp-p80.png" alt="Super Control Panel Abbildung aus der Olympus Bedienungsanleitung Seite 80" width="1200" height="750">
                </div>
              </div>
            </details>
          </div>

          <aside class="card inspector-detail-card" aria-live="polite">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
              <span class="badge badge-accent">Kachel ${selectedScp.gridOrder} / 20</span>
              <a class="badge" href="${esc(manualPageHref(selectedScp.page))}" target="_blank" rel="noopener">
                Handbuch S. ${esc(selectedScp.page)} ${svgIcon("external")}
              </a>
            </div>
            <div>
              <h3 style="margin:0 0 0.25rem;font-size:1.2rem;">${esc(selectedScp.label)}</h3>
              <code>${esc(selectedScp.code)}</code>
            </div>
            <div class="tip-box" style="border-left:3px solid var(--accent);">
              <strong>Empfehlung für „${esc(scpPresetLabels[state.scpPreset])}“</strong>
              <div><strong>${esc(presetInfo.value)}</strong> — ${esc(presetInfo.note)}</div>
            </div>
            <div>
              <div style="font-size:0.84rem;color:var(--text-dim);margin-bottom:0.25rem;">Verfügbare Werte</div>
              <p style="margin:0;font-size:0.92rem;">${esc(selectedScp.options)}</p>
            </div>
            <div>
              <div style="font-size:0.84rem;color:var(--text-dim);margin-bottom:0.25rem;">Schnelle Bedienung</div>
              <p style="margin:0;font-size:0.92rem;">${esc(selectedScp.howToChange)}</p>
            </div>
            <div class="tip-box" style="border-left:3px solid var(--teal);">
              <strong style="color:var(--teal);">Direkt testen</strong>
              <span>${esc(selectedScp.exercise)}</span>
            </div>
          </aside>
        </div>
      </section>
    `;

    mount.querySelectorAll(".menudepth-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.menuDepthMode = b.getAttribute("data-depth");
        saveState();
        renderMenue();
      });
    });

    const switchFull = document.getElementById("btn-switch-full-menu");
    if (switchFull) {
      switchFull.addEventListener("click", () => {
        state.menuDepthMode = "full";
        saveState();
        renderMenue();
      });
    }

    mount.querySelectorAll("[data-menutab]").forEach((b) => {
      b.addEventListener("click", () => {
        state.activeMenuTabId = b.getAttribute("data-menutab");
        saveState();
        renderMenue();
      });
    });

    mount.querySelectorAll(".menu-filter-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.menuFilter = b.getAttribute("data-mfilter");
        saveState();
        renderMenue();
      });
    });

    mount.querySelectorAll(".scp-preset-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.scpPreset = b.getAttribute("data-preset");
        saveState();
        renderMenue();
      });
    });

    mount.querySelectorAll(".scp-tile").forEach((b) => {
      b.addEventListener("click", () => {
        state.selectedScpId = b.getAttribute("data-scpid");
        saveState();
        renderMenue();
      });
    });

    wireAccordionGroup("menu-accordion-group", "menu-toggle-all");
  }

  // =========================================================================
  // TAB 4 RENDER: Landscape, Street & 5 Extensible Genres
  // =========================================================================
  function renderGenres() {
    const mount = document.getElementById("mount-genres");
    if (!mount) return;

    const genre = DATA.genres.find((g) => g.id === state.activeGenreId) || DATA.genres[0];
    const pillsHtml = DATA.genres
      .map(
        (g) => `
      <button type="button" class="genre-pill ${g.id === genre.id ? "active" : ""}" data-genre-id="${esc(g.id)}">
        ${svgIcon(g.iconKey)}
        <span>${esc(g.title)}</span>
      </button>`
      )
      .join("");

    const recipeRows = [
      ["Belichtungsmodus", genre.recipe.mode],
      ["Blende", genre.recipe.aperture],
      ["Verschlusszeit", genre.recipe.shutter],
      ["ISO", genre.recipe.iso],
      ["Autofokus", genre.recipe.af],
      ["Auslöser / Serie", genre.recipe.drive],
      ["Bildmodus", genre.recipe.pictureMode],
      ["Belichtungsmessung", genre.recipe.metering],
      ["Bildstabilisator", genre.recipe.ibis],
      ["Dateiformat", genre.recipe.format]
    ]
      .map(
        ([k, v]) => `
      <div class="recipe-item">
        <div class="recipe-label">${esc(k)}</div>
        <div class="recipe-val">${esc(v)}</div>
      </div>`
      )
      .join("");

    const deepDivesHtml = genre.deepDives
      .map(
        (dd, idx) => `
      <details ${idx === 0 ? "open" : ""}>
        <summary><span class="summary-title">${esc(dd.title)}</span><span class="summary-meta">Vertiefung</span></summary>
        <div class="accordion-body">
          <p style="margin:0;line-height:1.7;">${dd.content}</p>
        </div>
      </details>`
      )
      .join("");

    const relatedExercisesHtml = genre.exerciseIds
      .map((exId) => DATA.exercises.find((e) => e.id === exId))
      .filter(Boolean)
      .map(
        (ex) => `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;padding:0.65rem 0.9rem;background:var(--bg-elev);border:1px solid var(--border);border-radius:8px;">
        <div>
          <strong>Mission #${ex.number}:</strong> ${esc(ex.title)}
          <div style="font-size:0.8rem;color:var(--text-dim);">${esc(ex.duration)} • ${esc(ex.manualPages)}</div>
        </div>
        <button type="button" class="btn btn-sm genre-goto-ex" data-ex-id="${esc(ex.id)}">Im Lernpfad öffnen</button>
      </div>`
      )
      .join("");

    mount.innerHTML = `
      <section aria-labelledby="genres-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Motivwelten • Schwerpunkt Landschaft &amp; Street</div>
            <h2 id="genres-heading" class="section-title">Konkrete Bildrezepte und kreative Vertiefungen</h2>
            <p class="section-lead">Starte gerne mit Landschaft oder Street — und wenn dich an einem Wochenende Porträt, Nachthimmel oder Architektur reizen, liegt alles griffbereit daneben.</p>
          </div>
        </div>
        <div class="genre-pills" role="group" aria-label="Fotografie-Genre wählen">${pillsHtml}</div>
      </section>

      <article class="card" style="display:grid;gap:1.35rem;">
        <div>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.65rem;margin-bottom:0.4rem;">
            <span class="badge badge-accent">${esc(genre.badge)}</span>
            ${svgIcon(genre.iconKey, "icon icon-lg")}
          </div>
          <h3 style="font-size:1.4rem;margin:0 0 0.35rem;">${esc(genre.title)}</h3>
          <p style="margin:0 0 0.75rem;font-weight:500;">${esc(genre.tagline)}</p>
          <p style="margin:0;color:var(--text-muted);max-width:68ch;">${esc(genre.whyMft)}</p>
        </div>

        ${genre.weekendChallenge ? `<div class="challenge-callout"><strong>Kreative Einladung für draußen:</strong><br>${esc(genre.weekendChallenge)}</div>` : ""}

        <div>
          <h4 style="margin:0 0 0.7rem;">Start-Rezept an der E-M10 Mark IV</h4>
          <div class="recipe-grid">${recipeRows}</div>
        </div>

        <div>
          <h4 style="margin:0 0 0.65rem;">Spezielle Olympus-Werkzeuge dafür</h4>
          <ul style="margin:0;padding-left:1.25rem;display:grid;gap:0.4rem;color:var(--text-muted);">
            ${genre.specialTools.map((t) => `<li>${esc(t)}</li>`).join("")}
          </ul>
        </div>

        <div>
          <div class="accordion-controls">
            <h4 style="margin:0;">Vertiefende Praxis-Artikel</h4>
            <button type="button" class="btn btn-sm" id="genre-toggle-all" command="--toggle-all" commandfor="genre-accordion-group">Alle zuklappen</button>
          </div>
          <div id="genre-accordion-group" class="accordion-group">${deepDivesHtml}</div>
        </div>

        <div>
          <h4 style="margin:0 0 0.65rem;">Passende Praxis-Missionen</h4>
          <div style="display:grid;gap:0.55rem;">${relatedExercisesHtml}</div>
        </div>
      </article>
    `;

    mount.querySelectorAll(".genre-pill").forEach((b) => {
      b.addEventListener("click", () => {
        state.activeGenreId = b.getAttribute("data-genre-id");
        saveState();
        renderGenres();
      });
    });

    mount.querySelectorAll(".genre-goto-ex").forEach((b) => {
      b.addEventListener("click", () => {
        const exId = b.getAttribute("data-ex-id");
        state.exFilter = "all";
        saveState();
        renderLernpfad();
        activateTab("tab-lernpfad", { scrollTarget: `#card-${exId}` });
      });
    });

    wireAccordionGroup("genre-accordion-group", "genre-toggle-all");
  }

  // =========================================================================
  // TAB 5 RENDER: Learning Path (20 Voluntary Missions + Quiz)
  // =========================================================================
  function renderLernpfad() {
    const mount = document.getElementById("mount-lernpfad");
    if (!mount) return;

    const filterLabels = {
      all: "Alle 20 Missionen",
      open: "Noch offen",
      done: "Erledigt",
      starter: "Starter-Setup",
      landscape: "Landschaft",
      street: "Street"
    };

    const matchesFilter = (ex) => {
      const done = state.completedExercises.includes(ex.id);
      if (state.exFilter === "open") return !done;
      if (state.exFilter === "done") return done;
      if (state.exFilter === "starter") return ex.stageId === "stage-1";
      if (state.exFilter === "landscape") return ex.genreTag.toLowerCase().includes("landschaft");
      if (state.exFilter === "street") return ex.genreTag.toLowerCase().includes("street");
      return true;
    };

    const stagesHtml = DATA.learningStages
      .map((stage) => {
        const stageEx = DATA.exercises.filter((e) => e.stageId === stage.id);
        const stageDoneCount = stageEx.filter((e) => state.completedExercises.includes(e.id)).length;
        const visibleEx = stageEx.filter(matchesFilter);
        if (visibleEx.length === 0) return "";

        const cards = visibleEx
          .map((ex) => {
            const done = state.completedExercises.includes(ex.id);
            const note = state.exerciseNotes[ex.id] || "";
            return `
            <article id="card-${esc(ex.id)}" class="exercise-card ${done ? "done" : ""}">
              <div class="exercise-head">
                <div>
                  <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.4rem;">
                    <span class="badge badge-accent">Mission #${ex.number}</span>
                    <span class="badge">${esc(ex.duration)}</span>
                    <span class="badge">${esc(ex.genreTag)}</span>
                    <span class="badge">${esc(ex.manualPages)}</span>
                  </div>
                  <h4 style="margin:0;font-size:1.1rem;">${esc(ex.title)}</h4>
                </div>
                <label class="exercise-check">
                  <input type="checkbox" class="ex-checkbox" data-ex-id="${esc(ex.id)}" ${done ? "checked" : ""}>
                  <span>${done ? "Ausprobiert" : "Abhaken"}</span>
                </label>
              </div>
              <div><code>${esc(ex.menuPath)}</code></div>
              <p style="margin:0;"><strong>Ziel:</strong> ${esc(ex.goal)}</p>
              <ol style="margin:0;padding-left:1.3rem;display:grid;gap:0.3rem;color:var(--text-muted);">
                ${ex.steps.map((s) => `<li>${esc(s)}</li>`).join("")}
              </ol>
              <div class="tip-box" style="border-left:3px solid var(--green);">
                <strong style="color:var(--green);">Woran du merkst, dass es geklappt hat</strong>
                <span>${esc(ex.verificationCheck)}</span>
              </div>
              <details>
                <summary><span class="summary-title">Warum das so funktioniert &amp; Praxis-Hintergrund</span></summary>
                <div class="accordion-body">
                  <p style="margin:0;color:var(--text-muted);">${esc(ex.deepDive)}</p>
                  <label style="display:grid;gap:0.35rem;font-size:0.84rem;color:var(--text-dim);">
                    <span>Eigene Notiz zu dieser Mission (automatisch lokal gespeichert):</span>
                    <textarea class="notes-field ex-note-input" data-ex-id="${esc(ex.id)}" placeholder="z. B. Welche Objektiv-Blende hat mir draußen besonders gefallen?">${esc(note)}</textarea>
                  </label>
                </div>
              </details>
            </article>`;
          })
          .join("");

        return `
        <section style="display:grid;gap:0.9rem;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:0.5rem;padding-bottom:0.4rem;border-bottom:1px solid var(--border);">
            <div>
              <h3 style="margin:0;font-size:1.22rem;">${esc(stage.title)}</h3>
              <p style="margin:0.2rem 0 0;color:var(--text-muted);font-size:0.92rem;">${esc(stage.goal)}</p>
            </div>
            <span class="badge ${stageDoneCount === stageEx.length ? "badge-green" : ""}">${stageDoneCount} / ${stageEx.length}</span>
          </div>
          ${cards}
        </section>`;
      })
      .join("");

    const quizHtml = DATA.quizQuestions
      .map((q, idx) => {
        const picked = state.quizAnswers[q.id];
        const hasPicked = typeof picked === "number";
        return `
        <article class="quiz-card">
          <div style="font-family:var(--font-mono);font-size:0.76rem;color:var(--accent-strong);">SITUATION ${idx + 1} / ${DATA.quizQuestions.length}</div>
          <h4 style="margin:0;font-size:1.05rem;">${esc(q.question)}</h4>
          <div class="quiz-options">
            ${q.options
              .map((opt, optIdx) => {
                let cls = "quiz-option";
                if (hasPicked) {
                  if (optIdx === q.correctIndex) cls += " correct";
                  else if (optIdx === picked) cls += " wrong";
                }
                return `<button type="button" class="${cls}" data-qid="${esc(q.id)}" data-oidx="${optIdx}">
                  <span style="font-family:var(--font-mono);font-weight:700;">${String.fromCharCode(65 + optIdx)}</span>
                  <span>${esc(opt)}</span>
                </button>`;
              })
              .join("")}
          </div>
          ${hasPicked ? `<div class="tip-box" style="border-left:3px solid ${picked === q.correctIndex ? "var(--green)" : "var(--red)"};">${esc(q.explanation)}</div>` : ""}
        </article>`;
      })
      .join("");

    mount.innerHTML = `
      <section aria-labelledby="lp-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Spielerische Praxis-Missionen • Automatisch gespeichert</div>
            <h2 id="lp-heading" class="section-title">Dein 5-Stufen-Lernpfad zum Ausprobieren</h2>
            <p class="section-lead">Nimm dir eine einzelne Mission beim nächsten Spaziergang vor — alles hier bleibt rein optional und wird ganz entspannt in deinem Browser gespeichert.</p>
          </div>
          <div class="segmented" role="group" aria-label="Missionen filtern">
            ${Object.entries(filterLabels)
              .map(
                ([k, lbl]) =>
                  `<button type="button" class="ex-filter-btn" data-efilter="${k}" aria-pressed="${state.exFilter === k}">${esc(lbl)}</button>`
              )
              .join("")}
          </div>
        </div>
        <div style="display:grid;gap:2.2rem;">
          ${stagesHtml || '<p style="color:var(--text-muted);">Keine Missionen für diesen Filter gefunden.</p>'}
        </div>
      </section>

      <section aria-labelledby="quiz-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Kurzer Realitäts-Check</div>
            <h2 id="quiz-heading" class="section-title">8 Kamera-Situationen aus dem Alltag</h2>
            <p class="section-lead">Was drückst du unterwegs, wenn das Licht plötzlich dreht oder die Straße still bleibt? Mit direkter Erklärung zu jeder Antwort.</p>
          </div>
        </div>
        <div class="quiz-list">${quizHtml}</div>
      </section>
    `;

    mount.querySelectorAll(".ex-filter-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.exFilter = b.getAttribute("data-efilter");
        saveState();
        renderLernpfad();
      });
    });

    mount.querySelectorAll(".ex-checkbox").forEach((cb) => {
      cb.addEventListener("change", () => {
        const id = cb.getAttribute("data-ex-id");
        if (cb.checked) {
          if (!state.completedExercises.includes(id)) state.completedExercises.push(id);
        } else {
          state.completedExercises = state.completedExercises.filter((x) => x !== id);
        }
        saveState();
        renderStart();
        renderLernpfad();
      });
    });

    mount.querySelectorAll(".ex-note-input").forEach((ta) => {
      ta.addEventListener("input", () => {
        const id = ta.getAttribute("data-ex-id");
        state.exerciseNotes[id] = ta.value;
        saveState();
      });
    });

    mount.querySelectorAll(".quiz-option").forEach((b) => {
      b.addEventListener("click", () => {
        const qid = b.getAttribute("data-qid");
        const oidx = Number(b.getAttribute("data-oidx"));
        state.quizAnswers[qid] = oidx;
        saveState();
        renderStart();
        renderLernpfad();
      });
    });
  }

  // =========================================================================
  // TAB 6 RENDER: MFT Calculator, Comparison Table, FAQ & PDF Manual Index
  // =========================================================================
  function renderHandbuch() {
    const mount = document.getElementById("mount-handbuch");
    if (!mount) return;

    const tableRows = DATA.defaultVsProTable
      .map(
        (r) => `
      <tr>
        <td><strong>${esc(r.setting)}</strong></td>
        <td style="color:var(--text-muted);">${esc(r.factory)}</td>
        <td><strong style="color:var(--green);">${esc(r.recommended)}</strong></td>
        <td><code>${esc(r.path)}</code><br><span style="font-size:0.78rem;color:var(--text-dim);">${esc(r.page)}</span></td>
      </tr>`
      )
      .join("");

    const faqHtml = DATA.troubleshootingFaq
      .map(
        (item) => `
      <details>
        <summary><span class="summary-title">${esc(item.q)}</span><span class="summary-meta">Praxis-Antwort</span></summary>
        <div class="accordion-body">
          <p style="margin:0;color:var(--text-muted);">${item.a}</p>
        </div>
      </details>`
      )
      .join("");

    const jumpsHtml = DATA.manualQuickIndex
      .map(
        (entry) => `
      <a class="manual-jump" href="${esc(manualPageHref(entry.pageNum))}" target="_blank" rel="noopener">
        <span>${esc(entry.topic)}</span>
        <span class="badge">${esc(entry.pages)}</span>
      </a>`
      )
      .join("");

    mount.innerHTML = `
      <section class="card" aria-labelledby="calc-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Micro-Four-Thirds Faktor 2,0 • c = 0,015 mm</div>
            <h2 id="calc-heading" class="section-title">Schärfentiefe-, Hyperfokal- &amp; Sternenzeit-Rechner</h2>
            <p class="section-lead">Gib Brennweite, Blende und Abstand ein und sieh sofort die Kleinbild-Entsprechung sowie von wo bis wo dein Foto scharf wird.</p>
          </div>
        </div>
        <div class="calc-grid">
          <div class="calc-field">
            <label for="calc-focal">Brennweite Objektiv (mm)</label>
            <input id="calc-focal" type="number" min="7" max="300" step="1" value="14">
          </div>
          <div class="calc-field">
            <label for="calc-ap">Blende (f/)</label>
            <select id="calc-ap">
              ${[1.4, 1.8, 2.0, 2.8, 3.5, 4.0, 5.6, 8.0, 11.0, 16.0]
                .map((n) => `<option value="${n}" ${n === 5.6 ? "selected" : ""}>f/${n}</option>`)
                .join("")}
            </select>
          </div>
          <div class="calc-field">
            <label for="calc-dist">Entfernung zum Motiv (Meter)</label>
            <input id="calc-dist" type="number" min="0.3" max="100" step="0.5" value="3">
          </div>
        </div>
        <div id="calc-results" class="recipe-grid"></div>
      </section>

      <section class="card" aria-labelledby="compare-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Schnellübersicht</div>
            <h2 id="compare-heading" class="section-title">Werkseinstellung vs. ruhige OM-D Praxis-Basis</h2>
          </div>
          <button type="button" class="btn btn-sm no-print" id="btn-print-cheatsheet">Spickzettel drucken / als PDF sichern</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Funktion</th>
                <th>Ab Werk</th>
                <th>Unsere Empfehlung</th>
                <th>Menü &amp; Seite</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="faq-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Wenn unterwegs etwas hakt</div>
            <h2 id="faq-heading" class="section-title">Sechs typische Fragen im Kamera-Alltag</h2>
          </div>
          <button type="button" class="btn btn-sm" id="faq-toggle-all" command="--toggle-all" commandfor="faq-accordion-group">Alle ausklappen</button>
        </div>
        <div id="faq-accordion-group" class="accordion-group">${faqHtml}</div>
      </section>

      <section class="card" aria-labelledby="manual-heading">
        <div class="section-head">
          <div>
            <div class="section-kicker">Offizielle Unterlage • Modell IM021 (194 Seiten)</div>
            <h2 id="manual-heading" class="section-title">Originale Bedienungsanleitung &amp; direkte Seitensprünge</h2>
            <p class="section-lead">${esc(DATA.meta.oiShareInfo)}<br>${esc(DATA.meta.omWorkspaceInfo)}</p>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary btn-sm" href="${esc(DATA.meta.manualLocalUrl)}" target="_blank" rel="noopener">
              Deutsche PDF-Anleitung öffnen ${svgIcon("external")}
            </a>
            <a class="btn btn-sm" href="${esc(DATA.meta.manualPortalUrl)}" target="_blank" rel="noopener">
              OM System Portal ${svgIcon("external")}
            </a>
          </div>
        </div>
        <div class="manual-index-grid">${jumpsHtml}</div>
      </section>
    `;

    const calcFocal = document.getElementById("calc-focal");
    const calcAp = document.getElementById("calc-ap");
    const calcDist = document.getElementById("calc-dist");
    const calcOut = document.getElementById("calc-results");

    const computeMft = () => {
      const f = Math.max(7, Math.min(300, Number(calcFocal.value) || 14));
      const N = Number(calcAp.value) || 5.6;
      const distM = Math.max(0.2, Number(calcDist.value) || 3);
      const distMm = distM * 1000;
      const c = 0.015; // MFT Circle of Confusion (mm)

      const H_mm = (f * f) / (N * c) + f;
      const H_m = H_mm / 1000;
      const near_m = ((H_mm * distMm) / (H_mm + (distMm - f))) / 1000;
      const farDenom = H_mm - (distMm - f);
      const farStr = farDenom <= 0 ? "Unendlich" : `${((H_mm * distMm) / farDenom / 1000).toFixed(2)} m`;
      const eqFocal = Math.round(f * 2);
      const npfApprox = Math.round(500 / (f * 2));

      calcOut.innerHTML = `
        <div class="recipe-item">
          <div class="recipe-label">Kleinbild-Blickwinkel (2,0x Crop)</div>
          <div class="recipe-val">${eqFocal} mm KB-Äquivalent</div>
        </div>
        <div class="recipe-item">
          <div class="recipe-label">Hyperfokal-Distanz</div>
          <div class="recipe-val">${H_m.toFixed(2)} m (alles ab ca. ${(H_m / 2).toFixed(2)} m bis Unendlich scharf)</div>
        </div>
        <div class="recipe-item">
          <div class="recipe-label">Scharfer Bereich bei ${distM.toFixed(1)} m Abstand</div>
          <div class="recipe-val">Von ${near_m.toFixed(2)} m bis ${farStr}</div>
        </div>
        <div class="recipe-item">
          <div class="recipe-label">Max. Sternen-Belichtungszeit (ohne Nachführung)</div>
          <div class="recipe-val">ca. ${Math.max(1, npfApprox)} Sek. (Vollformat-Schärfentiefe: ~f/${(N * 2).toFixed(1)})</div>
        </div>
      `;
    };

    [calcFocal, calcAp, calcDist].forEach((el) => {
      if (el) el.addEventListener("input", computeMft);
    });
    computeMft();

    const printBtn = document.getElementById("btn-print-cheatsheet");
    if (printBtn) printBtn.addEventListener("click", () => window.print());

    wireAccordionGroup("faq-accordion-group", "faq-toggle-all");
  }

  // =========================================================================
  // ACCORDIONS (Safari Fallback + State Sync) & GLOBAL SEARCH & SHORTCUTS
  // =========================================================================
  function wireAccordionGroup(groupId, btnId) {
    const group = document.getElementById(groupId);
    const btn = document.getElementById(btnId);
    if (!group || !btn) return;

    const syncLabel = () => {
      const details = Array.from(group.querySelectorAll("details"));
      if (details.length === 0) return;
      const allOpen = details.every((d) => d.open);
      btn.textContent = allOpen ? "Alle zuklappen" : "Alle ausklappen";
    };

    const toggleAll = () => {
      const details = Array.from(group.querySelectorAll("details"));
      const shouldOpen = !details.every((d) => d.open);
      details.forEach((d) => {
        d.open = shouldOpen;
      });
      syncLabel();
    };

    btn.addEventListener("command", (e) => {
      if (e.command === "--toggle-all") toggleAll();
    });
    btn.addEventListener("click", (e) => {
      // Fallback for browsers without native commandfor
      if (!("commandForElement" in HTMLButtonElement.prototype)) {
        e.preventDefault();
        toggleAll();
      }
    });
    group.addEventListener("toggle", syncLabel, { capture: true });
    syncLabel();
  }

  function runGlobalSearch(rawQuery) {
    const q = rawQuery.trim().toLowerCase();
    const box = document.getElementById("search-results-region");
    const clearBtn = document.getElementById("search-clear");
    if (clearBtn) clearBtn.hidden = q.length === 0;
    if (!box) return;

    if (q.length < 2) {
      box.hidden = true;
      box.innerHTML = "";
      return;
    }

    const hits = [];
    DATA.dslrBridge.forEach((b) => {
      if (`${b.title} ${b.summary} ${b.paragraphs.join(" ")}`.toLowerCase().includes(q)) {
        hits.push({ badge: "Grundlagen", title: b.title, tab: "tab-start", sec: `#${b.id}` });
      }
    });
    DATA.bodyControls.forEach((c) => {
      if (`${c.name} ${c.shortDesc} ${c.details}`.toLowerCase().includes(q)) {
        hits.push({ badge: `Taste #${c.number}`, title: c.name, tab: "tab-ueberblick", ctrlId: c.id });
      }
    });
    DATA.curatedMenuHighlights.forEach((h) => {
      if (`${h.title} ${h.where} ${h.why}`.toLowerCase().includes(q)) {
        hits.push({ badge: `Menü Top ${h.step}`, title: h.title, tab: "tab-menue", menuMode: "curated" });
      }
    });
    DATA.scpTiles.forEach((t) => {
      if (`${t.label} ${t.code} ${t.options} ${t.howToChange}`.toLowerCase().includes(q)) {
        hits.push({ badge: `SCP S.${t.page}`, title: `${t.label} (${t.code})`, tab: "tab-menue", scpId: t.id });
      }
    });
    DATA.exercises.forEach((ex) => {
      if (`${ex.title} ${ex.goal} ${ex.menuPath}`.toLowerCase().includes(q)) {
        hits.push({ badge: `Mission #${ex.number}`, title: ex.title, tab: "tab-lernpfad", sec: `#card-${ex.id}` });
      }
    });
    DATA.manualQuickIndex.forEach((m) => {
      if (`${m.topic} ${m.pages}`.toLowerCase().includes(q)) {
        hits.push({ badge: `PDF ${m.pages}`, title: m.topic, href: manualPageHref(m.pageNum) });
      }
    });

    const sliced = hits.slice(0, 12);
    box.hidden = false;
    box.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
          <strong>${hits.length} Treffer für „${esc(rawQuery)}“</strong>
          <span style="font-size:0.82rem;color:var(--text-dim);">Klicke auf einen Treffer zum Springen</span>
        </div>
        <div class="search-results-grid">
          ${
            sliced.length > 0
              ? sliced
                  .map((h, i) =>
                    h.href
                      ? `<a class="search-hit" href="${esc(h.href)}" target="_blank" rel="noopener"><span class="badge">${esc(h.badge)}</span><strong>${esc(h.title)}</strong></a>`
                      : `<button type="button" class="search-hit" data-hit-idx="${i}"><span class="badge badge-accent">${esc(h.badge)}</span><strong>${esc(h.title)}</strong></button>`
                  )
                  .join("")
              : `<p style="margin:0;color:var(--text-muted);">Kein passender Eintrag — versuche z. B. "Blende", "Raw", "Lautlos", "SCP", "Live Composite".</p>`
          }
        </div>
      </div>`;

    box.querySelectorAll("button.search-hit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const hit = sliced[Number(btn.getAttribute("data-hit-idx"))];
        if (!hit) return;
        if (hit.ctrlId) {
          const ctrl = DATA.bodyControls.find((c) => c.id === hit.ctrlId);
          if (ctrl) {
            state.selectedControlId = ctrl.id;
            state.camView = ctrl.view;
            markControlExplored(ctrl.id);
            saveState();
            renderUeberblick();
          }
        }
        if (hit.scpId) {
          state.selectedScpId = hit.scpId;
          saveState();
          renderMenue();
        }
        if (hit.menuMode) {
          state.menuDepthMode = hit.menuMode;
          saveState();
          renderMenue();
        }
        box.hidden = true;
        activateTab(hit.tab, { scrollTarget: hit.sec || undefined });
      });
    });
  }

  function wireGlobalControls() {
    applyTheme(state.theme);
    updateHeaderProgress();

    // Tab clicks
    Object.keys(TAB_PANEL_MAP).forEach((tId) => {
      const btn = document.getElementById(tId);
      if (btn) btn.addEventListener("click", () => activateTab(tId));
    });

    // Mobile bottom nav
    document.querySelectorAll(".thumb-nav-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const target = b.getAttribute("data-target-tab");
        if (target) {
          activateTab(target);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    });

    // Keyboard fallback on tablist (ArrowLeft / ArrowRight / Home / End)
    const tabIds = Object.keys(TAB_PANEL_MAP);
    const tablist = document.querySelector('[role="tablist"]');
    if (tablist) {
      tablist.addEventListener("keydown", (e) => {
        const current = document.activeElement?.id;
        const idx = tabIds.indexOf(current);
        if (idx === -1) return;
        let nextIdx = -1;
        if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabIds.length;
        else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabIds.length) % tabIds.length;
        else if (e.key === "Home") nextIdx = 0;
        else if (e.key === "End") nextIdx = tabIds.length - 1;
        if (nextIdx >= 0) {
          e.preventDefault();
          activateTab(tabIds[nextIdx], { focusTab: true });
        }
      });
    }

    // Sync browser Find-in-Page into hidden="until-found" panels
    Object.entries(TAB_PANEL_MAP).forEach(([tabId, panelId]) => {
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.addEventListener("beforematch", () => activateTab(tabId));
      }
    });

    // Theme switch
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
        saveState();
      });
    }

    // Global Search
    const searchInput = document.getElementById("global-search");
    const searchClear = document.getElementById("search-clear");
    if (searchInput) {
      searchInput.addEventListener("input", () => runGlobalSearch(searchInput.value));
    }
    if (searchClear && searchInput) {
      searchClear.addEventListener("click", () => {
        searchInput.value = "";
        runGlobalSearch("");
        searchInput.focus();
      });
    }

    // Share / Backup Modal
    const dialog = document.getElementById("share-dialog");
    const shareOpen = document.getElementById("btn-share-open");
    const shareClose = document.getElementById("btn-share-close");
    const shareInput = document.getElementById("share-url-input");
    const copyBtn = document.getElementById("btn-copy-share");
    const feedback = document.getElementById("share-feedback");

    if (shareOpen && dialog) {
      shareOpen.addEventListener("click", () => {
        if (shareInput) shareInput.value = encodeShareUrl();
        if (feedback) feedback.textContent = "";
        dialog.showModal();
      });
    }
    if (shareClose && dialog) {
      shareClose.addEventListener("click", () => dialog.close());
    }
    if (dialog) {
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
      });
    }
    if (copyBtn && shareInput) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(shareInput.value);
          if (feedback) feedback.textContent = "Link in die Zwischenablage kopiert.";
        } catch {
          shareInput.select();
          if (feedback) feedback.textContent = "Link markiert — jetzt kopieren (Cmd+C / Teilen).";
        }
      });
    }

    const exportBtn = document.getElementById("btn-export-json");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "omd-moment-lernstand.json";
        a.click();
        URL.revokeObjectURL(url);
        if (feedback) feedback.textContent = "Backup-Datei heruntergeladen.";
      });
    }

    const importInput = document.getElementById("input-import-json");
    if (importInput) {
      importInput.addEventListener("change", async () => {
        const file = importInput.files?.[0];
        if (!file) return;
        try {
          const loaded = JSON.parse(await file.text());
          state = { ...DEFAULT_STATE, ...loaded };
          saveState();
          renderAll();
          activateTab(state.activeTabId);
          if (feedback) feedback.textContent = "Backup erfolgreich wiederhergestellt.";
        } catch {
          if (feedback) feedback.textContent = "Datei konnte nicht gelesen werden.";
        }
      });
    }

    const resetBtn = document.getElementById("btn-reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state = { ...DEFAULT_STATE, theme: state.theme };
        saveState();
        renderAll();
        activateTab("tab-start");
        if (feedback) feedback.textContent = "Alle Markierungen wurden zurückgesetzt.";
      });
    }

    // Share link banner
    const applyShareBtn = document.getElementById("btn-apply-share");
    const dismissShareBtn = document.getElementById("btn-dismiss-share");
    const banner = document.getElementById("share-import-banner");

    if (applyShareBtn) {
      applyShareBtn.addEventListener("click", () => {
        if (pendingSharePayload) {
          if (Array.isArray(pendingSharePayload.c)) state.completedExercises = pendingSharePayload.c;
          if (pendingSharePayload.q && typeof pendingSharePayload.q === "object") state.quizAnswers = pendingSharePayload.q;
          if (pendingSharePayload.g) state.activeGenreId = pendingSharePayload.g;
          if (pendingSharePayload.p) state.scpPreset = pendingSharePayload.p;
          if (Array.isArray(pendingSharePayload.b)) state.basicsRead = pendingSharePayload.b;
          saveState();
          renderAll();
        }
        if (banner) banner.hidden = true;
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete("share");
        history.replaceState(null, "", cleanUrl.toString());
      });
    }
    if (dismissShareBtn && banner) {
      dismissShareBtn.addEventListener("click", () => {
        banner.hidden = true;
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete("share");
        history.replaceState(null, "", cleanUrl.toString());
      });
    }

    // Desktop shortcuts (when not typing in a field)
    document.addEventListener("keydown", (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "/" && searchInput) {
        e.preventDefault();
        searchInput.focus();
      } else if (e.key === "d" || e.key === "D") {
        applyTheme(state.theme === "dark" ? "light" : "dark");
        saveState();
      } else if (/^[1-6]$/.test(e.key)) {
        activateTab(tabIds[Number(e.key) - 1]);
      }
    });
  }

  function renderAll() {
    renderStart();
    renderUeberblick();
    renderMenue();
    renderGenres();
    renderLernpfad();
    renderHandbuch();
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("./sw.js").catch(() => undefined);
    }
  }

  function init() {
    renderAll();
    wireGlobalControls();
    checkIncomingShareParam();
    activateTab(state.activeTabId);
    registerServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
