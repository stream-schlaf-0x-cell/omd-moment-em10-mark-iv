/**
 * Wissens-, Grundlagen- & Praxis-Datenbank: OM-D Moment (Olympus OM-D E-M10 Mark IV, Modell IM021)
 * Alle Menübegriffe, Tastenbezeichnungen, Standardwerte und Seitenzahlen basieren auf der
 * offiziellen deutschen Bedienungsanleitung (IM021, 194 Seiten).
 */
window.OMD_DATA = {
  "meta": {
    "cameraName": "Olympus OM-D E-M10 Mark IV",
    "modelCode": "IM021",
    "manualLocalUrl": "docs/OM-D_E-M10_Mark_IV_Bedienungsanleitung_DE.pdf",
    "manualOnlineUrl": "https://download.omsystem.com/pages/inst/em10m4/manual_em10m4_DEU.pdf",
    "manualPortalUrl": "https://download.omsystem.com/pages/inst/em10m4/index.html",
    "manualEnUrl": "https://download.omsystem.com/pages/inst/em10m4/manual_em10m4_ENU.pdf",
    "oiShareInfo": "OM Image Share (OI.Share) – Smartphone-Fernsteuerung, Geotagging & Bildtransfer via WLAN/Bluetooth (S. 148–160)",
    "omWorkspaceInfo": "Olympus Workspace / OM Workspace – Kostenlose Desktop-Software für RAW-Entwicklung (.ORF), Fokus-Stacking-Check & Firmware-Updates (S. 15, 161)",
    "sensorSpecs": {
      "megapixels": "20,3 Mio. Pixel (Live MOS 4/3\", 17,3 × 13,0 mm)",
      "cropFactor": 2,
      "ibis": "5-Achsen-Sensor-Shift-Bildstabilisator (bis ca. 4,5 EV)",
      "evf": "OLED elektronischer Sucher, 2,36 Mio. Punkte, 100 % Bildfeld, Dioptrien -4 bis +2",
      "monitor": "3,0\" Touchscreen-Monitor (1,04 Mio. Punkte), 80° hoch / 180° herunterklappbar",
      "shutter": "Mech. 1/4000–60 s (X-Sync 1/250 s) • Lautlos-Modus bis 1/16000 s",
      "afSystem": "121-Punkt-Kontrast-AF + Gesichts-/Augenerkennung (links/rechts)"
    }
  },
  "bodyControls": [
    {
      "id": "on-off-flash",
      "view": "top",
      "number": "1",
      "name": "ON/OFF-Hebel & Blitz-Aufklapper (Blitz-UP)",
      "manualPage": 15,
      "alsoPages": "11, 21, 74",
      "category": "Strom & Blitz",
      "coords": {
        "x": 145,
        "y": 122
      },
      "shortDesc": "Kamera ein-/ausschalten und integrierten Blitz mechanisch ausklappen.",
      "details": "Auf der linken Kameraschulter sitzt der drehbare Hauptschalter. In Stellung ON ist die Kamera betriebsbereit. Über ON hinaus gibt es eine federnde Position Blitz-UP: Schieb den Hebel kurz dorthin, um den eingebauten Blitz (Leitzahl 5,8 bei ISO 100) mechanisch ausklappen zu lassen. Hinweis: Der Blitz klappt bei der Mark IV niemals ungewollt automatisch auf!",
      "landscapeTip": "Blitz bleibt eingeklappt ([Blitz Aus]). Nur bei extremem Vordergrund-Schatten im Nahbereich gezielt über Blitz-UP ausklappen und Blitzstärke [Blitz +/-] auf -1,3 EV reduzieren.",
      "streetTip": "Im Street-Einsatz bleibt der Blitz fast immer eingeklappt – es sei denn, du nutzt bei harten Schatten oder Nacht-Street bewusst den Aufhellblitz oder SLOW2 (2. Verschlussvorhang).",
      "quickExercise": "Schalte die Kamera ein und teste den Federdruck bis Blitz-UP. Klappe den Blitz danach einfach wieder sanft mit dem Finger ins Gehäuse zurück (S. 74).",
      "pctCoords": {
        "x": 20.2,
        "y": 56.5
      },
      "detailImage": "assets/camera/detail-top-left.jpg"
    },
    {
      "id": "shortcut-btn",
      "view": "top",
      "number": "2",
      "name": "Kurzwahl-Taste [↗] (Verknüpfungstaste)",
      "manualPage": 33,
      "alsoPages": "11, 34, 80",
      "category": "Schnellzugriff",
      "coords": {
        "x": 205,
        "y": 135
      },
      "shortDesc": "Kontextabhängiger Direktzugriff – in P/A/S/M das Super Control Panel!",
      "details": "Direkt neben dem ON/OFF-Hebel sitzt die [↗]-Taste. Ihre Funktion passt sich dem Modus auf der Programmwählscheibe an: In AUTO öffnet sie den Live Guide (S. 34); in SCN/AP/ART öffnet sie die Auswahlleiste der Motivprogramme/Effekte; und in P/A/S/M ruft sie (sofern im Menü aktiviert, S. 136) sofort die LV-Monitor-Funktionsanzeige (Super Control Panel) auf.",
      "landscapeTip": "Schnellster Wechsel von Bildmodus, ISO oder AF-Messfeld auf dem Stativ, ohne tief ins Menü zu tauchen.",
      "streetTip": "Wenn du im M/A/S-Modus die Live-Ansicht frei halten willst, reicht ein Tipp auf [↗] für das komplette Super Control Panel.",
      "quickExercise": "Drehe das Modusrad auf AUTO und drücke [↗] (Live Guide erscheint). Drehe dann auf AP und drücke [↗] (die 9 erweiterten Fotomodi erscheinen).",
      "pctCoords": {
        "x": 13.6,
        "y": 61.5
      },
      "detailImage": "assets/camera/detail-top-left.jpg"
    },
    {
      "id": "mode-dial",
      "view": "top",
      "number": "3",
      "name": "Programmwählscheibe (Modus-Einstellrad)",
      "manualPage": 29,
      "alsoPages": "11, 34–68",
      "category": "Belichtungsmodi",
      "coords": {
        "x": 468,
        "y": 120
      },
      "shortDesc": "Wählt zwischen AUTO, P, A, S, M, AP, ART, SCN und Video Video.",
      "details": "Das zentrale Rad bestimmt, wie viel Kontrolle du über Belichtung und Computational-Funktionen übernimmst. Für ernsthafte Fotografie sind P, A (Blende vorwählen), S (Zeit vorwählen), M (Manuell + Live Time/Composite) und AP (Erweiterter Fotomodus mit HDR, Keystone, Focus/AE-Bracketing) entscheidend.",
      "landscapeTip": "Stammsitz: A (Blendenpriorität) auf f/5.6–f/8 für Landschaften, sowie AP für AE-Belichtungsreihe / Fokus-Belichtungsreihe / HDR und M für Live Time / Live Composite.",
      "streetTip": "Stammsitz: S (Verschlusspriorität auf 1/250–1/500 s mit ISO AUTO) für spontane Bewegung, oder A (f/4–f/5.6) für ruhige Architektur-Streets.",
      "quickExercise": "Drehe die Programmwählscheibe von AUTO über P → A → S → M und beobachte links unten im Display, ob Vorder- und Hinterrad jeweils (+/-) oder Blende/Zeit steuern.",
      "pctCoords": {
        "x": 68.6,
        "y": 52.5
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "rear-dial",
      "view": "top",
      "number": "4",
      "name": "Hinteres Einstellrad",
      "manualPage": 56,
      "alsoPages": "11, 54–62, 136",
      "category": "Einstellräder",
      "coords": {
        "x": 545,
        "y": 158
      },
      "shortDesc": "Steuert den Hauptparameter des Modus (A: Blende, S: Zeit, P: Shift, M: Zeit).",
      "details": "Die E-M10 Mark IV besitzt zwei hochwertige Metall-Einstellräder – ein Feature, das oft erst teurere Kameras bieten! Standardbelegung des hinteren Rads: In P = Programm-Shift (Ps), in A = Blende (FNo.), in S = Verschlusszeit, in M = Verschlusszeit (inkl. Weiterdrehen über 60\" hinaus zu BULB, LIVE TIME und LIVECOMP). Bei Wiedergabe: Bilder zoomen.",
      "landscapeTip": "Im A-Modus stellst du hier sekundenschnell f/5.6 oder f/8 ein. Im M-Modus drehst du darüber bis zu LIVE TIME.",
      "streetTip": "Im S-Modus blitzschnell zwischen 1/500 s (Einfrieren) und 1/15 s (Mitzieher/Bewegungsunschärfe) umschalten.",
      "quickExercise": "Wähle Modus A, richte die Kamera auf ein nahes Objekt vor einem fernen Hintergrund und drehe das hintere Einstellrad von f/3.5 auf f/8. Beobachte die Schärfe und Verschlusszeit!",
      "pctCoords": {
        "x": 82.5,
        "y": 64.5
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "front-dial",
      "view": "top",
      "number": "5",
      "name": "Vorderes Einstellrad (um den Auslöser)",
      "manualPage": 70,
      "alsoPages": "11, 54–62, 136",
      "category": "Einstellräder",
      "coords": {
        "x": 622,
        "y": 125
      },
      "shortDesc": "Direkte Belichtungskorrektur (+/-) in P/A/S, Blende in M.",
      "details": "Das gerändelte Rad rund um den Auslöser liegt direkt unter deinem Zeigefinger. Standardbelegung: In P, A und S verstellst du damit sofort die Belichtungskorrektur (+/- bis ±5 EV), ohne je eine Taste zu drücken! Im Modus M steuert es die Blende (FNo.). Hinweis: Unter MENU → Anwender B → Einstellfunktion kannst du Vorder- und Hinterrad pro Modus tauschen (S. 136).",
      "landscapeTip": "Nutze die +/- Korrektur ständig bei hellem Himmel (-0,3 bis -0,7 EV gegen ausgefressene Wolken) oder Schnee (+0,7 bis +1,3 EV).",
      "streetTip": "Bei extremem Gegenlicht oder dunklen Gassen mit weißer Hauswand blitzschnell auf -0,7 EV drehen – Dramatik und sichere Lichter inklusive.",
      "quickExercise": "Wähle Modus A, richte die Kamera auf ein Fenster und drehe am vorderen Rad von 0.0 auf -1.0 EV. Beobachte, wie das Histogramm nach links wandert und Highlights Detail zurückgewinnen.",
      "pctCoords": {
        "x": 80,
        "y": 34
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "shutter-btn",
      "view": "top",
      "number": "6",
      "name": "Auslöser (2-Stufen-Druckpunkt)",
      "manualPage": 22,
      "alsoPages": "11, 23, 142",
      "category": "Aufnahme",
      "coords": {
        "x": 586,
        "y": 102
      },
      "shortDesc": "Halb drücken = Autofokus & Belichtung messen; Ganz drücken = Auslösen.",
      "details": "Stufe 1 (leicht andrücken): Aktiviert den Autofokus (grüner Rahmen + Bestätigungspunkt) und speichert in S-AF-Modus 1 die Belichtung. Stufe 2 (durchdrücken): Löst den Verschluss aus. Im Menü Anwender A → Auslösepriorität lässt sich einstellen, ob die Kamera auch vor bestätigtem Fokus auslösen darf (Standard: S-AF = Aus/Fokuspriorität, C-AF = Ein/Auslösepriorität).",
      "landscapeTip": "Mit eingeschaltetem Selbstauslöser (2s-Timer) oder Anti-Shock (◆) löst du erschütterungsfrei auf dem Stativ aus – perfekt mit einem leichten Antippen.",
      "streetTip": "Für blitzschnelle Reaktionen Back-Button-Focus testen (Anwender A → AEL/AFL Modus 3) oder Auslösepriorität nutzen, damit die Kamera niemals blockiert.",
      "quickExercise": "Drücke den Auslöser nur halb auf ein Objekt in 1 m Entfernung, halte ihn halb gedrückt und schwenke leicht zur Seite (Fokus-und-Schwenk-Technik, bis das AF-Feld-Wählen in Fleisch und Blut übergeht).",
      "pctCoords": {
        "x": 79.8,
        "y": 41.5
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "rec-share-btn",
      "view": "top",
      "number": "7",
      "name": "REC- (Video) / Freigabe-Taste [<]",
      "manualPage": 65,
      "alsoPages": "11, 102, 112, 136",
      "category": "Programmierbar / Video",
      "coords": {
        "x": 540,
        "y": 90
      },
      "shortDesc": "Startet sofort Videoaufnahmen; in der Wiedergabe für OI.Share markieren.",
      "details": "Im Aufnahmemodus startet diese Taste direkt eine Videoaufnahme (auch aus P/A/S/M heraus!). In der Wiedergabe dient sie als Freigabe-Taste (<): Ein Tipp markiert das Bild für den nächsten Smartphone-Transfer über OM Image Share. Profi-Tipp: Unter MENU → Anwender B → Tastenfunktion → REC-Tastenfunktion (S. 136) lässt sie sich komplett umbelegen – z. B. auf HDR, AE-Belichtungsreihe, Vorschau (Abblenden) oder AF-Modus!",
      "landscapeTip": "Ideal umbelegen auf 'AE BKT' (Belichtungsreihe) oder 'Vorschau' (Schärfentiefe vorab bei Arbeitsblende prüfen).",
      "streetTip": "Ideal umbelegen auf 'RAW↔JPEG' oder 'Bildmodus' (schneller Wechsel zwischen Natürlich und Monoton Schwarzweiß!).",
      "quickExercise": "Gehe zu MENU → Anwender B → Tastenfunktion → REC-Tastenfunktion und sieh dir alle möglichen Umbelegungen an (S. 102).",
      "pctCoords": {
        "x": 91.2,
        "y": 58.2
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "zoom-x2-btn",
      "view": "top",
      "number": "8",
      "name": "Lupe/Tele-Taste (x2)",
      "manualPage": 71,
      "alsoPages": "11, 102, 136",
      "category": "Programmierbar / Zoom",
      "coords": {
        "x": 472,
        "y": 74
      },
      "shortDesc": "Standard: 2× Digital-Tele; Profi-Tipp: Umlegen auf Lupe (Fokuslupe) oder Peaking!",
      "details": "Ab Werk aktiviert ein Druck die Funktion 'Dig. Tele-Konverter' (2-fache Vergrößerung der Bildmitte als JPEG; das parallele RAW bleibt vollständig erhalten!). Da man mit einer Festbrennweite oder in der Landschaftsfotografie aber oft eine echte Fokuslupe (Lupe) oder Fokus Peaking braucht, empfiehlt es sich dringend, diese Taste unter MENU → Anwender B → Tastenfunktion → Digitaltele-Tastenfunktion auf Lupe (Vergrößern) oder Peaking umzustellen!",
      "landscapeTip": "Umbelegen auf Lupe (Vergrößern): Ein Druck zoomt 5×/7×/10×/14× in den Live-View – unverzichtbar zum punktgenauen manuellen Scharfstellen in der Ferne!",
      "streetTip": "Als Digitaler Tele-Konverter liefert die Taste aus einer kompakten 17-mm-Linse (34 mm KB) per Knopfdruck eine 68-mm-Reportage-Perspektive – ideal im JPG+RAW-Modus!",
      "quickExercise": "Drücke im A-Modus [x2]: Im Monitor erscheint 'x2'. Schalte JPEG+RAW ein, mache ein Testfoto und prüfe danach auf der SD-Karte, dass das RAW trotzdem den vollen Weitwinkel speichert (S. 71).",
      "pctCoords": {
        "x": 89.9,
        "y": 47.2
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "evf-lv-btn",
      "view": "rear",
      "number": "9",
      "name": "Elektronischer Sucher (EVF) & |◯| (LV)-Taste",
      "manualPage": 25,
      "alsoPages": "12, 14, 141",
      "category": "Sucher & Anzeige",
      "coords": {
        "x": 345,
        "y": 75
      },
      "shortDesc": "2,36 Mio. OLED-Sucher + Wechsel Sucher/Monitor (+ Gedrückt halten für Setup).",
      "details": "Links neben dem Sucherokular sitzt das kleine Dioptrien-Rädchen (für Brillenträger, S. 14). Rechts daneben liegt die |◯| (Live-View)-Taste: Kurz drücken schaltet zwischen elektronischem Sucher und Klappmonitor um (oder schließt den automatischen Augensensor vorübergehend aus). WICHTIGE ZWEITFUNKTION: Halte |◯| 1 Sekunde gedrückt, um direkt zum Menü [Auto Umschalten EVF] zu springen (S. 25, 141)!",
      "landscapeTip": "Bei grellem Sonnenlicht auf dem Berg zeigt dir der abgedunkelte OLED-Sucher Farben, Kontrast und Histogramm viel präziser als jeder Monitor.",
      "streetTip": "Wenn du aus Hüfthöhe fotografierst, kann deine Jacke den Augensensor auslösen und den Klappmonitor abschalten! Tipp: Schalte über langes Drücken von |◯| [Auto Umschalten EVF] kurz auf Aus.",
      "quickExercise": "Drehe das Dioptrien-Rad links am Sucher so lange, bis die Zahlen am unteren Rand des Suchers gestochen scharf sind (Kamera ohne Objektiv auf eine helle Wand richten). Danach |◯| gedrückt halten.",
      "pctCoords": {
        "x": 45,
        "y": 13.5
      },
      "detailImage": "assets/camera/manual-p12.png"
    },
    {
      "id": "ael-afl-btn",
      "view": "rear",
      "number": "10",
      "name": "AEL/AFL-Taste (Belichtungsspeicher / Back-Button-AF)",
      "manualPage": 104,
      "alsoPages": "12, 102, 135, 142",
      "category": "Fokus & Messung",
      "coords": {
        "x": 472,
        "y": 80
      },
      "shortDesc": "Speichert Belichtung (AE) – oder wird zum Profi-Daumenfokus (Back-Button-Focus).",
      "details": "Standardmäßig hält die Taste beim Drücken den gemessenen Belichtungswert fest (AE-Lock, grün 'AEL' im Display), während du neu ausrichtest. Die eigentliche Superkraft liegt in MENU → Anwender A → AEL/AFL → S-AF → Modus 3: Damit trennst du den Autofokus vom Auslöser! Nur noch die AEL/AFL-Taste fokussiert (Daumen), der Auslöser misst Belichtung und löst sofort aus (Zeigefinger).",
      "landscapeTip": "Fokus per Daumen einmalig auf die Hyperfokaldistanz oder das Hauptmotiv setzen, danach beliebig oft ohne Pumpen neu ausrichten und belichten.",
      "streetTip": "Perfekt fürs Zonenfokussieren: Mit einem kurzen Daumendruck auf 3 Meter Entfernung vorfokussieren; sobald jemand durchläuft, kannst du verzögerungsfrei abdrücken.",
      "quickExercise": "Teste im S-Modus auf ein Fenster mit dunklem Rahmen: Richte auf den Rahmen, halte AEL/AFL gedrückt, schwenke ins Helle – die Belichtung bleibt eingefroren (S. 104).",
      "pctCoords": {
        "x": 89.5,
        "y": 18.5
      },
      "detailImage": "assets/camera/detail-top-right.jpg"
    },
    {
      "id": "info-btn",
      "view": "rear",
      "number": "11",
      "name": "INFO-Taste",
      "manualPage": 28,
      "alsoPages": "12, 107, 136, 144",
      "category": "Anzeigen & Werkzeuge",
      "coords": {
        "x": 525,
        "y": 120
      },
      "shortDesc": "Schaltet zwischen Info, Histogramm, Wasserwaage & Lichter/Schatten-Warnung um.",
      "details": "Durch mehrmaliges Drücken von INFO wechselst du durch die Aufnahme-Overlays: 1) Allgemeine Infos, 2) Nur Foto (sauberer Bildschirm), 3) Anwender 1 (z. B. Histogramm + Lichter/Schatten-Warnung), 4) Anwender 2 (z. B. 2-Achsen-Wasserwaage / Nivellierungsanzeige). Welche Ansichten hier erscheinen, legst du exakt unter MENU → Anwender C1 → Info-Einstellungen → LV-Info fest! Trick: Im Menü selbst zeigt INFO bei vielen Punkten geheime Untermenüs (z. B. manuelle Brennweite beim IS oder die Lichter/Schatten-Kurve).",
      "landscapeTip": "Schalte unter Anwender C1 → LV-Info unbedingt 'Histogramm', 'Lichter & Schatten' (Rot = überbelichtet, Blau = unterbelichtet) und 'Nivellierungsanzeige' ein!",
      "streetTip": "Mit einem Druck auf INFO auf 'Nur Foto' schalten – ablenkungsfreie reine Bildkomposition im Sucher oder am Klappdisplay.",
      "quickExercise": "Drücke im Aufnahmemodus mehrmals INFO, bis die grüne Wasserwaage (Nivellierungsanzeige) erscheint, und richte die Kamera exakt auf beiden Achsen waagerecht aus.",
      "pctCoords": {
        "x": 87.2,
        "y": 37.8
      },
      "detailImage": "assets/camera/rear-real.jpg"
    },
    {
      "id": "ok-btn",
      "view": "rear",
      "number": "12",
      "name": "OK-Taste (Live Kontrolle / Super Control Panel)",
      "manualPage": 79,
      "alsoPages": "12, 80, 136, 176",
      "category": "Zentrale Steuerung",
      "coords": {
        "x": 525,
        "y": 205
      },
      "shortDesc": "Öffnet im Aufnahmemodus Live Kontrolle oder das Super Control Panel (SCP).",
      "details": "Das Herzstück deiner Olympus-Bedienung! Ab Werk öffnet ein Druck auf OK in P/A/S/M die seitliche 'Live Kontrolle'. Fast alle erfahrenen OM-D-Fotografen aktivieren unter MENU → Anwender C1 → Steuerungseinst. → P/A/S/M die 'LV-Monitor-Funktionsanzeige' (weltweit bekannt als Super Control Panel, SCP, S. 80). Damit siehst du alle 20 Kamera-Parameter auf einen Blick und verstellst sie blitzschnell per Pfeiltasten + Einstellrad oder direkt per Touchscreen!",
      "landscapeTip": "Unverzichtbar im SCP: Bildmodus, ISO, WB, Gradation (Lichter/Schatten-Kurve!), Bildstabilisator, RAW und Serienbild/Anti-Shock auf einem Screen.",
      "streetTip": "Im SCP wechselst du innerhalb von 2 Sekunden zwischen S-AF, C-AF, Gesichtserkennung und Lautlos-Modus.",
      "quickExercise": "Mach Übung 1 aus dem Lernpfad: Aktiviere unter Anwender C1 → Steuerungseinst. die LV-Monitor-Funktionsanzeige und drücke OK!",
      "pctCoords": {
        "x": 82.4,
        "y": 46.4
      },
      "detailImage": "assets/camera/manual-scp-p80.png"
    },
    {
      "id": "arrow-pad",
      "view": "rear",
      "number": "13",
      "name": "Pfeiltasten (▲ ISO, ◀ AF-Feld, ▶ Blitz, ▼ Serienbild)",
      "manualPage": 72,
      "alsoPages": "12, 74–78",
      "category": "Direktzugriff",
      "coords": {
        "x": 525,
        "y": 244
      },
      "shortDesc": "4 Hardware-Shortcuts: Oben ISO, Links AF-Feld, Rechts Blitz, Unten Drive/Lautlos.",
      "details": "Im Aufnahmemodus sind alle 4 Richtungen rund um die OK-Taste vorbelegt: ▲ Oben = ISO (AUTO / LOW / 200–25600, S. 74); ◀ Links = AF-Messfeld (Alle [:::], Einzelnes [ · ], 9-Felder-Gruppe [::: ] + hinteres Rad für Gesicht/Auge, S. 72); ▶ Rechts = Blitzmodus (S. 74); ▼ Unten = Sequenziell / Selbstauslöser / Anti-Shock / Lautlos-Modus (S. 77–78).",
      "landscapeTip": "▼ Unten auf 'Anti-Shock 2s' (Anti-Shock) oder '2s-Timer' für wackelfreie Stativaufnahmen; ◀ Links auf Einzelnes AF-Feld [ · ].",
      "streetTip": "▼ Unten auf '[Lautlos] Einzelbild' oder 'Lautlos H (15 fps) 15fps' stellen; ▲ Oben kontrolliert den ISO-Wert in 1 Sekunde.",
      "quickExercise": "Drücke ◀ Links (AF-Feld) und drehe das vordere Einstellrad zwischen All-Target, Single-Target und 9-Feld-Gruppe. Drücke dann ▲ Oben und drehe zwischen ISO AUTO und ISO 200.",
      "pctCoords": {
        "x": 82.4,
        "y": 50.8
      },
      "detailImage": "assets/camera/rear-real.jpg"
    },
    {
      "id": "menu-btn",
      "view": "rear",
      "number": "14",
      "name": "MENU-Taste",
      "manualPage": 120,
      "alsoPages": "9, 12, 120–146",
      "category": "Menüsystem",
      "coords": {
        "x": 560,
        "y": 120
      },
      "shortDesc": "Öffnet das 6-teilige Hauptmenü (Aufnahme 1, Aufnahme 2, Video, ▶, Anwender A–I, Setup).",
      "details": "Führt in das tiefere Kameramenü. Navigationstipp: Mit der INFO-Taste kannst du jederzeit zwischen dem linken Reiter-Balken und den Untermenüs wechseln; oder ganz links im Anwendermenü Anwender mit den Pfeiltasten A bis I durchblättern. Alle Funktionen des Aufnahmemenüs Aufnahme 1 findest du auch schneller im Super Control Panel – im MENU konfigurierst du aber das 'Geheimmenü' Anwender Anwendermenü (A bis I) einmalig nach deinen Wünschen!",
      "landscapeTip": "Wichtige MENU-Einstiegspunkte: Anwender C1 (LV-Erweiterung für dunkle Szenen, Gitterlinien), Anwender D1/D2 (Rauschminderung, Live Time/Composite Intervall).",
      "streetTip": "Wichtige MENU-Einstiegspunkte: Anwender C2 (Signalton Aus), Anwender A (AF-Sucherfeld Touchpad, Back-Button-Focus), Anwender B (Tastenbelegung).",
      "quickExercise": "Drücke MENU, gehe mit ◀ bis ganz links auf das Register-Symbol, navigiere nach unten zum Zahnrad Anwender und blättere die Gruppen A bis I durch.",
      "pctCoords": {
        "x": 77.8,
        "y": 37.8
      },
      "detailImage": "assets/camera/rear-real.jpg"
    },
    {
      "id": "play-delete-btns",
      "view": "rear",
      "number": "15",
      "name": "▶ (Wiedergabe)- & Löschen-Taste",
      "manualPage": 108,
      "alsoPages": "12, 112, 129–132",
      "category": "Wiedergabe & Bearbeitung",
      "coords": {
        "x": 482,
        "y": 270
      },
      "shortDesc": "Bilder prüfen (inkl. Highlight/Shadow-Warnung) und RAWs in der Kamera bearbeiten.",
      "details": "▶ zeigt deine aufgenommenen Bilder. Drehst du dort am vorderen Rad, zoomst du bis 14× hinein (Perfekt zur Schärfekontrolle!) oder heraus bis zur Kalender/Index-Übersicht. Mit INFO blätterst du auch in der Wiedergabe Histogramm und blinkende Über-/Unterbelichtungen ein. Drücke während der Wiedergabe OK auf einem RAW-Bild, um direkt [RAW-Daten bearb.] aufzurufen!",
      "landscapeTip": "Kontrolliere nach jeder heiklen Gegenlichtaufnahme per ▶ + INFO, ob Himmel-Spitzlichter rot blinken!",
      "streetTip": "Zuhause oder im Café per OK auf dem Bild den Bildmodus eines RAWs nachträglich von Natürlich auf Monoton oder ART BKT umrechnen lassen!",
      "quickExercise": "Mache ein Foto im Modus LN+RAW, drücke ▶, drücke INFO bis das Histogramm erscheint und danach OK für [RAW-Daten bearb.] (S. 129).",
      "pctCoords": {
        "x": 86.8,
        "y": 55.2
      },
      "detailImage": "assets/camera/rear-real.jpg"
    },
    {
      "id": "tilt-touch-lcd",
      "view": "rear",
      "number": "16",
      "name": "180°-Klappmonitor & Touchscreen-Steuerung",
      "manualPage": 17,
      "alsoPages": "12, 31–32, 69, 142",
      "category": "Display & Touch",
      "coords": {
        "x": 265,
        "y": 205
      },
      "shortDesc": "80° nach oben (Boden/Hüfte), 180° nach unten (Selfie) + Touch-AF/Touch-Auslöser.",
      "details": "Das Display lässt sich um 80° nach oben neigen (ideal für tiefe Landschaftsperspektiven direkt über Steinen oder Wasser sowie unauffälliges Hüft-Fotografieren auf der Straße) und um 180° nach unten klappen (Selfie- & Vlogging-Modus, inkl. automatischer Spiegelung und Selfie-Timer-Symbolen). Links am Bildschirmrand tippst du auf das Touch-Symbol, um zwischen [Touch-AF] (Fokus per Finger + Lupe), [Touch-Auslöser] (antippen = fokussieren & sofort auslösen!) und [Aus] zu wechseln (S. 32, 69).",
      "landscapeTip": "80° hochklappen erlaubt ultra-tiefe Froschperspektiven ohne dich in den Matsch knien zu müssen. Mit [Touch-AF] + Lupensymbol kontrollierst du die Schärfe exakt auf Vordergrund-Blüten.",
      "streetTip": "Die Geheimwaffe der Streetfotografie: Display 80° nach oben klappen, Kamera auf Hüfthöhe halten (wirkt wie ein Nachschauen auf dem Display!), [Touch-Auslöser] + [[Lautlos]] einschalten und völlig unbemerkt genau im richtigen Moment das Display antippen.",
      "quickExercise": "Klappe das Display um 80° nach oben, tippe links unten am Rand auf das kleine Finger-Icon, bis der Blitz/Auslöser-Modus aktiv ist, und tippe auf ein Motiv im Raum.",
      "pctCoords": {
        "x": 41,
        "y": 71
      },
      "detailImage": "assets/camera/rear-real.jpg"
    },
    {
      "id": "mft-mount-sensor",
      "view": "front",
      "number": "17",
      "name": "Micro Four Thirds Bajonett, 20,3 MP Sensor & 5-Achsen-IBIS",
      "manualPage": 166,
      "alsoPages": "11, 16, 94",
      "category": "Herzstück",
      "coords": {
        "x": 350,
        "y": 256
      },
      "shortDesc": "20,3 MP Live MOS (Crop 2,0×) + integrierter 5-Achsen-Bildstabilisator + SSWF.",
      "details": "Der 4/3\"-Sensor besitzt einen Formatfaktor (Crop) von 2,0× gegenüber Kleinbild/Vollformat: Ein 17-mm-Objektiv entspricht 34 mm Kleinbild, ein 14–42 mm Kit entspricht 28–84 mm KB. Besonderheit: Beim Einschalten reinigt der Supersonic Wave Filter (SSWF) den Sensor mit Ultraschall von Staub. Rund um den Sensor schwebt der 5-Achsen-Bildstabilisator (IBIS) und gleicht Verwacklungen um bis zu 4,5 Belichtungsstufen aus – selbst bei alten analogen Vintage-Objektiven über Adapter (Brennweite unter S-IS + INFO eintragen, S. 94)!",
      "landscapeTip": "Dank Crop 2,0× hast du bei gleicher Bildwirkung eine deutlich größere Schärfentiefe als Vollformat: Schon f/5.6 liefert die Tiefenschärfe von Vollformat f/11 – ohne Licht zu verlieren!",
      "streetTip": "Der kompakte MFT-Standard erlaubt echte Hosentaschen-Objektive (wie 14-42mm EZ, 17mm f/1.8 oder 20mm f/1.7) bei unerschütterlichen Handaufnahmen bis 1/8 Sekunde.",
      "quickExercise": "Öffne unseren MFT-Rechner im Tab 5 und berechne den Unterschied zwischen deinem Objektiv (z. B. 14 mm oder 17 mm) bei f/5.6 in puncto Kleinbild-Äquivalent und Hyperfokaldistanz.",
      "pctCoords": {
        "x": 56.5,
        "y": 62
      },
      "detailImage": "assets/camera/front-studio.png"
    },
    {
      "id": "lens-release-af-lamp",
      "view": "front",
      "number": "18",
      "name": "Objektiventriegelungstaste & AF-Hilfslicht / Selbstauslöser-LED",
      "manualPage": 11,
      "alsoPages": "14, 16, 123, 126",
      "category": "Objektivwechsel & LED",
      "coords": {
        "x": 468,
        "y": 195
      },
      "shortDesc": "Bajonett-Entriegelung links vom Objektiv + vordere LED für AF-Hilfe & Timer.",
      "details": "Zum Objektivwechsel drückst du die Entriegelungstaste und drehst das Objektiv entgegen dem Uhrzeigersinn (Kamera möglichst nach unten halten, vorher ausschalten, S. 16). Die LED rechts oben neben dem Sucherbump leuchtet beim Selbstauslöser-Countdown und dient in dunklen Räumen als oranges AF-Hilfslicht.",
      "landscapeTip": "Im Dunkeln bei Langzeitbelichtungen schaltet [Lautlos [Lautlos]] oder Menü Aufnahme 1 → AF-Hilfslicht: Aus die auffällige vordere LED komplett ab.",
      "streetTip": "Wichtige Einstellung im Menü Aufnahme 1: 'AF-Hilfslicht → Aus' (S. 123)! Nichts ruiniert einen unauffälligen Street-Moment schneller als eine grell-orange Taschenlampe direkt ins Gesicht von Passanten.",
      "quickExercise": "Gehe sofort in MENU → Aufnahme 1 → AF-Hilfslicht und stelle es auf Aus. Bei modernen lichtempfindlichen MFT-Sensoren fokussiert die Kamera auch ohne störende LED präzise.",
      "pctCoords": {
        "x": 81.8,
        "y": 56.5
      },
      "detailImage": "assets/camera/manual-p11.png"
    }
  ],
  "exposureModes": [
    {
      "code": "AUTO",
      "name": "Vollautomatik + Live Guide",
      "page": 34,
      "frontDial": "Live Guide Anpassung",
      "rearDial": "Live Guide Anpassung",
      "focusArea": "Schnelleinsteiger, Familien-Schnappschüsse",
      "desc": "Die Kamera wählt Szene, ISO, Blende, Zeit und Bildmodus vollautomatisch. Besonderheit: Ein Tipp auf die Kurzwahl-Taste [↗] (S. 33–34) öffnet den 'Live Guide' mit verständlichen Reglern wie 'Farbsättigung ändern', 'Farbton ändern', 'Helligkeit ändern', 'Hintergrund unscharf' oder 'Bewegung darstellen'.",
      "landscapeAdvice": "Für ernsthafte Landschaft nicht ideal (Kamera setzt teils zu aggressive Sättigung oder zu hohe ISO/offene Blende). Besser sofort Modus A testen!",
      "streetAdvice": "Nur für absolute Schnappschüsse; verwehrt Zugriff auf das komplette Super Control Panel.",
      "exercise": "Drehe auf AUTO, drücke [↗] und teste den Slider 'Hintergrund unscharf' – sieh zu, wie die Kamera dahinter automatisch die Blende öffnet/schließt."
    },
    {
      "code": "P",
      "name": "Programmautomatik (+ Programm-Shift Ps)",
      "page": 54,
      "frontDial": "Belichtungskorrektur (+/-)",
      "rearDial": "Programm-Shift (Ps)",
      "focusArea": "Alltag, Reisefotografie mit voller SCP-Freiheit",
      "desc": "Die Kamera wählt automatisch eine sinnvolle Kombination aus Blende und Verschlusszeit für perfekte Helligkeit, lässt dir aber volle Freiheit bei ISO, Fokus, RAW, Bildmodus und Belichtungskorrektur. Dreh am hinteren Rad ('Ps' erscheint im Display!), verschiebt Blende und Zeit paarweise bei gleichbleibender Helligkeit.",
      "landscapeAdvice": "Gut zum Eingewöhnen ins Super Control Panel – für bewusste Schärfentiefe ist jedoch A überlegen.",
      "streetAdvice": "Guter Allrounder für wechselndes Licht zwischen Sonne und Schatten, wenn S dir zu starr ist.",
      "exercise": "Stelle P ein, halte den Finger leicht am Auslöser zur Messung und drehe das hintere Rad: Siehst du das kleine 'Ps' unten links und wie Blende/Zeit gegenläufig wandern? (S. 55)"
    },
    {
      "code": "A",
      "name": "Blendenvorwahl / Zeitautomatik (Aperture Priority)",
      "page": 56,
      "frontDial": "Belichtungskorrektur (+/-)",
      "rearDial": "Blendenwert (FNo.)",
      "focusArea": "Landschaft (Empfehlung!), Porträt, Architektur, Street (kontrollierte Schärfe)",
      "desc": "DER wichtigste Modus der E-M10 Mark IV! Du bestimmst die Blende (Schärfentiefe: kleine Zahl = Hintergrund unscharf, mittlere Zahl f/5.6–f/8 = alles scharf) und die Kamera berechnet automatisch die exakt passende Verschlusszeit. Über das vordere Rad steuerst du jederzeit blitzschnell die Belichtungskorrektur (+/-).",
      "landscapeAdvice": "Standardmodus #1 für Landschaft! Nutze f/5.6 bis f/8 (bei f/11 setzt bei 20-MP-MFT bereits leichte Beugungsunschärfe ein!) + ISO 200 (oder ISO LOW) + +/- Korrektur gegen ausgefressene Wolken.",
      "streetAdvice": "Perfekt für gestaltete Streetfotografie mit Zonenfokus (f/5.6–f/8) oder abendliche Bokeh-Porträts auf der Straße (f/1.8). Beachte nur, dass die Zeit nicht unter ca. 1/125 s fällt.",
      "exercise": "Fotografiere eine Straßenecke oder einen Tisch zweimal im Modus A: einmal mit kleinster Blende (z. B. f/3.5 oder f/1.8) und einmal mit f/8. Vergleiche die Hintergrundschärfe!"
    },
    {
      "code": "S",
      "name": "Blendenautomatik / Zeitvorwahl (Shutter Priority)",
      "page": 58,
      "frontDial": "Belichtungskorrektur (+/-)",
      "rearDial": "Verschlusszeit",
      "focusArea": "Streetfotografie (Empfehlung!), Action, Kinder/Tiere, Bewegungsunschärfe",
      "desc": "Du gibst die exakte Verschlusszeit vor – die Kamera regelt Blende und (bei ISO AUTO) ISO automatisch nach. Blinkt der Blendenwert beim Ausrichten? Dann reicht das Licht für diese Extremzeit nicht aus.",
      "landscapeAdvice": "Nützlich bei starkem Wind für Äste/Gräser (1/250 s) oder um am Bach ohne ND-Filter aus der Hand mit 1/4 s dank 5-Achsen-IBIS weiches Wasser aufzunehmen.",
      "streetAdvice": "Standardmodus #1 für spontane Streetfotografie! Stelle fest 1/250 s bis 1/500 s mit ISO AUTO (Maximalwert 6400) ein: Gehende Personen werden knackscharf eingefroren. Oder drehe spontan auf 1/15 s, um hektische Pendler verwischt vor einem scharfen Schild zu zeigen!",
      "exercise": "Wähle Modus S, stell 1/500 s ein (ISO AUTO) und fotografiere ein vorbeifahrendes Rad oder eine Handbewegung. Wiederhole es mit 1/15 s (Arme eng an den Körper für ruhige IBIS-Stabilisierung)."
    },
    {
      "code": "M",
      "name": "Manuell (+ BULB, LIVE TIME & LIVECOMP)",
      "page": 60,
      "alsoPages": "61–64",
      "frontDial": "Blendenwert (FNo.)",
      "rearDial": "Verschlusszeit (bis 60\" + BULB / LIVE TIME / LIVECOMP)",
      "focusArea": "Langzeitbelichtungen, Wasser/Wolken, Nacht, Astro, konstantes Licht",
      "desc": "Du steuerst Blende (vorne) und Verschlusszeit (hinten) komplett manuell – am unteren Rand zeigt dir die ±3-EV-Lichtwaage, ob das Bild heller oder dunkler als der Kamera-Belichtungsmesser wird. EINZIGARTIGE OLYMPUS-MAGIE: Drehe das hintere Rad über 60\" hinaus weiter, dann erscheinen nacheinander BULB, LIVE TIME und LIVECOMP!",
      "landscapeAdvice": "Auf dem Stativ mit Graufilter (ND) oder in der Dämmerung: Drehe auf LIVE TIME (S. 61)! Nach Start der Belichtung siehst du alle 0,5 bis 4 Sekunden LIVE auf dem Monitor, wie das Bild heller wird, und stoppst genau im perfekten Moment!",
      "streetAdvice": "Für dramatische Nacht-Street mit Leuchtreklame oder festem Zonen-Belichtungs-Preset in Sonne/Schatten. Mit ISO AUTO im M-Modus erhältst du eine halbautomatische Zeit+Blenden-Steuerung (Auto-ISO gleicht aus).",
      "exercise": "Schalte auf M, drehe das hintere Rad nach links über 60\" hinaus bis LIVE TIME und starte im abgedunkelten Zimmer eine Belichtung. Sieh zu, wie sich das Bild am Bildschirm langsam aufbaut (S. 61)!"
    },
    {
      "code": "AP",
      "name": "Erweiterter Fotomodus (Advanced Photo – 9 Profi-Modi)",
      "page": 40,
      "alsoPages": "41–49",
      "frontDial": "Parameter / Korrektur",
      "rearDial": "Je nach Submodus (z. B. Keystone, EV-Stufe)",
      "focusArea": "Landschaft (HDR, Focus/AE-Bracketing), Architektur (Keystone), Nacht (Live Composite)",
      "desc": "Das Computational-Kraftwerk der OM-D! Über [↗] wählst du direkt aus 9 Spezialprogrammen (S. 40–49): Live Composite, Live Time, Mehrfachbelichtung, HDR, Lautlos-Modus, Panorama, Keystone-Korrektur, AE-Belichtungsreihe und Fokus-Belichtungsreihe.",
      "landscapeAdvice": "Eine echte Schatzkiste: HDR1 für knalliges Gegenlicht, AE-Belichtungsreihe (3 oder 5 Bilder) für RAW-HDRs, Fokus-Belichtungsreihe (8 Bilder gestaffelt) für durchgehende Schärfe ab 20 cm bis unendlich!",
      "streetAdvice": "Hier liegen das sofort einsatzbereite 100%-Lautlos-Programm [Lautlos], das Panorama-Tool und die geniale Live-Keystone-Entzerrung für schräge Häuserfassaden!",
      "exercise": "Drehe auf AP, drücke [↗], wähle 'Keystone-Korrektur' (Trapez-Symbol, S. 47) und korrigiere damit schief fotografierte Türrahmen oder Hochhäuser per Einstellrad schon vor dem Auslösen!",
      "submodes": [
        {
          "name": "Live Composite (S. 42)",
          "use": "Nacht, Feuerwerk, Autolichtspuren, Sternspuren – addiert NUR neue Helligkeit!"
        },
        {
          "name": "Live Time (S. 43)",
          "use": "Langzeitbelichtungen (z. B. Wasserfälle) mit Echtzeit-Vorschau am Display"
        },
        {
          "name": "Mehrfachbelichtung (S. 44)",
          "use": "2 Fotos kreativ übereinanderlegen (inkl. durchsichtigem Live-Overlay)"
        },
        {
          "name": "HDR (S. 44)",
          "use": "HDR1 (natürlich) / HDR2 (kräftig) – kombiniert 4 Aufnahmen gegen ausgefressene Himmel"
        },
        {
          "name": "Lautlos-Modus (S. 45)",
          "use": "Elektronischer Verschluss, 0 dB Geräusch, alle Töne/Lichter deaktiviert"
        },
        {
          "name": "Panorama (S. 46)",
          "use": "Schwenkpanorama mit Zielpfeilen direkt in der Kamera"
        },
        {
          "name": "Keystone-Korrektur (S. 47)",
          "use": "Stürzende Linien bei Architektur & Street in 2 Achsen live entzerren!"
        },
        {
          "name": "AE-Belichtungsreihe (S. 48)",
          "use": "3 Bilder ±1 EV oder 5 Bilder ±0,7 EV Serienbelichtung (RAW-fähig!)"
        },
        {
          "name": "Fokus-Belichtungsreihe (S. 49)",
          "use": "8 Aufnahmen mit schrittweise verschobenem Fokus (Focus Bracketing)"
        }
      ]
    },
    {
      "code": "ART",
      "name": "Art Filter (16 Kreativ-Looks inkl. Pop Art & Bleach Bypass)",
      "page": 50,
      "alsoPages": "51–53, 82",
      "frontDial": "Belichtungskorrektur (+/-)",
      "rearDial": "Filtervariante / Blende (je nach Setup)",
      "focusArea": "Street-Looks out of cam (Dramatischer Ton, Körniger Film, Bleach Bypass)",
      "desc": "16 berühmte Olympus-Farb- und Schwarzweiß-Looks (inkl. Variationsstufen, Rahmen oder Pin-Hole-Effekt). Profi-Geheimnis: Wenn du als Bildqualität LN+RAW einstellst, speichert die Kamera den Art-Filter-Look als JPEG UND zusätzlich ein völlig neutrales RAW (.ORF) als Backup! Und unter Wiedergabe → OK → RAW-Daten bearb. → ART BKT kannst du JEDES RAW-Foto nachträglich in allen Art Filtern entwickeln (S. 130)!",
      "landscapeAdvice": "Spare dir ART beim Fotografieren in der Natur (nimm RAW + Natürlich), nutze ART BKT aber spielerisch nach der Tour am Abend.",
      "streetAdvice": "Sehr beliebt in der Streetfotografie: ART 11 'Körniger Film I/II' (harter analoger Schwarzweiß-Look), ART 8 'Dramatischer Ton', ART 16 'Bleach Bypass' und ART 5 'Key Line'!",
      "exercise": "Stelle LN+RAW ein, wähle ART 11 (Körniger Film), fotografiere ein Licht-Schatten-Motiv und schaue anschließend am PC/in der Kamera das reine Farb-RAW im Vergleich zum harten SW-JPEG an."
    },
    {
      "code": "SCN",
      "name": "Motivprogramme (6 Themenbereiche, 22 Szenen)",
      "page": 36,
      "alsoPages": "37–39",
      "focusArea": "Schnelle Spezialrezepte (z. B. Freihand Sternenlicht, Lichtspuren, Panning)",
      "desc": "Bietet 6 kategorisierte Themen (Menschen, Nachtaufnahmen, Bewegung, Landschaften, Innenaufnahmen, Nahaufnahmen). Besonders spannend ist 'Nachtaufnahmen → Freihand Sternenlicht' (kombiniert automatisch 8 schnelle Bilder gegen Verwacklung ohne Stativ!) sowie 'Bewegung → Mitziehen (Panning)' (S. 37–38).",
      "landscapeAdvice": "Zum Lernen bestimmter Tricks ('Seidiges Wasser' nutzt automatisch längere Zeiten), für echte Kontrolle danach schnell auf A oder M wechseln.",
      "streetAdvice": "'Mitziehen' (Panning) hilft automatisch beim Mitverfolgen schneller Radfahrer/Straßenbahnen.",
      "exercise": "Drehe auf SCN, drücke [↗], wähle 'Nachtaufnahmen' und sieh dir das Programm 'Freihand Sternenlicht' für Abende ohne Stativ an (S. 37)."
    },
    {
      "code": "Video",
      "name": "Video-Modus (4K / Full-HD / 120fps High-Speed)",
      "page": 66,
      "alsoPages": "67–68, 93, 128",
      "frontDial": "Belichtung / P/A/S/M Parameter",
      "rearDial": "Parameter (in P/A/S/M)",
      "focusArea": "4K-Clips, Reise-B-Roll, Zeitlupe 120 fps aus der Hand",
      "desc": "Zeichnet 4K UHD (3840×2160 bei 30p/25p/24p mit 102 Mbps), Full-HD (bis 60p) oder HD High-Speed Zeitlupe (120 fps, S. 93) auf. Die E-M10 Mark IV kombiniert hier ihre 5-Achsen-Sensorstabilisierung mit einer digitalen Stabilisierung (M-IS 1) – ideal für butterweiche Handaufnahmen ohne Gimbal!",
      "landscapeAdvice": "4K 24p/25p im Modus M oder S (Verschlusszeit ca. doppelte Framerate = 1/50 s) auf kleinem Stativ oder freihand mit M-IS 1 (S. 94, 128).",
      "streetAdvice": "Kurze 5-Sekunden-Stimmungsclips aus der Stadt mit Windgeräuschreduzierung (MENU → Video → Video-Ton, S. 128).",
      "exercise": "Stelle die Programmwählscheibe auf Video, drücke OK für das Video-SCP und wechsle zwischen 4K und HD-HS120 (Zeitlupe). Starte eine Aufnahme mit REC."
    }
  ],
  "scpTiles": [
    {
      "id": "scp-picture-mode",
      "gridOrder": 1,
      "row": 1,
      "col": 1,
      "code": "Natürlich / Natural",
      "label": "Bildmodus",
      "page": 82,
      "alsoPages": "83, 88–90",
      "presets": {
        "default": {
          "value": "i-Enhance",
          "note": "Autom. Kontrast-/Farbverstärkung (oft etwas unruhig)"
        },
        "landscape": {
          "value": "Natürlich / Lebhaft",
          "note": "'Natürlich' für ehrliche Farben (Ideal zu RAW) oder 'Lebhaft' (Vivid) für knackige Natur-JPEGs"
        },
        "street": {
          "value": "Monoton / Natürlich",
          "note": "'Monoton' (+ Farbfilter R/Ye) für zeitlose Street-SWs oder 'Natürlich' mit reduzierter Sättigung"
        },
        "night": {
          "value": "Natürlich",
          "note": "Neutralste Farb- und Rauschwiedergabe für Nacht & Astro"
        }
      },
      "options": "i-Enhance (Auto), Lebhaft (Vivid), Natürlich (Natural), Gedämpft (Muted), Porträt, Monoton (SW), Anpassen, e-Porträt, Farbgestalter, ART 1–16",
      "howToChange": "In SCP anwählen und mit vorderem Einstellrad blättern. Mit dem hinteren Rad oder den Pfeiltasten änderst du direkt darunter Schärfe, Kontrast, Sättigung und Gradation!",
      "exercise": "Vergleiche 'i-Enhance' vs. 'Natürlich' vs. 'Monoton' auf ein farbiges Motiv und prüfe die Hauttöne bzw. das Himmelsblau."
    },
    {
      "id": "scp-iso",
      "gridOrder": 2,
      "row": 1,
      "col": 2,
      "code": "ISO",
      "label": "ISO-Empfindlichkeit",
      "page": 74,
      "alsoPages": "138",
      "presets": {
        "default": {
          "value": "ISO AUTO (bis 6400)",
          "note": "Ab Werk Maximalwert 6400"
        },
        "landscape": {
          "value": "ISO 200 (oder LOW)",
          "note": "Basis-ISO 200 liefert maximalen Dynamikumfang! 'LOW' (ca. ISO 100) nur bei grellem Licht für längere Zeiten"
        },
        "street": {
          "value": "ISO AUTO (max. 3200–6400)",
          "note": "Hält schnelle Verschlusszeiten (1/250–1/500 s) stabil, ohne dass du nachregeln musst"
        },
        "night": {
          "value": "ISO 200–800 (Stativ) / 1600–3200 (Astro)",
          "note": "Auf dem Stativ bei Live Time/Composite immer ISO 200 wählen! Astro: 1600–3200"
        }
      },
      "options": "AUTO (konfigurierbar in Anwender D1), LOW (ca. 100), 200 bis 25600 in 1/3- oder 1-EV-Stufen",
      "howToChange": "Schneller geht's sogar ohne SCP über Pfeiltaste ▲ (Oben)! Hinweis: Basis-ISO des Sensors ist ISO 200 – nicht 100!",
      "exercise": "Stelle die Obergrenze für ISO AUTO unter MENU → Anwender D1 → ISO-Auto-Einstellung → Maximalwert auf 3200 oder 6400 ein (S. 138)."
    },
    {
      "id": "scp-wb",
      "gridOrder": 3,
      "row": 1,
      "col": 3,
      "code": "WB AUTO",
      "label": "Weißabgleich",
      "page": 85,
      "alsoPages": "86, 140",
      "presets": {
        "default": {
          "value": "AUTO (Warme Farben: An)",
          "note": "Kann Sonnenuntergänge abkühlen oder Glühlampen stark gelb lassen"
        },
        "landscape": {
          "value": "5300K Tageslicht / Bewölkt 6000K",
          "note": "Feste Einstellung 'Tageslicht (5300K)' bewahrt echte goldene/blaue Lichtstimmung von Sonnenauf-/-untergängen!"
        },
        "street": {
          "value": "AUTO (oder Tageslicht)",
          "note": "AUTO für schnellen Wechsel Straße/U-Bahn; unter Anwender F 'WB AUTO Warme Farben: Aus' verhindert zu gelbes Kunstlicht"
        },
        "night": {
          "value": "CWB 3800K–4500K",
          "note": "Fest auf kühleren Kelvin-Wert verhindert braun-orangenen Lichtsmog im Nachthimmel"
        }
      },
      "options": "AUTO, Tageslicht (5300K), Schatten (7500K), Bewölkt (6000K), Glühlampenlicht (3000K), Leuchtstofflampe (4000K), Blitz (5500K), WB1–4 Sofort-WB, CWB (2000–14000K)",
      "howToChange": "Auf 'WB' gehen und gewünschte Kelvin-Voreinstellung wählen. Bei Auswahl von CWB drückst du INFO, um exakt in Kelvin (z. B. 5600K) zu justieren!",
      "exercise": "Fotografiere abends im warmen Licht einmal mit WB AUTO und einmal mit 'Tageslicht (5300K)'. Beachte, wie 'Tageslicht' die goldene Wärme bewahrt!"
    },
    {
      "id": "scp-wb-comp",
      "gridOrder": 4,
      "row": 1,
      "col": 4,
      "code": "A ±0 / G ±0",
      "label": "WB-Feinkorrektur",
      "page": 87,
      "alsoPages": "85",
      "presets": {
        "default": {
          "value": "A 0 / G 0",
          "note": "Neutral"
        },
        "landscape": {
          "value": "A +1 / G 0 (Optional)",
          "note": "Sanft wärmer bei kühlem Morgennebel"
        },
        "street": {
          "value": "A 0 / G 0",
          "note": "Neutral halten (Ausgleich nur bei Grünstich von Leuchtstoffröhren)"
        },
        "night": {
          "value": "A 0 / G 0",
          "note": "Neutral (RAW erlaubt freie Nachregelung)"
        }
      },
      "options": "Bernstein-Blau-Achse (A -7 bis +7) & Grün-Magenta-Achse (G -7 bis +7)",
      "howToChange": "Im SCP oder nach Auswahl des WB mit der INFO-Taste für jeden Weißabgleich einzeln feinjustieren.",
      "exercise": "Setze testweise bei Tageslicht-WB einmal A+3 (wärmer) und sieh den Effekt im Live View."
    },
    {
      "id": "scp-af-mode",
      "gridOrder": 5,
      "row": 1,
      "col": 5,
      "code": "S-AF",
      "label": "AF-Modus (Fokussiermodus)",
      "page": 81,
      "alsoPages": "135, 142",
      "presets": {
        "default": {
          "value": "S-AF",
          "note": "Einzel-AF (scharf stellen beim halben Auslöserdruck)"
        },
        "landscape": {
          "value": "S-AF+MF oder MF",
          "note": "S-AF+MF: Kamera fokussiert blitzschnell vor, du drehst den Fokusring fein nach (inkl. Auto-Lupe/Peaking)!"
        },
        "street": {
          "value": "S-AF oder C-AF+TR",
          "note": "S-AF für schnelle Einzelmotive & Zonenfokus; C-AF+TR verfolgt herannahende Passanten/Radler"
        },
        "night": {
          "value": "MF (Manuell)",
          "note": "Im Stockdunkeln mit Focus Peaking & 10× Lupe direkt exakt auf einen hellen Stern fokussieren"
        }
      },
      "options": "S-AF (Einzel-AF), C-AF (Kontinuierlich), MF (Manuell), S-AF+MF (S-AF + jederzeit manuell übersteuern), C-AF+TR (Tracking-Motivverfolgung)",
      "howToChange": "Über SCP anwählen und per Rad zwischen S-AF, C-AF, MF, S-AF+MF und C-AF+TR umschalten.",
      "exercise": "Wähle S-AF+MF, fokussiere halb auf eine Blüte, halte den Auslöser halb gedrückt und drehe dann am Fokusring des Objektivs – vergrößert sich das Bild automatisch? (Anwender A → MF-Assistent!)"
    },
    {
      "id": "scp-sharpness",
      "gridOrder": 6,
      "row": 2,
      "col": 1,
      "code": "S ±0",
      "label": "Bildschärfe (Sharpness)",
      "page": 89,
      "presets": {
        "default": {
          "value": "0",
          "note": "Standard"
        },
        "landscape": {
          "value": "0 bis +1",
          "note": "Bei +1 wirken feine Blätter/Steine in JPEGs knackiger; für RAW-Nachbearbeitung auf 0 belassen"
        },
        "street": {
          "value": "0",
          "note": "Natürliche Kantenschärfe ohne Halos"
        },
        "night": {
          "value": "-1",
          "note": "Verhindert Schärfen von Sensorrauschen"
        }
      },
      "options": "-2 (weich) bis +2 (stark geschärft) für den jeweils aktiven Bildmodus",
      "howToChange": "Direkt neben 'Bildmodus' im SCP mit den Pfeiltasten ansteuern (gilt nur für JPEGs, RAW bleibt unverändert).",
      "exercise": "Wähle Bildmodus 'Natürlich', stelle S auf +1 und vergleiche am Detail eines Zweigs."
    },
    {
      "id": "scp-contrast",
      "gridOrder": 7,
      "row": 2,
      "col": 2,
      "code": "C ±0",
      "label": "Kontrast",
      "page": 89,
      "presets": {
        "default": {
          "value": "0",
          "note": "Standard"
        },
        "landscape": {
          "value": "0 oder -1",
          "note": "-1 schützt Schatten & helle Wolken vor hartem Abreißen im JPEG"
        },
        "street": {
          "value": "+1 bis +2 (in Monoton)",
          "note": "Kräftiges Schwarz-Weiß mit tiefem Schwarz in Schatten und leuchtenden Lichtern!"
        },
        "night": {
          "value": "0",
          "note": "Standard"
        }
      },
      "options": "-2 bis +2",
      "howToChange": "Im SCP unterhalb von ISO anwählen (bei Monoton für knackiges Schwarzweiß Gold wert!).",
      "exercise": "Stelle in Monoton C auf +2 und fotografiere harten Sonnenschein durch Gitter oder Häuserschatten."
    },
    {
      "id": "scp-saturation",
      "gridOrder": 8,
      "row": 2,
      "col": 3,
      "code": "RGB ±0 / Filter",
      "label": "Sättigung / SW-Farbfilter",
      "page": 89,
      "alsoPages": "90",
      "presets": {
        "default": {
          "value": "0",
          "note": "Standard"
        },
        "landscape": {
          "value": "0 bis +1",
          "note": "Sanft leuchtende Farben ohne Bonbon-Look"
        },
        "street": {
          "value": "Filter R (Rot) oder Ye (Gelb) bei Monoton!",
          "note": "Genial! Im Bildmodus Monoton wird dieses Feld zum Farbfilter: Gelb/Rot dunkelt blauen Himmel dramatisch ab und hebt weiße Wolken hervor!"
        },
        "night": {
          "value": "0",
          "note": "Standard"
        }
      },
      "options": "In Farb-Modi: Sättigung -2 bis +2. In Monoton: Farbfilter N (Aus), Ye (Gelb), Or (Orange), R (Rot), G (Grün) + Farbtonung (Sepia, Blau, Violett, Grün)",
      "howToChange": "Wähle zuerst Bildmodus 'Monoton' im SCP – sofort verwandelt sich diese Kachel in Farbfilter & Tonung (S. 90)!",
      "exercise": "Schalte auf 'Monoton', gehe auf diese Kachel, stelle Farbfilter auf 'R (Rot)' und fotografiere einen blauen Himmel mit weißen Wolken."
    },
    {
      "id": "scp-gradation",
      "gridOrder": 9,
      "row": 2,
      "col": 4,
      "code": "G Norm + Kurve",
      "label": "Gradation & Tonwertkurve (INFO)",
      "page": 90,
      "alsoPages": "84",
      "presets": {
        "default": {
          "value": "Normal",
          "note": "Ausgewogene Tonwertverteilung"
        },
        "landscape": {
          "value": "Normal + INFO-Kurve (Highlight -2, Shadow +3)",
          "note": "Geheimtipp S. 84: In diesem Feld INFO drücken öffnet die 3-Zonen-Tonwertkurve direkt in der Kamera! Ideal, um Himmel abzudunkeln und Vordergrund aufzuhellen."
        },
        "street": {
          "value": "Normal / Low Key (oder S-Kurve)",
          "note": "Low Key oder S-Kurve (Highlight +2, Shadow -3) für dramatische Licht-und-Schatten-Streetfotos!"
        },
        "night": {
          "value": "Normal",
          "note": "'Auto' hellt bei Olympus oft Schatten zu stark auf und erhöht Rauschen – bei Nacht unbedingt 'Normal' nutzen!"
        }
      },
      "options": "AUTO (Shadow Adjustment), Normal, High Key (hell/luftig), Low Key (dunkel/dramatisch) + Versteckte S-Kurve via INFO-Taste (S. 84)",
      "howToChange": "Feld 'Gradation' markieren und einmal INFO drücken -> Vorderes Rad = Lichter (Highlight ±7), Hinteres Rad = Schatten (Shadow ±7)!",
      "exercise": "Markiere Gradation im SCP und drücke INFO! Siehst du die weiße Diagonal-Kurve auf dem Monitor? Experimentiere mit Lichter & Schatten (S. 84)!"
    },
    {
      "id": "scp-af-area",
      "gridOrder": 10,
      "row": 2,
      "col": 5,
      "code": "[ · ] AF-Feld",
      "label": "AF-Messfeldwahl & Super-Spot",
      "page": 72,
      "alsoPages": "73, 135",
      "presets": {
        "default": {
          "value": "[:::] Alle Felder",
          "note": "Kamera entscheidet, was scharf wird (oft der Vordergrund statt dein Motiv)"
        },
        "landscape": {
          "value": "[ · ] Einzelnes Feld (mitte/unten)",
          "note": "Setze das einzelne kleine Messfeld bewusst auf das untere Drittel oder den Hauptfelsen!"
        },
        "street": {
          "value": "[::: ] 9-Felder-Gruppe oder [ · ]",
          "note": "Bewegliche Zone über 9 von 121 Feldern – schnell mit Daumen über Touchpad-AF (Anwender A) verschiebbar"
        },
        "night": {
          "value": "[ · ] + Lupe Vergrößerter Rahmen (Super-Spot)",
          "note": "Über die Lupentaste bis 14× heranzoomen für exakten Fokus auf Lichter in der Ferne"
        }
      },
      "options": "[:::] Alle 121 Felder, [ · ] Einzelnes AF-Feld (mit kleinem [·] Punkt-Spot), [::: ] 9-Felder-Gruppe",
      "howToChange": "Direkter als übers SCP geht es mit Pfeiltaste ◀ (Links): Pfeiltasten verschieben das Feld, INFO setzt es mit einem Druck exakt wieder in die Bildmitte zurück!",
      "exercise": "Drücke ◀ Links, wähle [ · ] Einzelnes Feld, verschiebe es an den rechten Rand, und drücke dann INFO oder OK gehalten, um es blitzschnell zu zentrieren."
    },
    {
      "id": "scp-face-eye",
      "gridOrder": 11,
      "row": 3,
      "col": 1,
      "code": "Augen-AF [i] Auge",
      "label": "Gesichts- & Augen-Priorität",
      "page": 73,
      "alsoPages": "135",
      "presets": {
        "default": {
          "value": "Augen-AF [i] Ein",
          "note": "Automatische Gesichts- und Augenerkennung aktiv"
        },
        "landscape": {
          "value": "Aus",
          "note": "Abschalten bei Landschaft/Steinen, damit Felsen nie versehentlich als Gesicht erkannt werden"
        },
        "street": {
          "value": "Augen-AF [i] (für Menschen) / Aus (für Architektur)",
          "note": "Fantastisch für spontane Street-Porträts – erkennt Augen auch im Halbprofil!"
        },
        "night": {
          "value": "Aus",
          "note": "Bei Landschaft/Astro immer deaktivieren"
        }
      },
      "options": "Aus, Gesichts-AF Gesichts-AF, Augen-AF [i] Gesichts- & Augen-AF (nächstes Auge), Auge-Rechts [iR] (Rechtes Auge Priorität), Auge-Links [iL] (Linkes Auge Priorität)",
      "howToChange": "In SCP auswählen oder beim AF-Feld-Auswählen (◀) einfach am hinteren Einstellrad drehen! Mit der INFO-Taste kannst du zwischen mehreren Gesichtern im Bild umschalten (S. 73).",
      "exercise": "Wähle Augen-AF [i], halte die Kamera vor eine Person oder ein Porträtbild auf dem Smartphone: Ein grünes Kästchen springt exakt aufs nächste Auge."
    },
    {
      "id": "scp-drive",
      "gridOrder": 12,
      "row": 3,
      "col": 2,
      "code": "Einzel / Anti-Shock / [Lautlos]",
      "label": "Serienbild / Timer / Lautlos-Modus",
      "page": 77,
      "alsoPages": "78, 126",
      "presets": {
        "default": {
          "value": "Einzelbild",
          "note": "Mechanischer Einzelverschluss"
        },
        "landscape": {
          "value": "Anti-Shock (0s / 2s) oder 2s-Timer",
          "note": "Auf dem Stativ reduziert Anti-Shock oder 2s-Timer Verwacklungen durch Handdruck & ersten Verschlussvorhang auf NULL!"
        },
        "street": {
          "value": "[Lautlos] Einzel / Lautlos L (6,3 fps)",
          "note": "[Lautlos] aktiviert den lautlosen elektronischen Verschluss (bis 1/16000 s). Keiner hört das Auslösen!"
        },
        "night": {
          "value": "2s-Timer oder Anti-Shock 0s",
          "note": "2-Sekunden-Selbstauslöser verhindert jedes Wackeln am Auslöser bei Stativ-Langzeitbelichtungen"
        }
      },
      "options": "Einzel, Serienbild H (8,7 fps mech.), Serienbild L (5 fps), Anti-Shock, [Lautlos] Einzel, Lautlos H (15 fps), Lautlos L (6,3 fps), 12s-Timer, 2s-Timer, Custom-Timer",
      "howToChange": "Über SCP oder noch schneller über die Pfeiltaste ▼ (Unten)! In Anti-Shock/Selbstauslöser drückst du INFO für eigene Sekundenwerte (S. 77).",
      "exercise": "Drücke ▼ (Unten), wähle '[Lautlos] Einzelbild' und drücke den Auslöser: Absolut lautlos! Hinweis: Im Innenraum unter Neon-/LED-Licht kann [Lautlos] Streifen erzeugen (Banding), dann auf wechseln."
    },
    {
      "id": "scp-metering",
      "gridOrder": 13,
      "row": 3,
      "col": 3,
      "code": "[◉] ESP",
      "label": "Belichtungsmessung",
      "page": 96,
      "presets": {
        "default": {
          "value": "[◉] Digitale ESP-Messung",
          "note": "Misst 324 Zonen im ganzen Bildfeld"
        },
        "landscape": {
          "value": "[◉] ESP (oder [ · ]HI Highlight-Spot)",
          "note": "Profi-Landschaftstrick S. 96: [ · ]HI (Spot Helllicht) sorgt automatisch dafür, dass helle Wolken oder weiße Gletscher strahlend weiß bleiben und nicht grau oder ausgefressen!"
        },
        "street": {
          "value": "[◉] ESP + Vorderes Rad (+/-) oder [ · ] Spot",
          "note": "Spotmessung ([ · ]) direkt auf ein sonnenbeschienenes Gesicht vor dunkler Gasse zaubert echte Chiaroscuro-Dramatik"
        },
        "night": {
          "value": "[ (·) ] Mittenbetont oder M manuell",
          "note": "Im M-Modus misst du bewusst unabhängig oder schätzt nach Testbild"
        }
      },
      "options": "[◉] Digitale ESP (324 Zonen), [ (·) ] Mittengewichtete Integralmessung, [ · ] Spot (ca. 2 %), [ · ]HI Spot Helllicht, [ · ]SH Spot Schatten",
      "howToChange": "Im SCP anwählen. Merkhilfe zu Spot HI vs. Spot SH (S. 96): Spot HI für weiße Motive (Schnee/Himmel), Spot SH für schwarze Motive (Nachtkatze/Schatten), damit sie im Bild wirklich weiß bzw. tiefschwarz erscheinen!",
      "exercise": "Richte in einem dunklen Zimmer auf eine helle Leselampe und vergleiche [◉] ESP vs. [ · ]HI (Spot Helllicht)."
    },
    {
      "id": "scp-is",
      "gridOrder": 14,
      "row": 3,
      "col": 4,
      "code": "S-IS An",
      "label": "5-Achsen-Bildstabilisator (IBIS)",
      "page": 94,
      "alsoPages": "123, 128",
      "presets": {
        "default": {
          "value": "S-IS An",
          "note": "5-Achsen-Stabilisierung für alle Fotos aktiv"
        },
        "landscape": {
          "value": "Freihand: S-IS An • Stativ: S-IS Aus",
          "note": "Auf einem festen Stativ S-IS Aus stellen, damit die Sensoren bei Langzeitbelichtung keine Phantom-Bewegungen ausgleichen"
        },
        "street": {
          "value": "S-IS An (Dauer-Empfehlung)",
          "note": "Erlaubt bis zu 1/8 s oder 1/4 s Verwisch-Effekte von Passanten aus der freien Hand bei gestochen scharfen Gebäuden!"
        },
        "night": {
          "value": "Stativ: S-IS Aus • Freihand: S-IS An",
          "note": "Auf Stativ immer Aus! Bei Nacht-Mitziehern oder Freihand-Streets natürlich An"
        }
      },
      "options": "S-IS Aus, S-IS An (5-Achsen automatisch inkl. Panning-Erkennung) • Im Video-Modus: M-IS 1 (Sensor + elektronisch) & M-IS 2 (nur Sensor)",
      "howToChange": "Im SCP anwählen. Verwendest du manuelle Altglas-Objektive ohne Elektronik-Kontakte, drücke auf diesem Feld INFO und trage die reale Brennweite (z. B. 50 mm) ein (S. 94)!",
      "exercise": "Teste mit aktiviertem S-IS An eine Aufnahme im S-Modus bei 1/8 Sekunde mit angewinkelten Ellenbogen – zoome in der Wiedergabe auf 14× und staune über die Schärfe."
    },
    {
      "id": "scp-aspect",
      "gridOrder": 15,
      "row": 3,
      "col": 5,
      "code": "4:3",
      "label": "Bildseitenverhältnis",
      "page": 92,
      "presets": {
        "default": {
          "value": "4:3",
          "note": "Volle 20,3 MP (5184 × 3888 px) des Sensors"
        },
        "landscape": {
          "value": "4:3 (oder 3:2 / 16:9 Vorschau)",
          "note": "4:3 nutzt jeden einzelnen Pixel des Sensors; im RAW bleiben bei 16:9/3:2 übrigens alle abgeschnittenen Bildränder als Beschnitt-Meta gespeichert!"
        },
        "street": {
          "value": "4:3 oder 1:1 (Quadrat)",
          "note": "1:1 im Sucher erzwingt geniale geometrische Komposition (Mittelformat-Gefühl) – und wenn LN+RAW aktiv ist, sichert das RAW trotzdem volle 4:3!"
        },
        "night": {
          "value": "4:3",
          "note": "Maximale Sensorfläche"
        }
      },
      "options": "4:3 (Standard), 16:9, 3:2 (Kleinbild), 1:1 (Quadrat), 3:4 (Hochformat)",
      "howToChange": "Im SCP rechts mitte anwählen. Dank verlustfreier Beschnitt-Markierung in den .ORF-RAW-Dateien kannst du im Zweifel später jederzeit zurück zu 4:3 (S. 92).",
      "exercise": "Stelle testweise 1:1 Quadrat mit LN+RAW ein und komponiere 5 architektonische Formen im Sucher!"
    },
    {
      "id": "scp-quality",
      "gridOrder": 16,
      "row": 4,
      "col": 1,
      "code": "LN + RAW",
      "label": "Bildqualität (RAW & JPEG)",
      "page": 93,
      "alsoPages": "140",
      "presets": {
        "default": {
          "value": "LF oder LN",
          "note": "Ab Werk ist RAW oft ausgeschaltet!"
        },
        "landscape": {
          "value": "LN + RAW (oder RAW)",
          "note": "Empfehlung: 12-Bit RAW speichert tausende zusätzliche Lichter-/Schattenstufen für Himmel & Dämmerung. LF+RAW oder LSF+RAW über Anwender F freischaltbar."
        },
        "street": {
          "value": "LN + RAW",
          "note": "Schnelle JPEGs direkt per OI.Share teilen + RAW als Lebensversicherung für zu harte Kontraste oder nachträgliche SW-Entwicklung in der Kamera"
        },
        "night": {
          "value": "LN + RAW (oder nur RAW)",
          "note": "Weissabgleich-Farbstiche durch Straßenlaternen & Rauschen korrigierst du nur im RAW sauber!"
        }
      },
      "options": "LF (Large Fine), LN (Large Normal), MN, SN, RAW (12-Bit .ORF) sowie Kombis LF+RAW / LN+RAW (Unter Anwender F → JPEG-Qualität (Übernehmen) auf LSF = Super Fine umstellbar, S. 140)",
      "howToChange": "Im SCP ganz unten links anwählen. Mit Pfeil/Rad Kombinationen wählen.",
      "exercise": "Aktiviere LN + RAW und gehe danach zu MENU → Anwender F → JPEG-Qualität (Übernehmen) (S. 140), um 'LF' in 'LSF (Super Fine)' für höchste JPEG-Details zu tauschen."
    },
    {
      "id": "scp-flash-mode",
      "gridOrder": 17,
      "row": 4,
      "col": 2,
      "code": "Blitz Blitz",
      "label": "Blitzmodus",
      "page": 74,
      "alsoPages": "75–76",
      "presets": {
        "default": {
          "value": "[Blitz Aus] / Blitz AUTO",
          "note": "Aktiv sobald der Blitz über Blitz-UP ausgeklappt ist"
        },
        "landscape": {
          "value": "Eingeklappt (Aus)",
          "note": "Ausgeklappte Blitzreichweite hilft nur bis max. 3–4 Meter"
        },
        "street": {
          "value": "Aus (oder SLOW2 abends)",
          "note": "SLOW2 (2. Verschlussvorhang) friert bei Nacht-Street erst Bewegungen nach der Lichtspur ein"
        },
        "night": {
          "value": "SLOW2 (mit Bewegung)",
          "note": "Langzeitsynchronisation auf den 2. Vorhang"
        }
      },
      "options": "Blitz Aufhellblitz (immer), Blitz AUTO, Rote-Augen-Blitz Rote-Augen, SLOW (1. Vorhang), SLOW2 (2. Vorhang), FULL / 1/4 / 1/16 / 1/64 (Manuell), [Blitz Aus] Aus",
      "howToChange": "Blitz erst mechanisch über ON/OFF → Blitz-UP ausklappen, dann per SCP oder Pfeiltaste ▶ (Rechts) Blitzmodus wählen.",
      "exercise": "Klappe den Blitz über Blitz-UP aus, stelle im S-Modus auf 1/4 s und teste 'SLOW2' auf eine schwenkende Hand oder Lichtquelle."
    },
    {
      "id": "scp-flash-comp",
      "gridOrder": 18,
      "row": 4,
      "col": 3,
      "code": "Blitz +/- 0.0",
      "label": "Blitzstärkensteuerung",
      "page": 97,
      "presets": {
        "default": {
          "value": "0.0 EV",
          "note": "Normale TTL-Blitzdosierung"
        },
        "landscape": {
          "value": "-1.3 EV (bei Nah-Aufhellung)",
          "note": "Dezentes Aufhellen von Blüten im Schatten ohne Totblitzen"
        },
        "street": {
          "value": "-0.7 EV",
          "note": "Natürlicherer Look bei Nacht-Aufhellblitz"
        },
        "night": {
          "value": "-1.0 EV",
          "note": "Macht Umgebungslicht dominanter als Blitzlicht"
        }
      },
      "options": "-3,0 EV bis +3,0 EV (in 1/3-Stufen)",
      "howToChange": "Unabhängig von der allgemeinen Belichtungskorrektur (+/-) regelt Blitz +/- nur die Blitzleistung auf das nahe Motiv (einstellbar ab Koppelung Anwender E, S. 139).",
      "exercise": "Bei Gegenlichtporträt am Tag Blitz ausklappen und Blitz +/- auf -1,0 EV setzen für weich aufgehellte Gesichter."
    },
    {
      "id": "scp-color-space",
      "gridOrder": 19,
      "row": 4,
      "col": 4,
      "code": "sRGB",
      "label": "Farbraum",
      "page": 140,
      "presets": {
        "default": {
          "value": "sRGB",
          "note": "Universalstandard für Web, Smartphones & Monitore"
        },
        "landscape": {
          "value": "sRGB (da RAW ohnehin vollen Sensorraum speichert)",
          "note": "Für JPEGs bleibt sRGB optimal; AdobeRGB nur wenn direkt für kalibrierte Druckereien als JPEG gedruckt wird"
        },
        "street": {
          "value": "sRGB",
          "note": "Perfekt für Smartphone-Übertragung mit OI.Share"
        },
        "night": {
          "value": "sRGB",
          "note": "Standard"
        }
      },
      "options": "sRGB, AdobeRGB",
      "howToChange": "Im SCP unten rechts oder unter MENU → Anwender F → Farbraum (S. 140).",
      "exercise": "Prüfe, dass sRGB aktiv ist (AdobeRGB-JPEGs sehen auf unkalibrierten Handys oft blass aus; RAW hat keinen Farbraum bis zum Export)."
    },
    {
      "id": "scp-record-bar",
      "gridOrder": 20,
      "row": 4,
      "col": 5,
      "code": "P/A/S/M Info",
      "label": "Status- & Auslöseleiste",
      "page": 176,
      "alsoPages": "26, 28",
      "presets": {
        "default": {
          "value": "Modus • Verschluss • Blende • EV • Speicher",
          "note": "Live-Feedback unten am Monitor"
        },
        "landscape": {
          "value": "Achte auf grünen Punkt = Fokus ok",
          "note": "Blinkt der grüne AF-Punkt, war kein sicherer Kontrastfokus möglich!"
        },
        "street": {
          "value": "Achte auf grüne Verschlusszeit (nicht verwackelt)",
          "note": "Fällt in A die Zeit unter 1/60 s? Sofort Blende öffnen oder zu S wechseln!"
        },
        "night": {
          "value": "Live-Histogramm & ±EV Lichtwaage prüfen",
          "note": "In M zeigt die Waage bis ±3 EV; darüber hinaus blinken Zahlen rot"
        }
      },
      "options": "Unten links: Aktiver Modus + Verschlusszeit + Blende + Belichtungskorrektur. Unten rechts: Restbilder auf SD-Karte & Akkuanzeige.",
      "howToChange": "Wird permanent live eingeblendet (außer im reinen Foto-Modus via INFO-Taste).",
      "exercise": "Halte die Kamera halb gedrückt und lies unten die gewählte Verschlusszeit, Blende und ISO ab."
    }
  ],
  "menuTabs": [
    {
      "id": "cam1",
      "symbol": "01 / CAM 1",
      "title": "Aufnahmemenü 1 (Kamera 1)",
      "pageRange": "S. 121–123",
      "summaryDesc": "Grundlegende Aufnahmeeinstellungen (die meisten erreichst du schneller übers Super Control Panel!). Wichtig hier: Reset & AF-Hilfslicht Aus.",
      "items": [
        {
          "name": "Zurücksetzen",
          "path": "MENU → Aufnahme 1 → Zurücksetzen",
          "page": "S. 121",
          "tag": "grundlagen",
          "defaultVal": "—",
          "recLandscape": "Nur bei Übernahme einer gebrauchten Kamera ('Basis')",
          "recStreet": "—",
          "desc": "'Basis' setzt alle Aufnahme-Einstellungen auf Werkseinstellung zurück (Custom-Menüs bleiben oft erhalten); 'Komplett' setzt die gesamte Kamera inklusive Anwendermenü Anwender zurück.",
          "exercise": "Nicht drücken, wenn du gerade geübt hast – merke dir diesen Pfad als Notanker nach Verwirrungen!"
        },
        {
          "name": "Bildmodus / Bildseitenverhältnis / Sequenziell / AF-Modus / Messung / Blitzmodus",
          "path": "MENU → Aufnahme 1",
          "page": "S. 81–96, 121",
          "tag": "grundlagen",
          "defaultVal": "i-Enhance / 4:3 / Einzel / S-AF / ESP",
          "recLandscape": "Natürlich + 4:3 + Anti-Shock + S-AF+MF + ESP/HI",
          "recStreet": "Monoton/Natürlich + 4:3 + Lautlos [Lautlos] + S-AF + ESP",
          "desc": "Diese 6 Parameter liegen parallel im Super Control Panel! Einmal SCP über Anwender C1 aktiviert, musst du dafür praktisch nie wieder ins Aufnahme 1-Menü.",
          "exercise": "Vergleiche den schnellen Zugriff über OK (SCP) mit diesem klassischen Listenmenü."
        },
        {
          "name": "Dig. Tele-Konverter",
          "path": "MENU → Aufnahme 1 → Dig. Tele-Konverter",
          "page": "S. 71, 122",
          "tag": "street",
          "defaultVal": "Aus",
          "recLandscape": "Aus (lieber echtes Tele oder nachträglich aus RAW beschneiden)",
          "recStreet": "Taste [x2] nutzen für situative 2×-Ausschnitte (RAW behält volles Bild!)",
          "desc": "Verdoppelt digital die Brennweite (JPEG wird hochskaliert auf gewählte Pixelgröße gecroppt). Im Format LN+RAW sichert die Kamera trotzdem den kompletten unbeschnittenen Sensor im RAW!",
          "exercise": "Schalte auf LN+RAW und aktiviere kurz Dig. Tele-Konverter: Vergleiche anschließend JPEG (2× gezoomt) und RAW."
        },
        {
          "name": "AF-Hilfslicht",
          "path": "MENU → Aufnahme 1 → AF-Hilfslicht",
          "page": "S. 123",
          "tag": "Empfehlung",
          "defaultVal": "An",
          "recLandscape": "Aus (stört bei Nacht/Astro andere Fotografen)",
          "recStreet": "AUS (Wichtige Empfehlung für unauffällige Streetfotografie)",
          "desc": "Schaltet die auffällige vordere orange LED ab, die im Halbdunkeln sonst Personen direkt ins Gesicht leuchtet.",
          "exercise": "Jetzt sofort auf 'Aus' stellen und im dämmrigen Flur testen, wie zuverlässig der Sensor trotzdem scharf stellt."
        }
      ]
    },
    {
      "id": "cam2",
      "symbol": "02 / CAM 2",
      "title": "Aufnahmemenü 2 (Kamera 2)",
      "pageRange": "S. 121, 123–127",
      "summaryDesc": "Kreativ- & Langzeit-Tools: Bildstabilisator, Mehrfachbelichtung, Zeitraffer-Intervall und Lautlos-Modus-Verhalten.",
      "items": [
        {
          "name": "Bildstabilisation",
          "path": "MENU → Aufnahme 2 → Bildstabilisation",
          "page": "S. 94, 123",
          "tag": "landschaft",
          "defaultVal": "S-IS An",
          "recLandscape": "Freihand: S-IS An • Stativ: S-IS Aus",
          "recStreet": "S-IS An",
          "desc": "Schaltet den 5-Achsen-Sensorstabilisator ein/aus. Drückst du auf diesem Menüpunkt INFO, gibst du für manuelle Altglas-Objektive ohne Kontakte die Brennweite (0,1–1000 mm) ein!",
          "exercise": "Drücke in diesem Menüpunkt INFO und blättere einmal durch die manuellen Brennweitenwerte (danach mit MENU abbrechen, falls ein Systemobjektiv montiert ist)."
        },
        {
          "name": "Mehrfachbelichtung (2f + Auto-Verstärkung + Überlagern)",
          "path": "MENU → Aufnahme 2 → Mehrfachbelichtung",
          "page": "S. 123–124",
          "tag": "profi",
          "defaultVal": "Aus",
          "recLandscape": "Kreativ: 2 Strukturen (Blätter + Wasser) direkt im Sucher verschmelzen",
          "recStreet": "Architektur mit Silhouette eines Passanten überlagern",
          "desc": "Im Gegensatz zum AP-Modus kannst du hier über 'Überlagern: An' sogar ein BEREITS auf der SD-Karte liegendes RAW-Bild als Ausgangsbasis nehmen und eine zweite Szene live darauf komponieren! 'Auto-Verstärkung: An' halbiert automatisch die Helligkeit beider Bilder gegen Überbelichtung.",
          "exercise": "Aktiviere Bild 1 (An:2f) + Auto-Verstärkung An und überlagere zwei geometrische Strukturen bei dir zu Hause!"
        },
        {
          "name": "Intervallaufnahmen (+ 4K Zeitraffer-Video)",
          "path": "MENU → Aufnahme 2 → Intervallaufnahmen",
          "page": "S. 125",
          "tag": "landschaft",
          "defaultVal": "Aus",
          "recLandscape": "Sonnenaufgang / ziehende Wolken: 120–240 Bilder, Intervall 3–5 s, Zeitraffer-Video: An (4K 5fps oder FHD 10fps)",
          "recStreet": "Verkehrskreuzung / Marktplatz auf kleinem Stativ beschleunigen",
          "desc": "Eingebauter Intervallometer ohne Fernauslöser! Nimmt bis zu 999 Fotos in festem Takt auf und rechnet auf Wunsch direkt in der Kamera ein fertiges Zeitraffer-Video (Timelapse) zusammen.",
          "exercise": "Konfiguriere testweise 10 Bilder mit 2 Sekunden Intervall auf den Himmel/Fenster und lass die Kamera ein Mini-Zeitraffer-Video rendern (S. 125)."
        },
        {
          "name": "Lautlos-Modus-Einstellungen",
          "path": "MENU → Aufnahme 2 → Lautlos-Modus-Einstellungen",
          "page": "S. 126",
          "tag": "street",
          "defaultVal": "Rauschminderung [Lautlos]: Zulassen • Signalton/AF-Licht/Blitz: Aus",
          "recLandscape": "Rauschminderung [Lautlos] Aus (spart Zeit), sonst Standard",
          "recStreet": "Alle Störfaktoren (Signalton, AF-Hilfslicht, Blitz) auf 'Aus' belassen!",
          "desc": "Legt exakt fest, welche Signaltöne, Lichter und Langzeit-Rauschabzüge unterdrückt werden, sobald du im Drive-Menü [Lautlos] (Lautlos) aktivierst. Wichtig: Mit 'Aus' bei Rauschminderung wartest du nach Langzeitaufnahmen nicht doppelt so lang.",
          "exercise": "Kontrolliere hier, dass Signalton, AF-Hilfslicht und Blitz im Lautlos-Modus auf 'Nicht zulassen / Aus' stehen."
        }
      ]
    },
    {
      "id": "video",
      "symbol": "03 / VIDEO",
      "title": "Video-Menü",
      "pageRange": "S. 128",
      "summaryDesc": "Steuerung für 4K/FHD-Videos, Windgeräuschreduzierung und kombinierte 5-Achsen + elektronische Videostabilisierung.",
      "items": [
        {
          "name": "Video-Modus & Video-Spezifikation",
          "path": "MENU → Video → Video-Modus / Spezifikation",
          "page": "S. 93, 128",
          "tag": "grundlagen",
          "defaultVal": "P / FHD 30p",
          "recLandscape": "4K 30p/25p oder 24p (höchste Details), Modus M mit 1/50 s",
          "recStreet": "FHD 60p oder HD High-Speed 120fps für spontane Zeitlupen-Clips",
          "desc": "Bestimmt Belichtungsart im Videomodus (P/A/S/M/ART) sowie Auflösung und Bildrate.",
          "exercise": "Stelle unter Video-Spezifikation testweise 4K ein und überprüfe am Motiv, ob deine SD-Karte mindestens UHS-I U3 Geschwindigkeit unterstützt (S. 17)."
        },
        {
          "name": "Video-Bildstabilisation (M-IS 1 vs. M-IS 2) & Windgeräuschreduzierung",
          "path": "MENU → Video → Video-Bildstabilisation / Video-Ton",
          "page": "S. 94, 128",
          "tag": "landschaft",
          "defaultVal": "M-IS 1 / Wind: Aus",
          "recLandscape": "Gehend/Hand: M-IS 1 • Stativ: M-IS Aus • Windgeräuschreduzierung: An",
          "recStreet": "M-IS 1 + Windgeräuschreduzierung: An",
          "desc": "M-IS 1 kombiniert den 5-Achsen-Sensor mit elektronischer Korrektur (minimaler Beschnitt, extrem ruhig wie ein Gimbal); M-IS 2 nutzt nur den mechanischen Sensor-Shift ohne Beschnitt.",
          "exercise": "Schalte Windgeräuschreduzierung unter Video-Ton auf 'An' für saubere Outdoor-Atmosphäre."
        }
      ]
    },
    {
      "id": "playback",
      "symbol": "04 / PLAY",
      "title": "Wiedergabemenü",
      "pageRange": "S. 129–132",
      "summaryDesc": "In-Camera-RAW-Studio (inkl. ART BKT!), Mehrfachbild-Überlagerung und Smartphone-Verbindung.",
      "items": [
        {
          "name": "Bearb. → RAW-Daten bearb. (Aktuell / ART BKT)",
          "path": "MENU → ▶ → Bearb. → RAW-Daten bearb.",
          "page": "S. 129–130",
          "tag": "profi",
          "defaultVal": "—",
          "recLandscape": "Helligkeit, Weißabgleich, Lichter/Schatten nachträglich am Strand feintunen ohne Laptop!",
          "recStreet": "'ART BKT' wählen: entwickelt dein Foto gleichzeitig in Monoton, Körniger Film, Bleach Bypass etc.!",
          "desc": "Olympus erlaubt vollständige RAW-Entwicklung direkt in der Kamera! Wähle ein RAW in der Wiedergabe, drücke OK → RAW-Daten bearb.: Mit 'Aktuell' übernimmst du gerade eingestellte Bildmodi/Sättigungen/WB, mit 'ART BKT' rechnet die Kamera eine komplette Reihe verschiedener Art-Filter-JPEGs aus ein und derselben RAW-Datei.",
          "exercise": "Nimm ein Foto mit LN+RAW im Modus Natürlich auf, öffne danach in der Wiedergabe OK → RAW-Daten bearb. → ART BKT (markiere z. B. Monoton + Körniger Film + Dramatischer Ton) und speichere (S. 130)!"
        },
        {
          "name": "Überlagerung (bis zu 3 RAW-Bilder)",
          "path": "MENU → ▶ → Bearb. → Überlagerung",
          "page": "S. 131",
          "tag": "profi",
          "defaultVal": "—",
          "recLandscape": "Startrails oder Wellenbewegungen aus bis zu 3 Einzel-RAWs im Nachhinein verschmelzen",
          "recStreet": "Geisterhafte Doppelbelichtungen risikofrei erst nach dem Fotografieren ausprobieren!",
          "desc": "Wähle 2 oder 3 auf der SD-Karte gespeicherte RAW-Dateien aus, justiere je Bild die Helligkeitsgewichtung und erzeuge daraus ein neues JPEG.",
          "exercise": "Merke dir diese Funktion für jede Situation, in der dir zwei einzeln geschossene RAWs nachträglich zusammen genial vorkommen."
        },
        {
          "name": "Geräteverbindung (OI.Share QR-Code)",
          "path": "MENU → ▶ → Geräteverbindung",
          "page": "S. 132, 149",
          "tag": "grundlagen",
          "defaultVal": "—",
          "recLandscape": "QR-Code scannen für Smartphone-Fernauslöser (ohne Wackeln am Stativ!) & GPS-Log",
          "recStreet": "Schneller Export markierter '<'-Fotos direkt aufs Smartphone für Social/Freunde",
          "desc": "Zeigt den WLAN/Bluetooth-Einrichtungs-QR-Code für die kostenlose Olympus 'OI.Share'-App.",
          "exercise": "Scanne den QR-Code aus diesem Menü mit der OI.Share-App (S. 149) und teste das Smartphone als drahtlosen Live-View-Fernauslöser!"
        }
      ]
    },
    {
      "id": "custom",
      "symbol": "05 / CUSTOM A–I",
      "title": "Anwendermenü A bis I (Das Herzstück)",
      "pageRange": "S. 135–146",
      "summaryDesc": "Hier passt du die E-M10 Mark IV perfekt an Landschaft & Street an – inklusive Super Control Panel, Back-Button-Focus, Lichter/Schatten-Zebra und Nachtsicht!",
      "items": [
        {
          "name": "Anwender C1 → Steuerungseinst. (Super Control Panel aktivieren!)",
          "path": "MENU → Anwender C1 → Steuerungseinst. → P/A/S/M → LV-Monitor-Funktionsanzeige: Ein",
          "page": "S. 80, 136",
          "tag": "Empfehlung",
          "defaultVal": "Live Kontrolle: Ein / LV-Monitor-Funktionsanzeige: Aus!",
          "recLandscape": "Empfehlung: LV-Monitor-Funktionsanzeige (SCP) auf 'Ein'!",
          "recStreet": "Empfehlung: LV-Monitor-Funktionsanzeige (SCP) auf 'Ein' (und Live Kontrolle gern 'Aus' gegen Verwechslung)!",
          "desc": "Die wohl wichtigste versteckte Einstellung der gesamten Kamera: Erst hier schaltest du das berühmte 20-Felder Super Control Panel für P, A, S und M frei, sodass ein Druck auf OK oder [↗] sofort die Gesamtübersicht öffnet.",
          "exercise": "Sofort durchführen (Übung 1)! Öffne anschließend im A-Modus das Display mit OK."
        },
        {
          "name": "Anwender C1 → Info-Einstellungen → LV-Info (Lichter & Schatten + Wasserwaage)",
          "path": "MENU → Anwender C1 → Info-Einstellungen → LV-Info",
          "page": "S. 136, 144",
          "tag": "Empfehlung",
          "defaultVal": "Anwender1/2 teilweise aus",
          "recLandscape": "Alle Haken setzen bei: Histogramm + Lichter & Schatten + Nivellierungsanzeige (Wasserwaage)",
          "recStreet": "Mindestens Histogramm + Nivellierungsanzeige + 'Nur Foto'",
          "desc": "'Lichter & Schatten' färbt im Sucher/Monitor schon VOR der Aufnahme überbelichtete Stellen ROT (ausgefressener Himmel!) und abgesoffene Tiefen BLAU! So belichtest du nach dem Prinzip 'Expose to the Right' absolut verlustfrei.",
          "exercise": "Hake unter Anwender 1 'Histogramm' + 'Lichter & Schatten' an, unter Anwender 2 'Nivellierungsanzeige' und blättere danach mit der INFO-Taste."
        },
        {
          "name": "Anwender C1 → LV-Erweiterung (Aus vs. An1 vs. An2 Nachtsicht)",
          "path": "MENU → Anwender C1 → LV-Erweiterung",
          "page": "S. 136",
          "tag": "landschaft",
          "defaultVal": "An1 / Aus (je Modus)",
          "recLandscape": "Tag: Aus (zeigt echte Belichtungsvorschau WYSIWYG!) • Stockfinstere Nacht/Astro: An2!",
          "recStreet": "Aus (du siehst sofort im Sucher, ob das Foto zu hell oder zu dunkel wird)",
          "desc": "Aus = Das Sucherbild wird dunkler/heller, wenn du an Blende/Zeit/Korrektur drehst (Echtzeitvorschau). An2 = Extreme Live-View-Aufhellung ('Nachtsicht-Modus'), mit der du in stockdunkler Nacht Horizonte und Sterne zur Komposition erkennst!",
          "exercise": "Teste M-Modus mit 1/4000 s im Zimmer: Mit 'LV-Erweiterung: Aus' siehst du korrekt ein dunkles Bild; mit 'An1/An2' hellt die Kamera für das Bildkomponieren künstlich auf."
        },
        {
          "name": "Anwender C1 → Gitterlinien & Peaking Farbe",
          "path": "MENU → Anwender C1 → Gitterlinien / Peaking Farbe",
          "page": "S. 137",
          "tag": "landschaft",
          "defaultVal": "Aus / Rot",
          "recLandscape": "Drittelregel oder Goldener Schnitt (45 % Deckkraft) + Peaking Farbe Rot oder Gelb",
          "recStreet": "Drittelregel oder Diagonale",
          "desc": "Wähle aus 6 professionellen Bildkompositions-Gittern (u. a. Drittelregel, Goldener Schnitt, Fadenkreuz, Diagonale) und bestimme die Kontrastfarbe für Fokus Peaking.",
          "exercise": "Schalte die Drittelregel oder den Goldenen Schnitt ein und richte beim nächsten Foto den Horizont exakt entlang einer Drittellinie aus."
        },
        {
          "name": "Anwender C2 → Signalton (Piepton Aus)",
          "path": "MENU → Anwender C2 → Signalton",
          "page": "S. 137",
          "tag": "Empfehlung",
          "defaultVal": "An",
          "recLandscape": "Aus (ruhiger in der Natur! Fokus zeigt der grüne Punkt im Sucher)",
          "recStreet": "AUS (Ideal für unauffällige Streetfotografie – kein Piepsen auf der Straße)",
          "desc": "Schaltet das elektronische Piepen beim Fokussieren komplett ab.",
          "exercise": "Sofort auf 'Aus' setzen – dein Sucher zeigt den Fokus viel diskreter durch den grünen Kreis."
        },
        {
          "name": "Anwender A → AEL/AFL (Back-Button-Focus Modus 3)",
          "path": "MENU → Anwender A → AEL/AFL → S-AF",
          "page": "S. 135, 142",
          "tag": "street",
          "defaultVal": "Modus 1",
          "recLandscape": "Modus 3 testen (Daumen fokussiert auf Hyperfokalpunkt, Zeigefinger löst aus)",
          "recStreet": "Modus 3 (oder Modus 1 wenn Auslöser-AF bevorzugt)",
          "desc": "Steuert, was Auslöser halb und AEL/AFL-Taste tun. In S-AF Modus 3 gilt: Auslöser halb = NUR Belichtung messen; AEL/AFL-Taste = S-AF fokussieren! Auch bei C-AF Modus 3 fokussierst du nur solange der Daumen gedrückt bleibt – loslassen = Zonenfokus eingefroren!",
          "exercise": "Siehe Übung 7: Aktiviere kurz S-AF Modus 3 und spüre den Unterschied zwischen Daumen-Fokus und Zeigefinger-Auslösung."
        },
        {
          "name": "Anwender A → AF-Sucherfeld (Touchpad-AF beim Blick durch den Sucher)",
          "path": "MENU → Anwender A → AF-Sucherfeld",
          "page": "S. 135",
          "tag": "street",
          "defaultVal": "Aus",
          "recLandscape": "Optional Ein (mit rechter Daumenspitze Feld schnell schieben)",
          "recStreet": "An! Rechter Monitorbereich wird zum Joystick fürs AF-Feld, während dein Auge am Sucher klebt!",
          "desc": "Verwandelt das ausgeschaltete Display beim Blick durch den elektronischen Sucher in ein riesiges Touchpad – mit dem rechten Daumen schiebst du den Fokuspunkt blitzschnell an jede Stelle im Bild!",
          "exercise": "Aktiviere AF-Sucherfeld → Ein, schau durch den Sucher und wische leicht mit dem rechten Daumen über die rechte Displayhälfte."
        },
        {
          "name": "Anwender A → MF-Assistent (Vergrößern + Fokus Peaking)",
          "path": "MENU → Anwender A → MF-Assistent",
          "page": "S. 135",
          "tag": "landschaft",
          "defaultVal": "Vergrößern: Aus / Peaking: Aus",
          "recLandscape": "Beide auf 'An'! Sobald du den Fokusring drehst, zoomt das Bild & bunte Kanten leuchten auf!",
          "recStreet": "Fokus Peaking: An (Vergrößern Aus bei Zonenfokus im Sucher)",
          "desc": "Unverzichtbar für manuelles Fokussieren (S-AF+MF oder MF) und Astrofotografie.",
          "exercise": "Stelle beide Punkte auf An, schalte auf MF und drehe den Fokusring des Objektivs: Beobachte die bunte Kanten-Highlight-Welle!"
        },
        {
          "name": "Anwender B → Tastenfunktion & Einstellfunktion",
          "path": "MENU → Anwender B → Tastenfunktion / Einstellfunktion",
          "page": "S. 102–103, 136",
          "tag": "profi",
          "defaultVal": "[x2] = Dig. Tele / REC = Video / AEL = AEL",
          "recLandscape": "[x2] auf 'Lupe (Vergrößern)' oder 'Peaking' + REC auf 'Vorschau' (Abblenden) oder 'AE BKT'",
          "recStreet": "[x2] auf 'Peaking' oder 'Dig. Tele-Konverter', REC auf 'Bildmodus' (Farbe ↔ Monoton)",
          "desc": "Erlaubt die freie Neubelegung von AEL/AFL, [x2] und REC sowie das Umdrehen von Vorder- und Hinterrad in P/A/S/M.",
          "exercise": "Probiere für Landschaft einmal aus, 'REC-Tastenfunktion' auf 'Vorschau' (Schärfentiefe bei Arbeitsblende f/8 prüfen) zu legen."
        },
        {
          "name": "Anwender D1 → ISO-Auto-Einstellung & Rauschminderung",
          "path": "MENU → Anwender D1",
          "page": "S. 138",
          "tag": "landschaft",
          "defaultVal": "Max 6400 / Standard 200 / Rauschfilter: Standard / Rauschminderung: Auto",
          "recLandscape": "Rauschfilter: 'schwach' (erhält natürliche Blattstruktur!) • Rauschminderung (Dark-Frame): Auto",
          "recStreet": "ISO-Auto Max: 3200 oder 6400 • Rauschfilter: schwach",
          "desc": "Achtung Begriffsverwechslung (S. 138)! 'Rauschfilter' = Software-Entrauschung für hohe ISO in JPEGs ('schwach' erhält feine Texturen besser!). 'Rauschminderung' = Dunkelbildabzug (Dark Frame Subtraction) nach Langzeitbelichtungen – verdoppelt die Aufnahmezeit (10 s Belichtung = +10 s Dunkelbild gegen Hotpixel!).",
          "exercise": "Stelle den 'Rauschfilter' auf 'schwach' – selbst bei ISO 1600–3200 wirken JPEG-Details deutlich organischer als bei Standard."
        },
        {
          "name": "Anwender D2 → Bulb/Time, Live Bulb, Live Time & Zusammenges. Aufnahmen",
          "path": "MENU → Anwender D2",
          "page": "S. 139",
          "tag": "landschaft",
          "defaultVal": "Limit 8 Min. / Live Time 0,5s / Zusammenges. 1/2s",
          "recLandscape": "Live Time Aktualisierungsintervall: '0,5 Sek.' oder '2 Sek.' für volle Vorschau",
          "recStreet": "Zusammenges. Aufnahmen für nächtliche Lichtspuren: 1–2 s Basisbelichtung",
          "desc": "Steuert das Zeitlimit im Bulb/Time-Modus (bis 30 Min.) und wie oft der Monitor während Live Time oder Live Composite ein Zwischenbild zeigt (Standard 8 Min. & 0,5 s).",
          "exercise": "Siehe Übung 11 und 18: Prüfe hier die Einstellungen, bevor du das erste Mal am Stativ in den Live-Time- oder Live-Composite-Modus gehst."
        },
        {
          "name": "Anwender F → JPEG-Qualität (Übernehmen) & WB AUTO Warme Farben",
          "path": "MENU → Anwender F",
          "page": "S. 140",
          "tag": "Empfehlung",
          "defaultVal": "Aufnahme 1=LF, Aufnahme 2=LN, Kamera3=MN, Kamera4=SN / Warme Farben: An",
          "recLandscape": "Aufnahme 1 auf LSF (Super Fine) hochstellen! • WB AUTO Warme Farben: Aus (neutraler)",
          "recStreet": "Aufnahme 1 auf LSF oder LF • WB AUTO Warme Farben: Aus (verhindert gelbe Zimmerstiche)",
          "desc": "Unter JPEG-Qualität (Übernehmen) tauscht du das ab Werk versteckte 'LF' gegen verlustärmstes 'LSF (L Super Fine, niedrigste JPEG-Komprimierung 1/2,7)'! Und unter 'WB AUTO Warme Farben: Aus' verhindert bei Glühlampenlicht einen übertriebenen Orangestich.",
          "exercise": "Übung 2: Gehe zu Anwender F → JPEG-Qualität (Übernehmen), wähle Satz 1 (LF) und drehe mit ▶ auf L SF!"
        },
        {
          "name": "Anwender G → Copyright-Einstellungen & Dateiname",
          "path": "MENU → Anwender G",
          "page": "S. 140–141",
          "tag": "profi",
          "defaultVal": "Aus / Leer",
          "recLandscape": "Eigenen Namen in Exif-Metadaten hinterlegen",
          "recStreet": "Eigenen Namen in Exif-Metadaten hinterlegen",
          "desc": "Schreibt deinen Namen als 'Künstlername' und 'Copyright Name' automatisiert in jedes geschossene Foto (RAW & JPEG).",
          "exercise": "Übung 20: Schalte Copyright auf 'Ein' und tippe deinen Namen über die On-Screen-Tastatur ein."
        },
        {
          "name": "Anwender I → Pixelkorr., Justierung Wasserwaage & Ruhemodus",
          "path": "MENU → Anwender I",
          "page": "S. 142, 169",
          "tag": "profi",
          "defaultVal": "Ruhemodus: 1 Min.",
          "recLandscape": "Ruhemodus: 1 Min. (spart Akku auf Wanderungen!) • Bei leuchtenden Dauerpixeln: Pixelkorr.",
          "recStreet": "Ruhemodus: 3 oder 5 Min. (Kamera wacht schneller mit leichtem Tipp auf Auslöser auf!)",
          "desc": "Wenn nach einem langen Ausflug plötzlich ein kleiner weißer/roter Punkt auf jedem Foto bleibt: 'Pixelkorr.' kartiert defekte Pixel in 30 Sekunden weg (S. 169)! Und über 'Justierung Wasserwaage' kalibrierst du den Sensor auf einem ebenen Tisch exakt auf 0°.",
          "exercise": "Lege die Kamera einmal auf eine mit Wasserwaage geprüfte ebene Fläche und kalibriere bei Bedarf unter Anwender I die Nivellierungsanzeige."
        }
      ]
    },
    {
      "id": "setup",
      "symbol": "06 / SETUP",
      "title": "Einstellungsmenü (Setup)",
      "pageRange": "S. 133–134",
      "summaryDesc": "Grundlegende Hardware-Pflege: Speicherkarte sauber formatieren, Aufnahmeansicht und WLAN-Standby-Verhalten.",
      "items": [
        {
          "name": "Karte einrichten (Formatieren)",
          "path": "MENU → Setup → Karte einrichten → Karte formatieren",
          "page": "S. 133",
          "tag": "Empfehlung",
          "defaultVal": "—",
          "recLandscape": "Nach Backup am PC immer IN DER KAMERA formatieren (hält Dateisystem sauber)",
          "recStreet": "Nach Backup am PC in der Kamera formatieren",
          "desc": "Wichtig: Eine SD-Karte sollte man nach dem Sichern am Computer nicht nur über den Papierkorb löschen, sondern regelmäßig direkt hier in der Kamera mit 'Karte formatieren' neu anlegen!",
          "exercise": "Sichere heute deine Bilder auf den Computer und formatiere anschließend sauber über Setup → Karte einrichten → Karte formatieren."
        },
        {
          "name": "Aufnahmeansicht (Auto Review)",
          "path": "MENU → Setup → Aufnahmeansicht",
          "page": "S. 133",
          "tag": "street",
          "defaultVal": "0,5 Sek.",
          "recLandscape": "1–2 Sek. (kurzer Kontrollick auf Komposition & Histogramm)",
          "recStreet": "AUS (Wichtig! Keine 0,5s Sucher-Blockade beim direkten Folgeschuss)",
          "desc": "Legt fest, ob jedes Bild direkt nach der Aufnahme kurz im Sucher/Monitor eingeblendet wird. In der Streetfotografie stört das Einfrieren beim schnellen Nachschießen – dort am besten ausschalten.",
          "exercise": "Teste 'Aus' beim Straßenfotografieren: Dein Sucher kehrt nach jedem Auslöser verzögerungsfrei ins Live-Geschehen zurück!"
        },
        {
          "name": "WLAN-/Bluetooth-Einstellungen (Ausschalt-Standby)",
          "path": "MENU → Setup → WLAN-/Bluetooth-Einstellungen",
          "page": "S. 134, 152",
          "tag": "profi",
          "defaultVal": "Ausschalt-Standby: An",
          "recLandscape": "An (ermöglicht schnelles Wecken/Laden von Fotos, wenn Kamera in Tasche liegt)",
          "recStreet": "Bei langen Foto-Tagen auf Wunsch 'Aus' (Bluetooth Standby verbraucht leicht Akku)",
          "desc": "Verwaltet OI.Share Passwörter, Übertragungs-Reset und Bluetooth-Hintergrundverbindung.",
          "exercise": "Prüfe das Firmware-Version-Feld ganz unten im Setup-Menü (S. 134): Mit OM Workspace lässt sich prüfen, ob ein Update bereitsteht."
        }
      ]
    }
  ],
  "genres": [
    {
      "id": "landscape",
      "title": "Landschaftsfotografie",
      "badge": "Hauptfokus 1",
      "tagline": "Maximale Schärfe von vorn bis hinten, dramatische Himmel & seidiges Wasser",
      "whyMft": "Die E-M10 Mark IV glänzt draußen durch ihr minimales Gewicht bei langen Touren und den 2,0× Formatfaktor: Schon bei Blende f/5.6 oder f/8 erreichst du die volle Tiefenschärfe von Vollformat f/11–f/16 – bei kürzeren Zeiten aus der Hand oder perfekter Schärfe vor Beugungsunschärfe!",
      "recipe": {
        "mode": "A (Blendenpriorität) • Stativ/ND: M mit LIVE TIME • Extrem-Kontrast: AP",
        "aperture": "f/5.6 bis f/8 (Förderliche Blende! Über f/11 vermeiden)",
        "shutter": "Automatisch in A • Auf Stativ: Anti-Shock oder 2s-Timer",
        "iso": "ISO 200 (Basis-ISO für max. Dynamik; LOW nur als Notfall-ND)",
        "af": "S-AF+MF + Einzelfeld [ · ] (auf unteres Drittel / Vordergrund)",
        "drive": "Einzel (Freihand) • 2s-Timer oder Anti-Shock (Stativ)",
        "pictureMode": "Natürlich (für RAW) oder Lebhaft (Vivid) • Gradation: Normal",
        "metering": "[◉] Digitale ESP (-0,3 bis -0,7 EV) oder [ · ]HI Spot Helllicht",
        "ibis": "Freihand: S-IS An • Stativ: S-IS Aus",
        "format": "LN + RAW (oder LSF + RAW)"
      },
      "specialTools": [
        "Lichter & Schatten Warnung (Anwender C1 → LV-Info): Zeigt ausgefressene Wolken schon vor dem Auslösen in knalligem Rot!",
        "AP → AE-Belichtungsreihe (S. 48): 5 Bilder mit ±0,7 EV Serienbelichtung im RAW für echte Gegenlicht-Sonnenuntergänge.",
        "AP → Fokus-Belichtungsreihe (S. 49): 8 automatisch gestaffelte Fokus-Bilder vom 15-cm-Moos bis zum fernen Berggrat.",
        "M → LIVE TIME (S. 61): Zeigt Wasserfälle & ziehende Wolken alle 0,5 s live am Monitor während die Langzeitbelichtung noch läuft!",
        "Aufnahme 2 → Intervallaufnahmen (S. 125): Eingebauter 4K-Timelapse-Generator für Wolkenzüge."
      ],
      "deepDives": [
        {
          "title": "Vertiefung 1: Die goldene MFT-Blendenregel & Hyperfokal-Trick",
          "content": "Anders als bei Vollformat (wo man oft f/11 oder f/16 einstellt) ist der Sweet Spot der Micro-Four-Thirds-Objektive an der E-M10 Mark IV bei <strong>f/4 bis f/8</strong>. Ab f/11 sinkt die Detailauflösung durch Lichtbeugung (Diffraktion) leicht ab. Tipp für maximale Tiefenschärfe: Mit einem Weitwinkel wie 14 mm (28 mm KB) bei Blende f/5.6 fokussierst du einfach auf ca. 2,5 Meter (oder auf ca. 1/3 ins Bild hinein) – alles von etwa 1,2 Meter bis unendlich wird gestochen scharf! Kontrolliere das über unseren MFT-Rechner im Tab 5."
        },
        {
          "title": "Vertiefung 2: Himmel retten per Gradationskurve & Spot-HI (S. 84 & 96)",
          "content": "Landschaften scheitern oft an zu grellem Himmel. Zwei eingebaute Kamera-Tricks schlagen jeden Anfänger-Filter: (1) Drücke im Super Control Panel auf <strong>Gradation → INFO</strong> und ziehe den Lichter-Regler auf -3 (Wolken zeichnen feiner!) und den Schatten-Regler auf +2. (2) Oder fotografiere in <strong>RAW mit -0,7 EV Belichtungskorrektur</strong> und schalte unter Anwender C1 die rote Lichter-Warnung ein: So lange kein Rot in den wichtigen Wolkenpartien blinkt, holst du später im RAW alle Farben aus den Schatten zurück."
        },
        {
          "title": "Vertiefung 3: Seidiges Wasser mit LIVE TIME & ISO LOW",
          "content": "Kein Graufilter (ND) zur Hand? Stelle bei Dämmerung unter einem Wasserfall <strong>ISO LOW</strong> (entspricht ca. ISO 100) und Blende f/8 ein, wähle im Modus <strong>M</strong> hinter 60\" die Funktion <strong>LIVE TIME</strong> (S. 61) auf einem Stativ (S-IS Aus, Timer 2s-Timer). Drückst du einmal den Auslöser, startet die Aufnahme – drückst du noch einmal, wenn das Bild auf dem Monitor perfekt hell und das Wasser samtweich gezeichnet ist, endet sie exakt richtig belichtet!"
        }
      ],
      "exerciseIds": [
        "ex-09",
        "ex-10",
        "ex-11",
        "ex-12"
      ],
      "iconKey": "mountain",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Suche dir morgen früh oder spät nachmittags einen Ort mit interessantem Vordergrund (Stein, Steg oder Baum) und weitem Blick. Fotografiere dasselbe Motiv zweimal in A: erst bei f/5.6 auf das vordere Drittel fokussiert, dann zum Vergleich bei f/16 — und vergleiche die Schärfe in den Blättern in Ruhe zu Hause am großen Bildschirm."
    },
    {
      "id": "street",
      "title": "Streetfotografie",
      "badge": "Hauptfokus 2",
      "tagline": "Unsichtbar, blitzschnell, reaktionsstark – echtes Leben ohne Aufsehen",
      "whyMft": "Niemand fühlt sich von einer silber-schwarzen, kleinen Olympus OM-D im Retro-Look bedroht! Zusammen mit dem 80° klappbaren Touch-Monitor, dem 100 % lautlosen elektronischen Verschluss [Lautlos] (bis 1/16000 s!) und hochkontrastigem In-Cam-Monoton bist du für Straßenreportagen perfekt ausgerüstet.",
      "recipe": {
        "mode": "S (Verschlusspriorität) für Bewegung • A für ruhige Komposition",
        "aperture": "f/2.8 – f/5.6 (Zonenfokus/Street-Tiefe: f/5.6 – f/8)",
        "shutter": "1/250 s – 1/500 s (Einfrieren) • 1/15 s (Wischeffekt mit IBIS)",
        "iso": "ISO AUTO (Maximalwert 3200 oder 6400 in Anwender D1)",
        "af": "S-AF mit 9-Felder-Gruppe [::: ] (oder Back-Button-Zonenfokus)",
        "drive": "[Lautlos] Einzelbild oder Lautlos L (6,3 fps) (6,3 fps lautlos)",
        "pictureMode": "Monoton (+ Filter Ye/R + S-Kurve) oder Natürlich",
        "metering": "[◉] ESP (oder [ · ] Spot auf Sonnenfleck) + vorderes Rad -0,3 EV",
        "ibis": "S-IS An (immer aktiv)",
        "format": "LN + RAW (Farb-Backup auch bei Schwarzweiß!)"
      },
      "specialTools": [
        "Lautlos-Modus + Signalton Aus (Anwender C2) + AF-Hilfslicht Aus (Aufnahme 1): 100 % unhörbare & lichtlose Stealth-Kamera!",
        "Hüft-Display + [Touch-Auslöser] (S. 32, 69): Klappdisplay 80° hochneigen, auf Brust/Bauch herabschauen und Passanten per Finger-Tipp einfangen.",
        "AF-Sucherfeld (Anwender A, S. 135): Schiebe das AF-Feld mit der Daumenspitze übers ausgeschaltete Display, während du durch den Sucher blickst.",
        "Setup Aufnahmeansicht: Aus (S. 133): Keine kurze Foto-Vorschau im Sucher – du verpasst niemals die entscheidende zweite Sekunde!",
        "Monoton + Farbfilter R/Ye + ART BKT (S. 90, 130): Echtzeit-Kontrast-Schwarzweiß im Sucher sehen, gleichzeitig Farb-RAW auf Karte sichern."
      ],
      "deepDives": [
        {
          "title": "Vertiefung 1: Das perfekte 3-Schritte Stealth-Setup gegen Neugierige",
          "content": "Stelle vor jedem Street-Spaziergang einmalig ein: (1) Pfeiltaste ▼ auf <strong>[Lautlos] (Lautlos)</strong> (S. 78) — jetzt klickt absolut kein mechanischer Verschluss mehr; (2) MENU → Anwender C2 → <strong>Signalton: Aus</strong>; (3) MENU → Aufnahme 1 → <strong>AF-Hilfslicht: Aus</strong>; (4) MENU → Setup → <strong>Aufnahmeansicht: Aus</strong>. Wichtiges Praxiswissen zum elektronischen Verschluss [Lautlos]: In der prallen Sonne draußen funktioniert er perfekt (bis 1/16000 s!); nur in Gebäuden unter LED-/Neonröhren können horizontale Streifen ('Banding') erscheinen — wechsle drinnen kurz mit ▼ auf Einzelbild."
        },
        {
          "title": "Vertiefung 2: Zonenfokussierung & Back-Button-Focus für 0 ms Auslösezeit",
          "content": "Manchmal ist selbst der schnellste Autofokus beim Blick in die Ferne zu langsam, wenn ein Radfahrer in 3 m vorbeisaust. Lösung: Aktiviere unter MENU → Anwender A → AEL/AFL → <strong>S-AF Modus 3</strong> (S. 142). Jetzt fokussierst du mit dem Daumen einmalig auf eine Pflasterstelle oder Laterne in 3 Meter Entfernung (bei Blende f/5.6 oder f/8 am Weitwinkel ist alles von 1,8 m bis 9 m scharf!). Danach nimmst du den Daumen von AEL/AFL – der Auslöser löst ab sofort OHNE Fokus-Verzögerung in 0,0 Sekunden aus!"
        },
        {
          "title": "Vertiefung 3: Chiaroscuro-Schwarzweiß & ART BKT",
          "content": "Streetfotografie lebt von harten Lichtkanten in Gassen. Schalte im SCP den Bildmodus auf <strong>Monoton</strong>, den Farbfilter auf <strong>R (Rot)</strong> oder <strong>Ye (Gelb)</strong> und Kontrast auf <strong>+1 oder +2</strong> (S. 90), oder drehe das vordere Einstellrad in der Sonne auf <strong>-0,7 EV</strong>: Hell beschienene Personen leuchten aus tiefschwarzen Häuserschluchten! Da du <strong>LN+RAW</strong> nutzt, bleibt im Computer jederzeit jedes Originalfarbfoto erhalten."
        }
      ],
      "exerciseIds": [
        "ex-13",
        "ex-14",
        "ex-15",
        "ex-16"
      ],
      "iconKey": "street",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Such dir eine einzelne Straßenecke mit starkem Seitenlicht und Schatten, klappe den Bildschirm 80° hoch und bleib 15 Minuten ruhig stehen. Mach fünf Aufnahmen in [Lautlos] und in Monoton (mit Gelb- oder Rotfilter), wenn ein Mensch durch den Lichtfleck geht."
    },
    {
      "id": "portrait",
      "title": "Porträt & Menschen",
      "badge": "Erweiterung 1",
      "tagline": "Gestochen scharfe Augen, weiches Bokeh & natürliche Hauttöne",
      "whyMft": "Mit einem kompakten 45mm f/1.8 (90mm KB-Äquivalent) oder am langen Ende eines Zooms (42mm bei f/5.6 und viel Hintergrundabstand) zaubert die E-M10 Mark IV dank 2,0× Format mit minimaler Größe beeindruckende Portraits – inklusive automatischer Links/Rechts-Augenpriorität!",
      "recipe": {
        "mode": "A (Blendenpriorität)",
        "aperture": "Offenblende (f/1.8 bis f/2.8 mit Festbrennweite, sonst max. Öffnung bei 42 mm)",
        "shutter": "Mindestens 1/125 s bei bewegten Kindern/Personen",
        "iso": "ISO AUTO (max. 3200)",
        "af": "S-AF + Einzelnes Feld [ · ] + Gesichts-/Augen-Priorität Augen-AF [i] / Auge-Links [iL] / Auge-Rechts [iR]",
        "drive": "Einzelbild oder [Lautlos] (für entspannte ungestellte Porträts)",
        "pictureMode": "Porträt oder Natürlich (e-Porträt für sanfte Hautglättung)",
        "metering": "[◉] ESP (Gesichtserkennung gewichtet die Haut automatisch!)",
        "ibis": "S-IS An",
        "format": "LN + RAW"
      },
      "specialTools": [
        "Augen-Priorität Auge-Links [iL] / Auge-Rechts [iR] (S. 73): Fokussiert automatisch präzise auf das dem Objektiv nähere Auge.",
        "INFO-Taste beim Gesichts-AF: Springt bei Gruppen blitzschnell von Person zu Person.",
        "Aufhellblitz mit Blitz +/- (-1,0 EV): Mildert harte Augenschatten im grellen Mittagslicht.",
        "Bildmodus e-Porträt / JPEG-Bearbeitung (S. 82, 130): Optionale Hautglättung."
      ],
      "deepDives": [
        {
          "title": "Vertiefung: Bokeh-Geheimnis auch mit dem 14-42mm Kit-Objektiv",
          "content": "Viele Einsteiger denken, mit dem Kit-Zoom f/3.5–5.6 könne man keinen Hintergrund weichzeichnen. Trick: Zoome ganz ans lange Ende (42 mm = 84 mm Kleinbild!), tritt ganz nah an die Person heran und achte darauf, dass der Hintergrund (z. B. Bäume oder Lichterketten) möglichst weit hinter der Person liegt. Das Verhältnis von Kameradistanz zu Hintergrunddistanz erzeugt sofort schönes Bokeh!"
        }
      ],
      "exerciseIds": [
        "ex-17"
      ],
      "iconKey": "portrait",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Bitte jemanden, zwei Meter entfernt vor einem unruhigen Hintergrund (Gebüsch oder Lichter) ans Fenster zu treten. Zoome ganz auf 42 mm (oder nutze eine Festbrennweite) bei offener Blende mit Augen-AF und vergleiche mit 14 mm."
    },
    {
      "id": "night-astro",
      "title": "Nacht, Lichtspuren & Astro",
      "badge": "Erweiterung 2",
      "tagline": "Live Composite Magie, Nachtsicht-Sucher & klare Sternenhimmel",
      "whyMft": "Olympus ist berühmt für 'Live Composite': Kein anderes Kamerasystem macht Lichtspuren, Gewitterblitze, Feuerwerk und Sternbögen so mühelos und ohne ausgebrannte Lichter sichtbar wie das Echtzeit-Live-Composite der OM-D!",
      "recipe": {
        "mode": "AP → Live Composite (leicht) oder M → LIVECOMP (volle Kontrolle) / Astro: M",
        "aperture": "Offenblende (Astro: f/1.8–f/3.5 • Stadt-Lichtspuren: f/5.6–f/8 für Blendensterne)",
        "shutter": "Astro: 15–20 s (14 mm) • Live Composite: Basiszeit 0,5–4 s",
        "iso": "Live Composite Stadt: ISO 200 • Milchstraße: ISO 1600–3200",
        "af": "MF (Manuell) + Lupe 10× Lupe + Fokus Peaking",
        "drive": "Timer 2s-Timer (auf Stativ)",
        "pictureMode": "Natürlich • Gradation: Normal (NICHT Auto!)",
        "metering": "In M ignorieren – nach erstem Testbild & Histogramm justieren",
        "ibis": "Stativ: S-IS Aus",
        "format": "LN + RAW"
      },
      "specialTools": [
        "LIVECOMP (S. 42, 63): Macht ein Basisbild und addiert danach NUR noch NEU hinzukommende Lichter – Stadtbeleuchtung brennt niemals aus!",
        "LV-Erweiterung: An2 (Anwender C1, S. 136): Nachtsicht-Verstärkung zum Komponieren im Stockfinsteren.",
        "SCN → Freihand Sternenlicht (S. 37): 8 Fotos verrechnet für beleuchtete Gassen ohne Stativ.",
        "Pixelkorr. (Anwender I, S. 169): Entfernt dauerhafte Hotpixel mit einem 30-Sekunden-Durchlauf."
      ],
      "deepDives": [
        {
          "title": "Vertiefung: So funktioniert Live Composite Schritt für Schritt (S. 63–64)",
          "content": "(1) Kamera auf festes Stativ (S-IS Aus, ISO 200, f/8). (2) Modus M wählen und Hinterrad hinter 60\" + BULB + LIVE TIME bis ganz nach links auf <strong>LIVECOMP</strong> drehen. (3) Einmal MENU drücken (oder über Anwender D2) und Basisbelichtungszeit wählen (z. B. 1 s oder 2 s, sodass die dunklen Häuser perfekt belichtet sind). (4) Auslöser 1× drücken → Kamera macht ein Schwarzbild + Referenzbild ('Fertig für zusammengesetzte Aufnahme' erscheint). (5) Auslöser ein 2. Mal drücken → Ab jetzt siehst du live am Monitor, wie Scheinwerfer, Sterne oder Wunderkerzen Linien zeichnen, ohne dass die Straße überbelichtet! Zum Beenden einfach noch 1× drücken."
        }
      ],
      "exerciseIds": [
        "ex-18"
      ],
      "iconKey": "moon",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Stell die Kamera im dunklen Flur oder am abendlichen Fenster fest ab, aktiviere M -> LIVECOMP (1 s Basiszeit) und male zehn Sekunden lang mit der Handy-Taschenlampe Linien vor das Objektiv."
    },
    {
      "id": "macro",
      "title": "Makro & Nahaufnahme",
      "badge": "Erweiterung 3",
      "tagline": "Focus Bracketing, Super-Spot-AF (14×) & große Schärfentiefe",
      "whyMft": "Micro Four Thirds ist DAS Makro-Eldorado: Bei identischem Bildausschnitt liefert der 2,0× Crop-Sensor von Haus aus doppelt so viel Schärfentiefe wie Kleinbild – plus automatisches Focus Bracketing direkt im AP-Modus!",
      "recipe": {
        "mode": "A (Freihand) oder AP → Fokus-Belichtungsreihe",
        "aperture": "f/5.6 bis f/8 (höchste Schärfe)",
        "shutter": "1/250 s+ bei Wind / Insekten • Stativ beliebig",
        "iso": "ISO 200 (Stativ) bis ISO 1600 (Freihand-Wind)",
        "af": "MF + Peaking + 10× Fokuslupe (oder S-AF + Super-Spot-AF)",
        "drive": "AP → Fokus-Belichtungsreihe (8 Aufnahmen)",
        "pictureMode": "Natürlich",
        "metering": "[◉] ESP oder [ · ] Spot",
        "ibis": "Freihand: S-IS An (5-Achsen hilft besonders bei Nahaufnahmen!)",
        "format": "LN + RAW"
      },
      "specialTools": [
        "AP → Fokus-Belichtungsreihe (S. 49): Macht per einem Knopfdruck 8 Bilder mit schrittweise wanderndem Fokus.",
        "Super-Spot-AF (S. 73): Beim Verschieben des Einzel-AF-Felds Lupensymbol antippen -> auf einzelnes Staubblatt fokussieren!",
        "MF-Assistent + Peaking (Anwender A): Automatische Lupe + farbige Kantenhervorhebung."
      ],
      "deepDives": [
        {
          "title": "Vertiefung: Wann Fokus-Belichtungsreihe & wie zusammenfügen?",
          "content": "Bei Extrem-Nahaufnahmen ist selbst bei f/8 nur ein halber Millimeter eines Käfers oder Blütenstempels scharf. Im AP-Modus wählst du <strong>Fokus-Belichtungsreihe</strong> (S. 49), drückst einmal auf die vorderste Kante – die Kamera schießt automatisch 8 Aufnahmen leicht hintereinander gestaffelt (beim Stativ oder sehr ruhigen Händen in 1 Sekunde!). Danach setzt du die 8 Einzelbilder kostenlos z. B. in OM Workspace, Helicon Focus oder Photoshop zum durchgängig scharfen Stack zusammen."
        }
      ],
      "exerciseIds": [
        "ex-12"
      ],
      "iconKey": "leaf",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Wähle eine Blüte oder feines Moos und teste die automatische Fokus-Belichtungsreihe im AP-Modus. Blättere danach am Monitor durch Bild 1 bis Bild 8."
    },
    {
      "id": "architecture",
      "title": "Architektur & Geometrie",
      "badge": "Erweiterung 4",
      "tagline": "Perfekte Linien dank Live-Keystone-Korrektur & 2-Achsen-Wasserwaage",
      "whyMft": "Schräge Kirchtürme und kippende Häuserwände muss man nicht mehr mühsam am PC unter Auflösungsverlust abschneiden: Mit dem eingebauten digitalen Shift-Objektiv (AP → Keystone-Korrektur) richtest du Perspektiven bereits im Live-View gerade aus!",
      "recipe": {
        "mode": "AP → Keystone-Korrektur oder A",
        "aperture": "f/5.6 bis f/8",
        "shutter": "Automatisch",
        "iso": "ISO 200 (Stativ) / ISO AUTO",
        "af": "S-AF Einzelnes Feld [ · ]",
        "drive": "Einzel oder Anti-Shock",
        "pictureMode": "Natürlich oder Monoton (mit starkem Kontrast)",
        "metering": "[◉] ESP",
        "ibis": "Freihand: S-IS An",
        "format": "LN + RAW (oder 1:1 / 3:2 Beschnitt-Vorschau)"
      },
      "specialTools": [
        "AP → Keystone-Korrektur (S. 47): Vorderes Rad entzerrt vertikal, Hinteres Rad horizontal – sofort live mit Beschnitt-Vorschau!",
        "2-Achsen-Nivellierungsanzeige (INFO-Taste, S. 28): Zeigt Kippung links/rechts UND Neigung vor/zurück gleichzeitig grün an!",
        "Gitterlinien (Anwender C1, S. 137): Feines Raster für symmetrische Fassaden."
      ],
      "deepDives": [
        {
          "title": "Vertiefung: Keystone-Korrektur vs. Nachbearbeitung",
          "content": "Das Tolle an Olympus' Live-Keystone (AP-Modus, S. 47) ist die Kompositionshilfe: Wenn du ein Gebäude nach oben hin entzerrst, wandern die oberen Ecken auseinander. Im Live-View siehst du exakt, ob noch genug Platz an der Dachspitze bleibt, statt später am Rechner festzustellen, dass der Turm abgeschnitten wurde! Und wenn LN+RAW aktiv ist, sichert das RAW die unverzerrten Originaldaten mit Beschnitt."
        }
      ],
      "exerciseIds": [
        "ex-19"
      ],
      "iconKey": "arch",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Suche dir eine hohe Fassade, wähle AP -> Keystone-Korrektur und drehe vor dem Auslösen das vordere Rad so lange, bis die Linien im Sucher exakt parallel zum Rand stehen."
    },
    {
      "id": "action-video",
      "title": "Action, Tiere & 4K-Video",
      "badge": "Erweiterung 5",
      "tagline": "Bis 15 Bilder/s lautlos, C-AF+Tracking & stabilisiertes 4K / 120fps",
      "whyMft": "Klein und schnell: 15 Bilder pro Sekunde im lautlosen Serienbild [Lautlos H (15 fps)] (S. 78) bzw. 8,7 fps mechanisch lassen dich auch bei Vögeln, Spielenden oder Street-Sprüngen genau den Scheitelpunkt erwischen – plus butterweiches 4K-Video mit M-IS 1!",
      "recipe": {
        "mode": "S (Sport/Tiere: 1/1000 s+) oder Video (Video)",
        "aperture": "Offenblende (maximale Geschwindigkeit)",
        "shutter": "1/500 s – 1/2000 s (Action) • Video: 1/50 s (24/25p) bzw. 1/60 s (30p)",
        "iso": "ISO AUTO (max. 6400)",
        "af": "C-AF oder C-AF+TR (Tracking) mit 9-Felder-Gruppe [::: ]",
        "drive": "Serienbild H (8,7 fps mit C-AF) oder Lautlos H (15 fps) (15 fps Fokus beim 1. Bild) / Lautlos L (6,3 fps) (6,3 fps mit C-AF)",
        "pictureMode": "Natürlich",
        "metering": "[◉] ESP",
        "ibis": "Foto: S-IS An • Video: M-IS 1 (Sensor + elektronisch)",
        "format": "LN + RAW (oder LF)"
      },
      "specialTools": [
        "Lautlos H (15 fps) vs. Lautlos L (6,3 fps): WICHTIG – Bei Lautlos H (15 fps) wird der Fokus am ersten Bild fixiert; bewegt sich das Tier direkt auf dich zu, liefert Lautlos L (6,3 fps) oder Serienbild L mit C-AF kontinuierlich scharfe Treffer!",
        "Video M-IS 1 (S. 128): Kombiniert mechanischen Sensor-Shift + elektronische Stabilisierung.",
        "HD-HS 120fps (S. 93): 4-fache Zeitlupe direkt aus dem Video-Menü."
      ],
      "deepDives": [
        {
          "title": "Vertiefung: Wann Serienbild H (8,7 fps) und wann Serienbild L / Lautlos L (6,3 fps) (5–6,3 fps) mit C-AF?",
          "content": "Kontrast-AF bei Action folgt einer wichtigen Regel auf Seite 77–78 der Bedienungsanleitung: Bei <strong>H (Hoch)</strong> (8,7 fps mech. / 15 fps lautlos) werden Fokus, Belichtung und Weißabgleich beim ERSTEN Bild gespeichert! Das ist fantastisch für feste Ebenen (Sprung quer zur Kamera). Bewegt sich ein Hund oder Kind direkt auf dich zu, wähle <strong>L (Niedrig: Serienbild L 5 fps oder Lautlos L (6,3 fps) 6,3 fps)</strong> – dann fokussiert C-AF zwischen jedem einzelnen Bild laufend nach!"
        }
      ],
      "exerciseIds": [
        "ex-14"
      ],
      "iconKey": "motion",
      "weekendChallenge": "Kleine Wochenend-Aufgabe: Teste an einem vorbeifahrenden Rad oder spielenden Hund den Unterschied zwischen 1/1000 s (S-Modus) eingefroren und 1/15 s mitgezogenem Mitzieher."
    }
  ],
  "learningStages": [
    {
      "id": "stage-1",
      "title": "Stufe 1: Wohlfühl-Start & das Super Control Panel freischalten",
      "goal": "Mach die Kamera in zehn ruhigen Minuten übersichtlich und ganz zu deinem persönlichen Werkzeug."
    },
    {
      "id": "stage-2",
      "title": "Stufe 2: Belichtung, Einstellräder & Autofokus-Kontrolle",
      "goal": "Beherrsche Vorder-/Hinterrad, Punkt-Spot-AF, Back-Button-Focus und manuelles Fokus Peaking."
    },
    {
      "id": "stage-3",
      "title": "Stufe 3: Praxis-Missionen Landschaftsfotografie",
      "goal": "Setze Blende f/5.6–f/8, Belichtungsschutz für Wolken, Live Time und Focus Bracketing draußen ein."
    },
    {
      "id": "stage-4",
      "title": "Stufe 4: Praxis-Missionen Streetfotografie",
      "goal": "Meistere das unhörbare Stealth-Setup [Lautlos], Hüftperspektive + Touch-Auslöser und harten Schwarzweiß-Look."
    },
    {
      "id": "stage-5",
      "title": "Stufe 5: Porträt, Nacht (Live Composite), Architektur & OI.Share",
      "goal": "Beherrsche Augen-AF, Lichtmalerei bei Nacht, Keystone-Entzerrung und Smartphone-Workflow."
    }
  ],
  "exercises": [
    {
      "id": "ex-01",
      "stageId": "stage-1",
      "number": 1,
      "title": "Das versteckte Super Control Panel (LV-Monitor-Funktionsanzeige) aktivieren",
      "duration": "3 Min.",
      "difficulty": "Empfohlener Start",
      "genreTag": "Starter-Empfehlung",
      "manualPages": "S. 80, 136",
      "menuPath": "MENU → Anwender C1 → Steuerungseinst. → P/A/S/M → LV-Monitor-Funktionsanzeige: Ein",
      "goal": "Alle 20 wichtigsten Parameter (Bildmodus, ISO, WB, AF, RAW, Drive, IBIS) mit einem einzigen Druck auf OK sichtbar machen – statt durch tiefe Listenmenüs zu scrollen.",
      "steps": [
        "Drehe die Programmwählscheibe auf A (Blendenpriorität).",
        "Drücke MENU, gehe links bis zu Anwender (Anwendermenü), Gruppe C1, Punkt [Steuerungseinst.].",
        "Wähle [P/A/S/M] und setze bei [LV-Monitor-Funktionsanzeige] das Häkchen auf Ein (du kannst optional [Live Kontrolle] auf Aus setzen).",
        "Verlasse das Menü durch halbes Antippen des Auslösers und drücke OK (oder [↗])."
      ],
      "verificationCheck": "Auf dem Monitor erscheint sofort das klassische Raster mit 20 Kacheln (ISO, WB, Bildmodus, S-AF, etc.). Du kannst per Pfeiltasten oder direkt per Finger-Tipp + Einstellrad jeden Wert ändern!",
      "deepDive": "Im Auslieferungszustand zeigt Olympus oft nur die schlichte Seitenleiste ('Live Kontrolle', S. 79). Fast alle erfahrenen OM-D-Fotografen schwören jedoch auf die LV-Monitor-Funktionsanzeige (englisch Super Control Panel / SCP, S. 80 & 176), weil du hier auch Verstecke wie die Tonwertkurve (Gradation → INFO) oder manuelle IS-Brennweiten erreichst."
    },
    {
      "id": "ex-02",
      "stageId": "stage-1",
      "number": 2,
      "title": "LN + RAW aktivieren & verlustärmstes 'LSF (Super Fine)' freischalten",
      "duration": "4 Min.",
      "difficulty": "Empfohlener Start",
      "genreTag": "Starter-Empfehlung",
      "manualPages": "S. 93, 140",
      "menuPath": "MENU → Anwender F → JPEG-Qualität (Übernehmen) → 1. Stelle: LSF wählen • SCP → Bildqualität: LN + RAW",
      "goal": "Sichere jedes Foto gleichzeitig als teilbares Best-JPEG und als 12-Bit-RAW-Negativ (.ORF) mit voller Licht- und Schattenreserve.",
      "steps": [
        "Öffne MENU → Anwender Anwendermenü → Gruppe F (Kamera/WB/Farbe) → [JPEG-Qualität (Übernehmen)] (S. 140).",
        "Wähle den ersten Speicherplatz (Standard: L F), drücke ▶ und stelle die Komprimierung auf S F (Super Fine, Komprimierungsverhältnis 1/2,7) um. Bestätige mit OK.",
        "Geh zurück zum Live View, drücke OK (SCP), wähle unten links 'Bildqualität' und stelle 'LN + RAW' (oder 'LSF + RAW') ein."
      ],
      "verificationCheck": "Unten links im SCP steht nun 'LN + RAW' bzw. 'LSF + RAW'. Du erhältst künftig ein JPEG zum sofortigen Teilen auf dem Handy UND die .ORF RAW-Datei als Sicherheits-Negativ.",
      "deepDive": "Warum ist das für Olympus so genial? Selbst wenn du einmal im Schwarzweiß-Bildmodus 'Monoton' oder in einem 'ART Filter' fotografierst, speichert die RAW-Datei das komplette unberührte Farbbild mit 12 Bit Farbtiefe!"
    },
    {
      "id": "ex-03",
      "stageId": "stage-1",
      "number": 3,
      "title": "Lichter/Schatten-Zebra, Histogramm & 2-Achsen-Wasserwaage einrichten",
      "duration": "5 Min.",
      "difficulty": "Basis",
      "genreTag": "Landschaft & Street",
      "manualPages": "S. 28, 136, 144",
      "menuPath": "MENU → Anwender C1 → Info-Einstellungen → LV-Info → Anwender 1 & 2",
      "goal": "Ausgefressene helle Wolken (Rot-Warnung) und schiefe Horizonte ab sofort zuverlässig vermeiden.",
      "steps": [
        "Öffne MENU → Anwender C1 → [Info-Einstellungen] → [LV-Info] (S. 136).",
        "Aktiviere bei 'Anwender 1' die Kästchen für [Histogramm] und [Lichter & Schatten].",
        "Aktiviere bei 'Anwender 2' das Kästchen für [Nivellierungsanzeige] (2-Achsen-Wasserwaage).",
        "Kehre zum Sucher/Monitor zurück und drücke mehrmals die INFO-Taste."
      ],
      "verificationCheck": "Beim Durchschalten mit INFO siehst du ein Live-Histogramm + rote Markierungen an zu hellen Stellen (z. B. einer Lampe oder hellem Fenster) sowie in der nächsten Ansicht die 2-Achsen-Wasserwaage (beide Balken grün = exakt waagerecht).",
      "deepDive": "Bei 'Lichter & Schatten' bedeutet Rot = überbelichtet (reines Weiß ohne Zeichnung, sofort vorderes Rad Richtung -0,7 EV drehen!), Blau = unterbelichtet (reines Schwarz)."
    },
    {
      "id": "ex-04",
      "stageId": "stage-1",
      "number": 4,
      "title": "Tasten-Tuning: [x2] auf Fokuslupe & Sucher-Touchpad aktivieren",
      "duration": "5 Min.",
      "difficulty": "Basis",
      "genreTag": "Starter-Empfehlung",
      "manualPages": "S. 102, 135–136",
      "menuPath": "MENU → Anwender B → Tastenfunktion ([x2]) • MENU → Anwender A → AF-Sucherfeld: An",
      "goal": "Schneller fokussieren: Verwandle die Lupe/Tele-Taste (x2) optional in eine Lupe und das ausgeschaltete Display beim Blick durch den Sucher in ein Daumen-Touchpad.",
      "steps": [
        "Gehe in MENU → Anwender B → [Tastenfunktion] → [Digitaltele-Tastenfunktion] (S. 102, 136). Überlege: Für Landschaft/Makro ist 'Lupe (Vergrößern)' Gold wert; für Street kannst du hier 'Dig. Tele-Konverter' lassen.",
        "Probiere auch [REC-Tastenfunktion]: Setze sie z. B. auf 'Vorschau' (Abblendvorschau), 'AE BKT' oder 'Peaking'.",
        "Gehe dann zu MENU → Anwender A → [AF-Sucherfeld] → stelle es auf [An] (S. 135)."
      ],
      "verificationCheck": "Schau durch den elektronischen Sucher (EVF) und schiebe deinen rechten Daumen leicht über das ausgeschaltete rechte Displaydrittel – im Sucher wandert das AF-Messfeld flüssig unter deinem Daumen mit!",
      "deepDive": "Falls dir bei Linkshänder-Nutzung deine Nase versehentlich das Touchpad verschiebt, kannst du unter Anwender A → [AF-Sucherfeld] oder per Doppeltipp auf dem Display exakt festlegen, dass es nur rechts aktiv ist oder nur per Doppel-Antippen geweckt wird."
    },
    {
      "id": "ex-05",
      "stageId": "stage-2",
      "number": 5,
      "title": "Vorder- & Hinterrad blind beherrschen + Live-Histogramm lesen",
      "duration": "5 Min.",
      "difficulty": "Basis",
      "genreTag": "Landschaft & Street",
      "manualPages": "S. 56, 70, 144",
      "menuPath": "Modus A • Vorderes Einstellrad (+/-) • Hinteres Einstellrad (FNo.)",
      "goal": "Ohne Absetzen des Auges vom Sucher gleichzeitig Schärfentiefe und Bildhelligkeit perfekt aussteuern.",
      "steps": [
        "Drehe das Modusrad auf A, schalte via INFO auf deine Ansicht mit Histogramm.",
        "Stelle dich vor ein helles Fenster neben einer dunkleren Zimmerecke.",
        "Drehe mit dem Zeigefinger das vordere Rad auf -1,0 EV und sieh zu, wie die rote Warnung im Fenster verschwindet und das Histogramm sich nach links schiebt.",
        "Drehe gleichzeitig mit dem Daumen das hintere Rad auf f/5.6 und beobachte, wie sich die Verschlusszeit anpasst."
      ],
      "verificationCheck": "Auf der unteren Leiste steht F5.6 und -1.0; der rote Überbelichtungsbereich am Fenster ist verschwunden.",
      "deepDive": "Das vordere Rad für (+/-) im Modus A und S zu nutzen, macht dich dreimal schneller als jede Spiegelreflex ohne zweites Rad!"
    },
    {
      "id": "ex-06",
      "stageId": "stage-2",
      "number": 6,
      "title": "Einzelnes AF-Feld [ · ] vs. Super-Spot-AF (Lupenrahmen)",
      "duration": "6 Min.",
      "difficulty": "Basis",
      "genreTag": "Landschaft & Makro",
      "manualPages": "S. 72–73",
      "menuPath": "Pfeiltaste ◀ → Einzelnes Feld [ · ] + INFO/Touch-Lupe",
      "goal": "Nie wieder falschen Fokus auf dem Hintergrund – punktgenau auf eine einzige Blüte, ein Auge oder ein Straßenschild fokussieren.",
      "steps": [
        "Drücke die Pfeiltaste ◀ (Links) zur AF-Messfeldwahl.",
        "Drehe das vordere Rad, bis nur noch ein einzelner grüner Kasten [ · ] sichtbar ist.",
        "Verschiebe ihn per Pfeiltasten auf das linke Bilddrittel. Drücke OK zum Bestätigen.",
        "Für Mini-Ziele: Tippe auf dem Touchscreen auf dein Motiv und berühre das kleine Lupe-Symbol (oder halte ◀ kurz / INFO drücken für Zentrierung)."
      ],
      "verificationCheck": "Das AF-Feld springt nicht mehr unkontrolliert zwischen mehreren Objekten umher; der kleine Rahmen [ · ] greift exakt das Ziel im linken Drittel.",
      "deepDive": "Trick zum blitzschnellen Zentrieren: Egal wo das AF-Feld gelandet ist — einmal ◀ drücken und sofort die INFO-Taste drücken (oder OK 1 Sek. halten), schon springt das Messfeld wieder punktgenau in die Bildmitte (S. 72)!"
    },
    {
      "id": "ex-07",
      "stageId": "stage-2",
      "number": 7,
      "title": "Profi-Technik testen: Back-Button-Focus auf AEL/AFL (Modus 3)",
      "duration": "8 Min.",
      "difficulty": "Mittel",
      "genreTag": "Street & Landschaft",
      "manualPages": "S. 135, 142",
      "menuPath": "MENU → Anwender A → AEL/AFL → S-AF → Modus 3",
      "goal": "Trenne das Fokussieren vom Auslösen: So verhinderst du Fehlfokus beim Verschwenken und bereitest Zonenfokus in der Streetfotografie vor.",
      "steps": [
        "Gehe in MENU → Anwender A → [AEL/AFL] → [S-AF] und wähle [Modus 3] (S. 142).",
        "Verlasse das Menü. Halte jetzt den Auslöser halb gedrückt: Die Kamera fokussiert NICHT mehr über den Auslöser!",
        "Drücke nun mit dem rechten Daumen kurz auf die Taste AEL/AFL: Der Fokus rastet ein (grüner Rahmen + Punkt).",
        "Lass AEL/AFL los, verschwenke den Bildausschnitt oder warte bis jemand durch deine Schärfeebene läuft, und drücke den Auslöser durch!"
      ],
      "verificationCheck": "Drücken von AEL/AFL fokussiert (grüner Kreis), anschließendes Auslösen erfolgt verzögerungsfrei ohne neues Fokussuchen.",
      "deepDive": "Wenn es dir liegt, behalte Modus 3 bei (tausende Profis arbeiten so!); falls du den klassischen Auslöser-AF bevorzugst, stellst du danach einfach wieder 'Modus 1' ein. Allein zu wissen, wie es funktioniert, lohnt sich enorm!"
    },
    {
      "id": "ex-08",
      "stageId": "stage-2",
      "number": 8,
      "title": "Manueller Fokus mit Auto-Lupe & Fokus Peaking",
      "duration": "6 Min.",
      "difficulty": "Basis",
      "genreTag": "Landschaft & Makro",
      "manualPages": "S. 135, 137",
      "menuPath": "MENU → Anwender A → MF-Assistent (Vergrößern: Ein, Fokus Peaking: Ein)",
      "goal": "Im Dunkeln, durch Glasscheiben hindurch oder bei feinen Blättern manuell exakt scharfstellen.",
      "steps": [
        "Aktiviere unter MENU → Anwender A → [MF-Assistent] sowohl [Vergrößern] als auch [Fokus Peaking] (S. 135).",
        "Optional wählst du unter Anwender C1 → [Peaking Farbe] knalliges Rot oder Gelb (S. 137).",
        "Stelle im SCP auf 'MF' (oder noch besser 'S-AF+MF') und drehe den vorderen Fokusring deines Objektivs."
      ],
      "verificationCheck": "Beim Drehen des Fokusrings springt der Monitor automatisch in die Lupe und alle gerade scharfen Kanten glühen farbig (Peaking) auf!",
      "deepDive": "In Kombination mit 'S-AF+MF' bekommst du das Beste aus beiden Welten: Erst grob per Autofokus schnell ans Ziel, dann mit dem Ring präzise um Millimeter nachjustieren."
    },
    {
      "id": "ex-09",
      "stageId": "stage-3",
      "number": 9,
      "title": "Landschafts-Mission 1: Durchgehende Schärfe im A-Modus (f/5.6 – f/8)",
      "duration": "10 Min.",
      "difficulty": "Basis",
      "genreTag": "Landschaftsfotografie",
      "manualPages": "S. 56, 77",
      "menuPath": "Modus A • f/5.6–f/8 • ISO 200 • S-AF Einzelfeld • Anti-Shock oder 2s-Timer",
      "goal": "Eine echte Landschafts-Szene (Vordergrund + Mittelgrund + Horizont) mit idealer Schärfe und feinstem Dynamikumfang ohne Beugungsverlust fotografieren.",
      "steps": [
        "Wähle Modus A, ISO 200, Blende f/5.6 oder f/8 (bei viel Weitwinkel reicht f/5.6!).",
        "Wähle einen interessanten Vordergrund (z. B. Stein, Zaunpfahl oder Blume in ca. 1,5–2 m Entfernung) vor einer weiten Szenerie.",
        "Setze das einzelne AF-Feld [ · ] auf ein Objekt etwa im ersten Bilddrittel der Tiefe (nicht auf den unendlich fernen Horizont!) und fokussiere scharf.",
        "Prüfe mit Wasserwaage (INFO) einen geraden Horizont, stelle ggf. auf Anti-Shock oder 2s-Timer und mache ein Foto + eines als Gegenprobe bei f/16."
      ],
      "verificationCheck": "Zoome per Wiedergabe ▶ + vorderes Rad in beide Fotos hinein: Bei f/5.6–f/8 sind sowohl Vordergrund als auch Horizont scharf und feine Strukturen wirken knackiger als bei übertriebener Blende f/16.",
      "deepDive": "Bei f/16 am Micro-Four-Thirds-Sensor greift bereits spürbare Beugungsunschärfe (Diffraktion) und macht Steine/Blätter leicht milchig. Merke: f/4 bis f/8 ist die wahre Kraftzone der E-M10 Mark IV!"
    },
    {
      "id": "ex-10",
      "stageId": "stage-3",
      "number": 10,
      "title": "Landschafts-Mission 2: Himmel retten mit Spot-HI, Kurve & HDR / AE-Bracketing",
      "duration": "12 Min.",
      "difficulty": "Mittel",
      "genreTag": "Landschaftsfotografie",
      "manualPages": "S. 44, 48, 84, 96",
      "menuPath": "A (-0,7 EV + Gradation→INFO) vs. AP → AE-Belichtungsreihe / HDR1",
      "goal": "Auch bei hartem Gegenlicht (heller Himmel + schattiger Wald/Straße) volle Zeichnung in Wolken UND Details in den Schatten behalten.",
      "steps": [
        "Suche eine Szene mit hellem Himmel und dunklem Vordergrund.",
        "Test A (A-Modus): Schalte rote Lichter-Warnung ein, drehe das vordere Rad (+/-) so weit ins Minus, bis in den Wolken gerade nichts mehr rot blinkt (LN+RAW nutzen!).",
        "Test B (Tonwertkurve): Gehe im SCP auf Gradation → drücke INFO → ziehe Highlight auf -3 und Shadow auf +3 (S. 84).",
        "Test C (AP-Modus): Drehe das Modusrad auf AP → [↗] → wähle 'HDR' (HDR1 für natürlichen Look, S. 44) ODER 'AE-Belichtungsreihe' (3 Bilder ±1 EV, S. 48) und halte 1 Sekunde still."
      ],
      "verificationCheck": "Vergleiche per ▶ am Monitor alle drei Ergebnisse: Bei Test A/B und HDR1 zeigt das Histogramm keine rechts abgeschnittene Wand mehr und alle Wolkendetails sind gerettet.",
      "deepDive": "Bei AP → HDR rechnet die Kamera 4 Aufnahmen blitzschnell zu einem einzigen JPEG zusammen – sensationell für spontane Urlaubslandschaften ohne Stativ!"
    },
    {
      "id": "ex-11",
      "stageId": "stage-3",
      "number": 11,
      "title": "Landschafts-Mission 3: Fließendes Wasser & Wolken mit LIVE TIME (S. 61)",
      "duration": "12 Min.",
      "difficulty": "Fortgeschritten",
      "genreTag": "Landschaftsfotografie",
      "manualPages": "S. 43, 61–62, 139",
      "menuPath": "Kamera abstützen/Stativ (S-IS Aus) • Modus M → Hinterrad über 60\" hinaus zu LIVE TIME",
      "goal": "Bewegung in der Natur (Bach, Wellen, Straßenbahnen oder Wolken) kontrolliert weichzeichnen und am Bildschirm LIVE beim Entstehen beobachten!",
      "steps": [
        "Stelle die Kamera stabil auf ein Stativ, eine Bank oder ein Mäuerchen (S-IS auf Aus!).",
        "Drehe auf Modus M (oder nutze AP → Live Time, S. 43). Stelle im M-Modus ISO 200 (oder LOW) und f/8 ein. Drehe das hintere Rad immer weiter Richtung lange Zeit bis hinter 60\" zunächst BULB und dann 'LIVE TIME' steht.",
        "Starte mit einem ersten Druck auf den Auslöser (oder Timer 2s-Timer gegen Verwackler). Schau entspannt auf den Monitor: Alle 0,5 s (einstellbar in Anwender D2) wird die Aufnahme heller!",
        "Drücke den Auslöser genau dann ein zweites Mal, wenn Bildhelligkeit und Verwischung perfekt aussehen."
      ],
      "verificationCheck": "Unbewegte Steine/Wände bleiben gestochen scharf, während Bewegungen (Wasser/Vorbeiziehendes) seidig weich fließen – ganz ohne Raterei zur Sekundenzahl!",
      "deepDive": "Tagsüber bei praller Sonne ist selbst f/11 + ISO LOW oft nach 0,5 Sekunden schon hell (dafür nutzt man draußen ND-Schraubfilter, z. B. ND64 oder ND1000). Im schattigen Wald, abends zur Blauen Stunde oder in der Dämmerung gelingt Live Time oft komplett ohne Zusatzfilter!"
    },
    {
      "id": "ex-12",
      "stageId": "stage-3",
      "number": 12,
      "title": "Landschafts- & Makro-Mission 4: Fokus-Belichtungsreihe (Focus Bracketing)",
      "duration": "10 Min.",
      "difficulty": "Fortgeschritten",
      "genreTag": "Landschaft & Makro",
      "manualPages": "S. 49",
      "menuPath": "Programmwählscheibe auf AP → [↗] → Fokus-Belichtungsreihe (8 Aufnahmen)",
      "goal": "Unmögliche Schärfentiefe erzielen: Von einer Blüte 15 cm vor der Linse bis zum Wald im Hintergrund alles knackscharf einfangen.",
      "steps": [
        "Wähle ein nahes Objekt (z. B. Blume, Zapfen oder Moosstein) mit erkennbarem Hintergrund.",
        "Drehe das Modusrad auf AP, drücke [↗] und wähle ganz rechts 'Fokus-Belichtungsreihe' (Symbol gestaffelter Berg/Rahmen, S. 49).",
        "Wähle eine mittlere Schrittweite (Standard) per Pfeiltasten/Rad.",
        "Fokussiere auf die ALLERNACHSTE Kante deines Vordergrundmotivs und drücke 1× den Auslöser – halte die Kamera ca. 1 Sekunde ganz ruhig."
      ],
      "verificationCheck": "Die Kamera schießt automatisch 8 Aufnahmen in Folge, bei denen die Schärfeebene Schritt für Schritt nach hinten wandert! Kontrolliere Bild 1 (vorne scharf) und Bild 8 (hinten scharf) per ▶.",
      "deepDive": "Im Gegensatz zu Pro-Modellen wie der E-M5 III/OM-5 fügt die E-M10 Mark IV die 8 Bilder nicht intern zum fertigen Einzelbild zusammen, sondern speichert alle 8 gestaffelten Fotos (inkl. RAW!), die du kostenlos zu Hause z. B. mit Focus-Stacking-Software verschmelzen kannst."
    },
    {
      "id": "ex-13",
      "stageId": "stage-4",
      "number": 13,
      "title": "Street-Mission 1: Das 100 % lautlose 'Stealth-Street'-Setup bauen",
      "duration": "5 Min.",
      "difficulty": "Empfohlener Start (Street)",
      "genreTag": "Streetfotografie",
      "manualPages": "S. 78, 123, 126, 133, 137",
      "menuPath": "Pfeiltaste ▼ → [Lautlos] • Anwender C2 Signalton: Aus • Aufnahme 1 AF-Hilfslicht: Aus • Setup Aufnahmeansicht: Aus",
      "goal": "Deine Kamera so einrichten, dass niemand im Café, Museum oder auf dem Wochenmarkt bemerkt, dass du überhaupt ausgelöst hast.",
      "steps": [
        "Drücke die Pfeiltaste ▼ (Unten) und wähle '[Lautlos]' (Lautlos Einzelbild) oder 'Lautlos L (6,3 fps)' (Lautlos 6,3 fps).",
        "Deaktiviere im Menü Anwender C2 den Signalton [Signalton] auf Aus (S. 137).",
        "Deaktiviere im Menü Aufnahme 1 das [AF-Hilfslicht] auf Aus (S. 123).",
        "Stelle im Menü Setup unter [Aufnahmeansicht] auf Aus (S. 133), damit dein Sucher beim Weiterfotografieren sofort frei bleibt."
      ],
      "verificationCheck": "Richte in einem stillen Raum auf ein Objekt und löse aus: Es klickt absolut nichts, kein Licht blitzt vorne auf, kein Pieps ertönt und im Sucher geht die Live-Sicht ohne Unterbrechung weiter!",
      "deepDive": "Wichtig für Innenräume: Sollten unter billigen LED-Lampen oder Neonröhren bei [Lautlos] (elektronischem Verschluss) blasse Streifen quer durchs Foto erscheinen, drücke einfach kurz ▼ und wechsle für drinnen zurück auf Einzelbild (mechanischer Verschluss ist bereits von Haus aus extrem leise!)."
    },
    {
      "id": "ex-14",
      "stageId": "stage-4",
      "number": 14,
      "title": "Street-Mission 2: Einfrieren vs. Dynamik-Wisch im Modus S",
      "duration": "12 Min.",
      "difficulty": "Mittel",
      "genreTag": "Streetfotografie",
      "manualPages": "S. 58, 74, 94",
      "menuPath": "Modus S • ISO AUTO (Max 6400) • S-IS An • Test 1: 1/500 s vs. Test 2: 1/15 s",
      "goal": "Spontan zwischen gestochen scharfem Moment-Einfrieren und künstlerischer Bewegungsunschärfe im selben Straßenzug wechseln.",
      "steps": [
        "Drehe das Modusrad auf S (Verschlusspriorität), wähle ISO AUTO, IBIS auf S-IS An.",
        "Übung A (Einfrieren): Drehe das hintere Rad auf 1/500 s und fotografiere gehende Passanten oder einen vorbei fahrenden Radler beim Überqueren eines Zebrastreifens.",
        "Übung B (Dynamik): Lehne dich kurz an eine Wand oder drücke die Ellbogen eng an deinen Körper, drehe das hintere Rad blitzschnell auf 1/15 s (oder 1/8 s!) und halte beim Auslösen ganz still, während jemand durchs Bild läuft."
      ],
      "verificationCheck": "Auf Bild A sind selbst Schuhspitzen in der Luft scharf; auf Bild B bleiben Häuser, Schilder und Laternen dank 5-Achsen-IBIS völlig scharf, während der Passant wie ein geisterhafter Lichtstreifen durch die Stadt huscht!",
      "deepDive": "Genau diese Dualität im Modus S — Blitzschnell von 1/500 s auf 1/15 s drehen — nutzt die volle Stärke des eingebauten 5-Achsen-Bildstabilisators aus."
    },
    {
      "id": "ex-15",
      "stageId": "stage-4",
      "number": 15,
      "title": "Street-Mission 3: Hüftperspektive & [Touch-Auslöser] meistern",
      "duration": "10 Min.",
      "difficulty": "Mittel",
      "genreTag": "Streetfotografie",
      "manualPages": "S. 17, 32, 69, 141",
      "menuPath": "Monitor 80° klappen • Links Touch-Symbol → Touch-Auslöser • ggf. |◯| gedrückt → EVF-Umschaltung Aus",
      "goal": "Ungewohnte tiefe Frosch-/Hüftperspektiven einfangen, während die Umgebung meint, du prüfst nur deine Einstellungen auf dem Display.",
      "steps": [
        "Klappe das hintere Display um ca. 80° nach oben und schalte auf [Lautlos].",
        "Tippe ganz links am Display-Rand auf das kleine Touch-Icon, bis das Finger+Auslöser-Symbol ('Touch-Auslöser') aktiv ist (S. 32).",
        "Pro-Tipp: Halte bei Hüft-Schüssen die Taste |◯| 1 Sekunde gedrückt und stelle [Auto Umschalten EVF] ggf. kurz auf Aus, falls deine Jacke sonst den Augensensor auslöst!",
        "Halte die Kamera entspannt vor Bauch oder Hüfte, komponiere schräg von unten und tippe exakt auf das Motiv auf dem Screen."
      ],
      "verificationCheck": "Mit deinem Finger-Tipp stellt die Kamera exakt auf den berührten Punkt scharf und löst augenblicklich lautlos aus!",
      "deepDive": "Diese Methode ist ein absoluter Klassiker: Kinder, Hunde, Straßenarchitektur und tiefe Pfützenspiegelungen wirken aus Hüft- oder Kniehöhe zehnmal spannender als aus Standard-Augenhöhe!"
    },
    {
      "id": "ex-16",
      "stageId": "stage-4",
      "number": 16,
      "title": "Street-Mission 4: Kontrastreiches Schwarzweiß out of cam + RAW-Backup",
      "duration": "10 Min.",
      "difficulty": "Mittel",
      "genreTag": "Streetfotografie",
      "manualPages": "S. 84, 90, 129–130",
      "menuPath": "LN + RAW • SCP Bildmodus: Monoton • Farbfilter: R (Rot) oder Ye (Gelb) • Kontrast +2",
      "goal": "Die Welt bereits im elektronischen Sucher in zeitlosem Schwarzweiß sehen und fotografieren – ohne je auf farbige RAW-Daten zu verzichten.",
      "steps": [
        "Prüfe zuerst im SCP, dass als Bildqualität 'LN + RAW' eingestellt ist!",
        "Wähle im SCP unter Bildmodus 'Monoton' (oder teste alternativ ART 11 'Körniger Film').",
        "Wähle beim Feld rechts neben Kontrast den Schwarzweiß-Farbfilter 'Ye (Gelb)' oder 'R (Rot)' und drehe den Kontrast auf +1 oder +2 (S. 90).",
        "Fotografiere harte Sonnenschatten oder Gesichter am Lichtfleck. Entwickle ein Foto danach optional in der Wiedergabe per OK → [RAW-Daten bearb.] → [ART BKT] zurück zu Farbe oder anderen Filtern (S. 130)!"
      ],
      "verificationCheck": "Du siehst im Sucher ein dramatisches Schwarzweißbild (Blau des Himmels erscheint tiefdunkel!), hast aber auf der SD-Karte immer noch eine verlustfreie Farb-RAW-Datei.",
      "deepDive": "Im Sucher sofort Schwarzweiß zu sehen ändert radikal, worauf dein Auge achtet: Du reagierst nicht mehr auf ablenkende rote Reklameschilder, sondern auf Formen, Lichtkegel, Linien und Kontraste!"
    },
    {
      "id": "ex-17",
      "stageId": "stage-5",
      "number": 17,
      "title": "Porträt-Mission: Augen-Priorität (Auge-Links [iL] / Auge-Rechts [iR]) & Offenblende",
      "duration": "8 Min.",
      "difficulty": "Basis",
      "genreTag": "Porträt",
      "manualPages": "S. 56, 73, 82",
      "menuPath": "Modus A • max. Blendenöffnung (Zoom langes Ende oder Festbrennweite) • SCP Augen-AF [i] / Auge-Links [iL] / Auge-Rechts [iR]",
      "goal": "Jedes Porträt sitzt gestochen scharf exakt auf der Iris des vorderen Auges.",
      "steps": [
        "Stelle Modus A mit größtmöglicher Blendenöffnung ein (kleinste Blendenzahl).",
        "Aktiviere im SCP (oder über Pfeiltaste ◀ + hinteres Rad) 'Augen-AF [i] Gesichts-/Augen-Priorität' bzw. probiere Auge-Links [iL] (linkes Auge) und Auge-Rechts [iR].",
        "Bitte jemanden um ein kurzes Kopfporträt mit mindestens 2 Meter Abstand zum Hintergrund."
      ],
      "verificationCheck": "Auf dem Sucher folgt ein kleines grünes Viereck direkt dem Auge; in der 14× Wiedergabe sind einzelne Wimpern knackscharf.",
      "deepDive": "Bei brillentragenden Modellen im Gegenlicht wechsle ggf. über die Taste ◀ blitzschnell auf einzelnes AF-Feld [ · ], falls Reflexe aufs Glas ablenken."
    },
    {
      "id": "ex-18",
      "stageId": "stage-5",
      "number": 18,
      "title": "Nacht-Mission: Lichtmalerei mit Live Composite (LIVECOMP)",
      "duration": "15 Min.",
      "difficulty": "Fortgeschritten",
      "genreTag": "Nacht & Astro",
      "manualPages": "S. 42, 63–64, 136, 139",
      "menuPath": "Stativ (S-IS Aus) • AP → Live Composite (oder M → LIVECOMP) • ggf. LV-Erweiterung: An2",
      "goal": "Im abgedunkelten Raum mit der Handy-Taschenlampe in die Luft malen oder abends Autolichtspuren ohne Überbelichtung aufnehmen!",
      "steps": [
        "Kamera im fast dunklen Zimmer oder abends am Fenster fest abstellen (S-IS Aus).",
        "Modusrad auf AP → [↗] → 'Live Composite' (bzw. M-Modus bis LIVECOMP ganz links hinter LIVE TIME, Basisbelichtung z. B. 1 s).",
        "Auslöser 1× drücken (Kamera bereitet Referenzbild vor — warten bis 'Bereit' erscheint).",
        "Auslöser 2× drücken und jetzt mit der eingeschalteten Smartphone-Taschenlampe einen Namen oder Stern vor der Kamera in die Luft zeichnen – beobachte das Entstehen live am Monitor! Auslöser 3× drücken zum Beenden."
      ],
      "verificationCheck": "Die dunklen Möbel / Straßenlaternen bleiben exakt gleich dunkel belichtet, während sich die gemalten Lichtspuren magisch ins Bild fügen!",
      "deepDive": "Dasselbe geniale Prinzip funktioniert exakt genauso bei Gewitterblitzen, beim Feuerwerk oder bei drehenden Sternspuren über einer einsamen Berghütte!"
    },
    {
      "id": "ex-19",
      "stageId": "stage-5",
      "number": 19,
      "title": "Architektur-Mission: Stürzende Linien live per Keystone-Korrektur retten",
      "duration": "8 Min.",
      "difficulty": "Mittel",
      "genreTag": "Architektur",
      "manualPages": "S. 47, 137",
      "menuPath": "Modus AP → [↗] → Keystone-Korrektur (Vorne: Vertikal • Hinten: Horizontal)",
      "goal": "Ein hohes Gebäude oder einen Schrank von unten her fotografieren und trotzdem exakt parallele, senkrechte Hauswände bekommen.",
      "steps": [
        "Wähle Modus AP → [↗] → 'Keystone-Korrektur' (Trapez-Symbol, S. 47).",
        "Neige die Kamera nach oben zu einer hohen Hausfassade oder einem Regal – die Linien stürzen normalerweise pyramidenförmig nach innen.",
        "Drehe jetzt am vorderen und hinteren Einstellrad und beobachte, wie sich die Wände im Live-Bild sofort kerzengerade aufrichten!",
        "Drücke zum Zurücksetzen auf neutral bei Bedarf die OK-Taste im Auswahlrahmen und löse mit Reserverand oben aus."
      ],
      "verificationCheck": "Die senkrechten Kanten verlaufen nun absolut parallel zum linken und rechten Bildrand – ganz ohne Photoshop!",
      "deepDive": "Tipp: Lass bei starker Entzerrung oben etwas mehr Himmel/Platz als sonst, weil das digitale Strecken die oberen Bildecken aufzieht."
    },
    {
      "id": "ex-20",
      "stageId": "stage-5",
      "number": 20,
      "title": "Workflow-Abschluss: Exif-Copyright & Wireless-Transfer mit OI.Share",
      "duration": "8 Min.",
      "difficulty": "Basis",
      "genreTag": "Workflow",
      "manualPages": "S. 112, 132, 141, 148–151",
      "menuPath": "MENU → Anwender G → Copyright-Einstellungen • ▶ → '<' Freigabe • ▶ MENU → Geräteverbindung",
      "goal": "Jedes Foto mit deinem Namen signieren und ausgewählte Lieblingsbilder direkt per Tastendruck drahtlos ans Smartphone senden.",
      "steps": [
        "Gehe in MENU → Anwender G → [Copyright-Einstellungen] (S. 141), stelle auf [An] und trage bei Künstlername / Copyright deinen Namen ein.",
        "Öffne ein eben gemachtes Bild über ▶ (Wiedergabe) und drücke oben rechts die Taste '<' (Freigabe) — ein kleines Auswahlsymbol markiert dieses Foto (S. 112).",
        "Öffne die App 'OM Image Share (OI.Share)' am Smartphone, wähle in der Kamera MENU → ▶ → [Geräteverbindung] (S. 132) und scanne den QR-Code auf dem Kameramonitor."
      ],
      "verificationCheck": "Die markierten Fotos lassen sich sofort als geteilte Galerie aufs Smartphone laden — sogar mit ausgeschalteter Kamera dank Bluetooth-Wecken, wenn Ausschalt-Standby aktiv ist!",
      "deepDive": "Extra-Reisetipp: In der OI.Share-App kannst du unterwegs ein GPS-Track-Log aufzeichnen lassen und abends synchronisiert die App exakt zu jeder Sekunde die GPS-Koordinaten auf alle Kamerafotos!"
    }
  ],
  "quizQuestions": [
    {
      "id": "q1",
      "question": "Wo schaltest du das berühmte 20-Felder Super Control Panel (LV-Monitor-Funktionsanzeige) für P/A/S/M überhaupt erst frei?",
      "options": [
        "Im Aufnahmemenü Aufnahme 1 → Zurücksetzen",
        "Unter MENU → Anwender C1 → Steuerungseinst. → P/A/S/M → LV-Monitor-Funktionsanzeige: Ein",
        "Durch Drücken der Lupe/Tele-Taste (x2) für 3 Sekunden"
      ],
      "correctIndex": 1,
      "explanation": "Richtig! Ab Werk ist in P/A/S/M nur die schlichte Live Kontrolle aktiv. Erst über Anwender C1 → Steuerungseinst. (S. 80 & 136) schaltest du die LV-Monitor-Funktionsanzeige (SCP) ein."
    },
    {
      "id": "q2",
      "question": "Bei welcher Blende liegt der optische Schärfe-Sweet-Spot für Landschaften an der 20-MP-MFT-Kamera (bevor Beugungsunschärfe einsetzt)?",
      "options": [
        "f/1.4 bis f/2.0",
        "f/4 bis f/8 (entspricht in der Schärfentiefe bereits Vollformat f/8 bis f/16!)",
        "Immer f/22 für maximale Schärfentiefe"
      ],
      "correctIndex": 1,
      "explanation": "Exakt! Durch den Crop-Faktor 2,0 liefert Micro Four Thirds bereits bei f/5.6–f/8 enorme Schärfentiefe – über f/11 nimmt die Gesamtschärfe durch Beugung bereits wieder ab."
    },
    {
      "id": "q3",
      "question": "Welche Tasten- und Einstellungskombination macht die E-M10 Mark IV zur komplett lautlosen und unauffälligen Stealth-Street-Kamera?",
      "options": [
        "Pfeiltaste ▼ → [Lautlos] (Lautlos), Anwender C2 → Signalton: Aus, Aufnahme 1 → AF-Hilfslicht: Aus",
        "Programmwählscheibe auf SCN → Porträt + Blitz hochklappen",
        "Modus M + Bulb + S-IS Aus"
      ],
      "correctIndex": 0,
      "explanation": "Perfekt! Mit [Lautlos] (elektronischer Verschluss bis 1/16000 s), abgeschaltetem Piepton und deaktiviertem orangen AF-Hilfslicht bemerkt niemand eine Aufnahme."
    },
    {
      "id": "q4",
      "question": "Wie erreichst du im Super Control Panel die geheime 3-Zonen-Tonwertkurve für Lichter und Schatten direkt in der Kamera?",
      "options": [
        "Auf die Kachel 'Bildqualität' gehen und die Lupe/Tele-Taste (x2) drücken",
        "Auf die Kachel 'Gradation' gehen und dort einmal INFO drücken",
        "Kamera schütteln"
      ],
      "correctIndex": 1,
      "explanation": "Genau richtig (S. 84)! Markierst du im SCP 'Gradation' (oder in Monoton die Kurve) und drückst INFO, verstellst du Highlights & Shadows direkt grafisch mit Vorder- und Hinterrad!"
    },
    {
      "id": "q5",
      "question": "Warum lohnt sich beim Fotografieren in 'Monoton' oder einem 'ART Filter' trotzdem die Bildqualität 'LN + RAW'?",
      "options": [
        "Weil der Akku dadurch doppelt so lange hält",
        "Weil das .ORF-RAW zusätzlich zum kreativen Schwarzweiß/Art-JPEG stets ein völlig verlustfreies Farb-Original mit voller 12-Bit-Dynamik speichert!",
        "Weil sonst der Bildstabilisator abgeschaltet wird"
      ],
      "correctIndex": 1,
      "explanation": "Absolut! Das JPEG dient zum schnellen Teilen, und aus dem unangetasteten .ORF-RAW kannst du in der Kamera (▶ → OK → RAW-Daten bearb.) oder am PC jederzeit auch das Farbbild retten."
    },
    {
      "id": "q6",
      "question": "Was ist der Unterschied zwischen LIVE TIME und LIVE COMPOSITE (S. 61–64)?",
      "options": [
        "Es gibt keinen Unterschied, beide machen einfach 1/1000 s",
        "LIVE TIME belichtet das ganze Bild dauerhaft weiter (ideal für Wasserfälle/Wolken); LIVE COMPOSITE addiert nach dem Basisbild NUR noch neu hinzukommende Lichter (ideal für Lichtspuren/Sterne ohne überbelichtete Häuser)!",
        "LIVE COMPOSITE funktioniert nur für Videos"
      ],
      "correctIndex": 1,
      "explanation": "Genau so funktioniert die Olympus-Magie (S. 61–64): Live Time für klassische Langzeitbelichtungen, Live Composite für Lichtmalerei, Gewitter, Feuerwerk und Autolichtspuren."
    },
    {
      "id": "q7",
      "question": "Was passiert, wenn du in den Menüpunkten 'Lichter & Schatten' (Anwender C1 → LV-Info) aktivierst und beim Rausfotografieren plötzlich rote Flecken auf den Wolken im Sucher erscheinen?",
      "options": [
        "Das Objektiv ist defekt",
        "Rot warnt in Echtzeit vor Überbelichtung (ausgefressene Spitzlichter ohne Bildzeichnung) — vorderes Rad leicht ins Minus (-0,7 EV) drehen!",
        "Rot markiert den Autofokus-Punkt"
      ],
      "correctIndex": 1,
      "explanation": "Top! Rot = ausgefressene Lichter (reines Weiß), Blau = abgesoffene Schatten (reines Schwarz). Drehst du am vorderen Rad etwas ins Minus, rettest du jede Wolke!"
    },
    {
      "id": "q8",
      "question": "Wie klappst du bei der OM-D E-M10 Mark IV den integrierten Blitz mechanisch aus?",
      "options": [
        "Er springt in AUTO immer automatisch von selbst hoch",
        "Durch kurzes Schieben des ON/OFF-Hebels über ON hinaus zur federnden Position Blitz-UP (S. 15, 74)",
        "Über die MENU-Taste → Setup → Blitz auswerfen"
      ],
      "correctIndex": 1,
      "explanation": "Richtig! Bei der E-M10 Mark IV bist immer du der Chef über den Blitz — der kleine mechanische Federweg Blitz-UP am Einschalter lässt ihn gezielt ausklappen."
    }
  ],
  "troubleshootingFaq": [
    {
      "q": "Warum erscheint bei Druck auf OK nicht das große 20-Felder Super Control Panel, sondern nur eine schmale Seitenleiste?",
      "a": "Ab Werk ist in P/A/S/M nur die 'Live Kontrolle' (S. 79) aktiv. Gehe einmalig zu <strong>MENU → Anwender C1 → Steuerungseinst. → P/A/S/M</strong> und aktiviere <strong>LV-Monitor-Funktionsanzeige: Ein</strong> (S. 80, 136). In AUTO/SCN/ART erscheint bauartbedingt weiterhin die Live Guide / Seitenleiste."
    },
    {
      "q": "Der Monitor schaltet sich plötzlich schwarz, obwohl ich die Kamera am Bauch/Stativ halte!",
      "a": "Deine Jacke, ein Riemen oder dein Finger deckt den kleinen <strong>Augensensor direkt oberhalb des Suchers</strong> ab – die Kamera denkt, dein Auge klebt am Okular (EVF)! Halte einfach die Taste <strong>|◯|</strong> rechts neben dem Sucher 1 Sekunde gedrückt und stelle <strong>[Auto Umschalten EVF]</strong> auf Aus (S. 25, 141)."
    },
    {
      "q": "Der Auslöser lässt sich drücken, aber es wird kein Foto aufgenommen!",
      "a": "Meist hat der Autofokus kein Ziel gefunden (grüner Kreis blinkt), weil dein Motiv näher als die Naheinstellgrenze des Objektivs liegt (meist ca. 20–25 cm!) oder eine einfarbige weiße Wand keinen Kontrast bietet. Tritt 10 cm zurück oder ziele auf eine kontrastreiche Kante (S. 170)."
    },
    {
      "q": "Meine dunklen Nacht- oder Zimmerfotos haben im Sucher einen seltsamen Blauschleier oder im Lautlos-Modus [Lautlos] Streifen durch das Bild!",
      "a": "Im Lautlos-Modus [Lautlos] tastet der elektronische Verschluss das Bild zeilenweise aus – schnelle 50/60Hz-LED- oder Leuchtstofflampen erzeugen dabei Streifen (Banding). Drücke unter Kunstlicht einfach Pfeiltaste ▼ zurück auf <strong>Einzelbild</strong> (mechanischer Verschluss). Falls weiße/rote Dauer-Pünktchen im Dunklen erscheinen: Führe <strong>MENU → Anwender I → Pixelkorr.</strong> (S. 169) einmal durch."
    },
    {
      "q": "Warum dauert es nach einer 10-Sekunden-Langzeitbelichtung nochmal 10 Sekunden ('BUSY' im Display), bis das Foto erscheint?",
      "a": "Das ist die automatische Langzeit-<strong>Rauschminderung (Dunkelbildabzug)</strong> unter MENU → Anwender D1 (S. 138): Die Kamera nimmt bei geschlossenem Verschluss ein gleich langes Kontrollbild auf und rechnet Sensorwärme-Hotpixel heraus. Für beste Qualität bei Einzelbildern Auto belassen; bei Serien oder Zeitraffer kannst du diesen Abzug dort auf Aus stellen."
    },
    {
      "q": "Mein weißer Schnee oder sonniger Sandstrand wirkt im Foto immer grau!",
      "a": "Der Belichtungsmesser rechnet riesige helle Flächen automatisch auf 'Mittelgrau' herunter. Lösung 1: Drehe das vordere Einstellrad (+/-) bei Schnee um <strong>+0,7 bis +1,3 EV</strong> ins Plus (bei viel dunklem Wald umgekehrt leicht ins Minus!). Lösung 2: Nutze bei strahlend weißen Zielen die Messung <strong>[ · ]HI (Spot Helllicht)</strong> (S. 96)."
    }
  ],
  "defaultVsProTable": [
    {
      "setting": "Steuerungsanzeige (OK)",
      "factory": "Nur Live Kontrolle (Seitenleiste)",
      "recommended": "LV-Monitor-Funktionsanzeige (SCP) Ein",
      "path": "Anwender C1 → Steuerungseinst.",
      "page": "S. 80, 136"
    },
    {
      "setting": "Bildqualität",
      "factory": "Nur LF / LN (kein RAW!)",
      "recommended": "LN + RAW (oder LSF + RAW via Anwender F)",
      "path": "SCP Bildqualität & Anwender F",
      "page": "S. 93, 140"
    },
    {
      "setting": "Bildmodus",
      "factory": "i-Enhance (Auto)",
      "recommended": "Natürlich (Landschaft) / Monoton (Street)",
      "path": "SCP Bildmodus",
      "page": "S. 82"
    },
    {
      "setting": "Live-View Overlays",
      "factory": "Basis-Anzeige",
      "recommended": "Anwender 1: Histogramm + Lichter/Schatten; Anwender 2: Wasserwaage",
      "path": "Anwender C1 → Info → LV-Info",
      "page": "S. 136, 144"
    },
    {
      "setting": "Signalton (Signalton)",
      "factory": "An (piept bei Fokus!)",
      "recommended": "Aus",
      "path": "Anwender C2 → Signalton",
      "page": "S. 137"
    },
    {
      "setting": "AF-Hilfslicht (vordere LED)",
      "factory": "An (blendet Personen)",
      "recommended": "Aus",
      "path": "Aufnahme 1 → AF-Hilfslicht",
      "page": "S. 123"
    },
    {
      "setting": "AF-Messfeldwahl",
      "factory": "[:::] Alle 121 Felder",
      "recommended": "[ · ] Einzelnes Feld (Landschaft) / [::: ] 9-Felder (Street)",
      "path": "Pfeiltaste ◀",
      "page": "S. 72"
    },
    {
      "setting": "Sucher-Touchpad",
      "factory": "Aus",
      "recommended": "An (AF-Feld am Sucher mit Daumen schieben)",
      "path": "Anwender A → AF-Sucherfeld",
      "page": "S. 135"
    },
    {
      "setting": "[x2] Taste",
      "factory": "Dig. Tele-Konverter",
      "recommended": "Landschaft: Lupe Vergrößern / Peaking • Street: Dig. Tele oder Peaking",
      "path": "Anwender B → Tastenfunktion",
      "page": "S. 102, 136"
    },
    {
      "setting": "Rauschfilter (JPEG)",
      "factory": "Standard",
      "recommended": "schwach (bewahrt Blatt-, Fell- und Steinstrukturen)",
      "path": "Anwender D1 → Rauschfilter",
      "page": "S. 138"
    }
  ],
  "manualQuickIndex": [
    {
      "topic": "Teile & Bedienelemente der Kamera",
      "pages": "S. 11–12",
      "pageNum": 11
    },
    {
      "topic": "Akku, SD-Karte & Dioptrien-Einstellung",
      "pages": "S. 14–19",
      "pageNum": 14
    },
    {
      "topic": "Sucher vs. Klappmonitor (|◯|-Taste & 180°-Display)",
      "pages": "S. 17, 25",
      "pageNum": 25
    },
    {
      "topic": "INFO-Taste, Histogramm & Wasserwaage",
      "pages": "S. 28, 144",
      "pageNum": 28
    },
    {
      "topic": "Touchscreen (Touch-AF vs. Touch-Auslöser)",
      "pages": "S. 31–32, 69",
      "pageNum": 32
    },
    {
      "topic": "Kurzwahl [↗] & AUTO Live Guide",
      "pages": "S. 33–35",
      "pageNum": 33
    },
    {
      "topic": "SCN Motivprogramme (inkl. Freihand Sternenlicht)",
      "pages": "S. 36–39",
      "pageNum": 36
    },
    {
      "topic": "AP Erweiterter Fotomodus (Alle 9 Modi!)",
      "pages": "S. 40–49",
      "pageNum": 40
    },
    {
      "topic": "Live Composite & Live Time im AP-Modus",
      "pages": "S. 42–43",
      "pageNum": 42
    },
    {
      "topic": "Keystone-Korrektur & HDR",
      "pages": "S. 44, 47",
      "pageNum": 47
    },
    {
      "topic": "AE- & Fokus-Belichtungsreihe",
      "pages": "S. 48–49",
      "pageNum": 48
    },
    {
      "topic": "ART Filter (16 Effekte)",
      "pages": "S. 50–53",
      "pageNum": 50
    },
    {
      "topic": "Modi P, A, S, M & Einstellräder",
      "pages": "S. 54–64",
      "pageNum": 54
    },
    {
      "topic": "BULB, LIVE TIME & LIVECOMP im M-Modus",
      "pages": "S. 61–64",
      "pageNum": 61
    },
    {
      "topic": "Video-Modus Video (4K & High-Speed)",
      "pages": "S. 65–68, 128",
      "pageNum": 66
    },
    {
      "topic": "AF-Feld, Augen-AF Augen-AF [i] & Super-Spot-AF",
      "pages": "S. 72–73",
      "pageNum": 72
    },
    {
      "topic": "ISO, Blitz Blitz-UP & Blitzmodi (SLOW2)",
      "pages": "S. 74–76",
      "pageNum": 74
    },
    {
      "topic": "Serienaufnahme, Anti-Shock & Lautlos-Modus",
      "pages": "S. 77–78",
      "pageNum": 77
    },
    {
      "topic": "Live Kontrolle vs. LV-Monitor-Funktionsanzeige (SCP)",
      "pages": "S. 79–80, 176",
      "pageNum": 80
    },
    {
      "topic": "Tonwertkurve (Lichter & Schatten über INFO)",
      "pages": "S. 84",
      "pageNum": 84
    },
    {
      "topic": "Weißabgleich & Kelvin (CWB)",
      "pages": "S. 85–87",
      "pageNum": 85
    },
    {
      "topic": "Monoton SW-Filter & Farbtönung",
      "pages": "S. 90",
      "pageNum": 90
    },
    {
      "topic": "5-Achsen-Bildstabilisator & Altglas-Brennweite",
      "pages": "S. 94",
      "pageNum": 94
    },
    {
      "topic": "Belichtungsmessung (ESP, Spot, HI, SH)",
      "pages": "S. 96",
      "pageNum": 96
    },
    {
      "topic": "Tastenfunktionen umbelegen & AEL/AFL Back-Button",
      "pages": "S. 102–105",
      "pageNum": 102
    },
    {
      "topic": "Wiedergabe, RAW-Entwicklung & ART BKT",
      "pages": "S. 108–112, 129–131",
      "pageNum": 129
    },
    {
      "topic": "Aufnahmemenüs Aufnahme 1 & Aufnahme 2 (Intervall / Mehrfachbel.)",
      "pages": "S. 121–127",
      "pageNum": 121
    },
    {
      "topic": "Anwendermenü Anwender A bis I Komplettübersicht",
      "pages": "S. 135–146",
      "pageNum": 135
    },
    {
      "topic": "WLAN / Bluetooth & OI.Share Smartphone-App",
      "pages": "S. 148–160",
      "pageNum": 148
    },
    {
      "topic": "Pixelkorrektur, Sensorreinigung & Fehlerbehebung",
      "pages": "S. 169–175",
      "pageNum": 169
    },
    {
      "topic": "Technische Daten IM021",
      "pages": "S. 166–168",
      "pageNum": 166
    }
  ],
  "discoveryWorlds": [
    {
      "id": "world-basics",
      "step": "01",
      "iconKey": "compass",
      "title": "Kamera-Basics & DSLR-Umstieg",
      "subtitle": "Blende, Zeit, ISO & warum Olympus spiegellos so angenehm anders denkt",
      "description": "In vier ruhigen Lesekapiteln und einem interaktiven Belichtungs-Labor verstehst du das Zusammenspiel von Licht, Schärfentiefe und den Vorteilen deines neuen Micro-Four-Thirds-Sensors — ganz ohne Formeln.",
      "targetSection": "#dslr-bridge-section",
      "targetTab": "tab-start",
      "cta": "Grundlagen lesen & testen"
    },
    {
      "id": "world-body",
      "step": "02",
      "iconKey": "camera",
      "title": "Gehäuse, Räder & Tasten",
      "subtitle": "Die echte E-M10 Mark IV erkunden statt trockener Diagramme",
      "description": "Tippe direkt auf hochauflösende Fotos von Oberseite, Rückseite und Front — mit ehrlichen Erklärungen dazu, welche vier Bedienelemente du wirklich ständig brauchst.",
      "targetTab": "tab-ueberblick",
      "cta": "Kamera-Studio öffnen"
    },
    {
      "id": "world-menu",
      "step": "03",
      "iconKey": "sliders",
      "title": "Menüführung ohne Überforderung",
      "subtitle": "Die 8 sinnvollsten Einstellungen für den Start (und optional alle Details)",
      "description": "Wir lassen den Menü-Dschungel bewusst erst einmal links liegen und schauen nur auf acht Stellschrauben, die deine Kamera sofort ruhiger, schneller und vielseitiger machen.",
      "targetTab": "tab-menue",
      "targetMenuMode": "curated",
      "cta": "Mit den Top 8 starten"
    },
    {
      "id": "world-creative",
      "step": "04",
      "iconKey": "mountain",
      "title": "Kreative Erkundung & Missionen",
      "subtitle": "Landschaft, Street und spielerische Praxis-Ideen ohne Druck",
      "description": "Konkrete Bildrezepte, verständliche Vertiefungen und zwanzig freiwillige Foto-Missionen, mit denen jede neue Funktion sofort zu einem eigenen Bild wird.",
      "targetTab": "tab-genres",
      "cta": "Genres & Ideen entdecken"
    }
  ],
  "dslrBridge": [
    {
      "id": "bridge-triangle",
      "number": "Kapitel 01",
      "title": "Licht im Gleichgewicht: Blende, Verschlusszeit und ISO in natürlicher Sprache",
      "readTime": "4 Min. Lesezeit",
      "summary": "Wie Belichtung funktioniert, wenn man sie sich wie einen Wasserhahn statt wie eine Matheformel vorstellt — inklusive einer Olympus-Besonderheit beim Basis-ISO.",
      "paragraphs": [
        "Eine Belichtung entsteht immer aus denselben drei Entscheidungen, völlig unabhängig davon, welche Kamera du in der Hand hältst. Du kannst dir ein Foto vorstellen wie ein Wasserglas, das genau bis zur Markierung gefüllt werden soll: Zu wenig Licht ergibt ein zu dunkles, flaues Bild; zu viel Licht spült die hellen Himmelspartien zu reinem Weiß aus.",
        "Die Blende bestimmt, wie weit sich das Objektiv öffnet. Eine kleine Zahl wie f/2.8 bedeutet eine große Öffnung: Es fällt viel Licht auf einmal ein und der Hintergrund löst sich in weiche Unschärfe auf. Eine mittlere bis kleine Öffnung wie f/5.6 oder f/8 lässt weniger Licht pro Moment durch, sorgt aber dafür, dass vom Vordergrund bis zum fernen Horizont alles gleichzeitig scharf bleibt.",
        "Die Verschlusszeit regelt, wie lange dieser Vorhang offen steht. Bei 1/500 Sekunde wird selbst ein rennender Hund oder ein vorbeifahrender Radfahrer gestochen scharf eingefroren. Bei 1/8 Sekunde oder noch länger fängt die Kamera Bewegung bewusst als weichen Wisch oder als seidig fließendes Wasser ein.",
        "Der ISO-Wert schließlich ist kein zusätzliches Licht von außen, sondern der elektronische Verstärker deines Sensors. Wenn es abends dunkler wird, dreht ein höherer ISO-Wert (etwa 1600 oder 3200) das Signal heller — mit dem Preis eines leicht feineren Korns in ruhigen Schatten. Wichtig bei deiner Olympus gegenüber vielen Spiegelreflexkameras: Die beste Grundempfindlichkeit liegt bei ISO 200, nicht bei ISO 100. ISO 200 liefert die weichsten Tonwerte und die größte Reserve für Himmel und Schatten."
      ],
      "takeaway": "Für entspannte 90 Prozent deiner Fotos wählst du Modus A (Blende bestimmen) oder S (Zeit bestimmen). Mit dem vorderen Zeigefingerrad (+/-) steuerst du direkt, ob das fertige Bild heller oder stimmungsvoll dunkler wirkt."
    },
    {
      "id": "bridge-evf",
      "number": "Kapitel 02",
      "title": "Vom Spiegelkasten zum elektronischen Sucher: Warum du das Ergebnis vorher siehst",
      "readTime": "3 Min. Lesezeit",
      "summary": "Der größte Unterschied zur gewohnten Spiegelreflex: Dein Sucher zeigt nicht mehr nur die Realität durch Glas, sondern live deine bereits berechnete Aufnahme.",
      "paragraphs": [
        "Bei deiner bisherigen Spiegelreflexkamera hast du durch ein kleines Spiegel- und Prismensystem optisch direkt durch das Objektiv geschaut. Das wirkt angenehm gewohnt, hat aber einen blinden Fleck: Ob deine Belichtung zu hell, zu dunkel oder farblich zu kühl eingestellt war, konntest du erst nach dem Auslösen unten auf dem Display ahnen.",
        "Die OM-D E-M10 Mark IV verzichtet auf den schweren Klappspiegel. Das Licht trifft ununterbrochen auf den Bildsensor und zeichnet das fertige Bild in Echtzeit auf einen feinen OLED-Sucher mit 2,36 Millionen Bildpunkten. Drehst du das vordere Rad etwas ins Minus, wird das Sucherbild sofort exakt so viel dunkler und kontrastreicher, wie dein Foto gleich gespeichert wird.",
        "Selbst kreative Entscheidungen finden live statt: Stellst du die Kamera für die Straße auf Monoton (Schwarzweiß), erlebst du die Welt bereits durch den Sucher ohne störende Farben. Gleichzeitig blendet die Kamera auf Wunsch ein Live-Histogramm, rote Überbelichtungswarnungen in weißen Wolken und eine zweiachsige Wasserwaage direkt mit ein.",
        "Eine nützliche Unterscheidung im Menü (Anwender C1 unter LV-Erweiterung): Im Alltag lässt du diese Funktion auf Aus, damit dir der Sucher ehrlich zeigt, wenn ein Bild zu hell oder zu dunkel gerät. Nur wenn du abends bei fast völliger Dunkelheit Landschaften einrichten möchtest, schaltest du vorübergehend auf An2 — dann hellt der Sucher wie ein Nachtsichtgerät auf, damit du den Horizont noch erkennst."
      ],
      "takeaway": "Vertraue dem Sucherbild: Wenn eine weiße Wolke im Sucher ausbrennt oder dir eine Gasse zu flach wirkt, korrigiere noch vor dem Auslösen kurz am vorderen Rad."
    },
    {
      "id": "bridge-mft",
      "number": "Kapitel 03",
      "title": "Der Micro-Four-Thirds-Sensor (Faktor 2,0): Warum f/5.6 plötzlich bis zum Horizont reicht",
      "readTime": "4 Min. Lesezeit",
      "summary": "Was die Sensorgröße bei Landschaft und Porträt ganz praktisch ändert — und warum du viele alte Blendenregeln angenehm vereinfachen kannst.",
      "paragraphs": [
        "Olympus nutzt das Micro-Four-Thirds-System (kurz MFT). Gegenüber einem klassischen Kleinbild- oder Vollformatsensor besitzt der Sensor genau die halbe Diagonale — daraus entsteht der oft genannte Formatfaktor 2,0 (gegenüber deiner bisherigen APS-C-Spiegelreflex etwa 1,3-fach kompakter).",
        "Für die Bildwirkung bedeuten zwei Dinge ganz Konkretes: Erstens halbiert sich die Zahl auf dem Objektiv. Ein kleines 14–42 mm Kit-Objektiv liefert denselben Bildwinkel wie ein früher schweres 28–84 mm Universalzoom. Eine winzige 25-mm-Festbrennweite zeigt genau den natürlichen Blickwinkel einer klassischen 50-mm-Reportageoptik.",
        "Zweitens verschiebt sich die Schärfentiefe zu deinen Gunsten draußen in der Natur: Bei derselben Blendenzahl — sagen wir f/5.6 — bekommst du an der Olympus ungefähr so viel Tiefenschärfe von vorn bis hinten wie bei einer großen Vollformatkamera mit f/11. Während man früher für Landschaften oft f/11 oder f/16 einstellen und dafür lange Zeiten in Kauf nehmen musste, erreichst du denselben durchgehenden Schärfeeindruck bereits bei f/5.6 bis f/8. Ab f/11 wird das Bild durch optische Lichtbeugung eher wieder weicher.",
        "Und umgekehrt beim Porträt? Wenn du den Hintergrund weich verschwimmen lassen möchtest, hilft dir einfach mehr Brennweite (am Zoom bis 42 mm drehen oder ein lichtstarkes 45 mm f/1.8 nutzen), etwas näher herantreten und darauf achten, dass der Hintergrund weit hinter deinem Motiv liegt."
      ],
      "takeaway": "Landschafts-Merksatz für deine E-M10 Mark IV: Bleibe fast immer zwischen f/4 und f/8. Du erntest maximale Objektivschärfe und volle Schärfentiefe zugleich."
    },
    {
      "id": "bridge-ibis",
      "number": "Kapitel 04",
      "title": "5-Achsen-Stabilisierung & lautloses Auslösen: Ohne Stativ und unbemerkt fotografieren",
      "readTime": "3 Min. Lesezeit",
      "summary": "Zwei Stärken, die eine leichte Systemkamera im Alltag von vielen schweren Spiegelreflexkameras unterscheiden.",
      "paragraphs": [
        "Viele Umsteiger staunen als Erstes darüber, wie schwerelos ruhige Bilder aus der freien Hand gelingen. In der E-M10 Mark IV sitzt der Bildsensor auf magnetischen Achsen und gleicht Handzittern automatisch in fünf Richtungen aus — egal welches Objektiv du vorne ansetzt.",
        "Wo du an der Spiegelreflex bei 1/60 Sekunde nervös das Stativ aufgebaut hättest, hältst du mit angewinkelten Ellbogen noch 1/8 Sekunde oder sogar 1/4 Sekunde sauber aus der Hand. Im Straßenverkehr kannst du vorübergehende Menschen leicht wischen lassen, während die Hausfassade dahinter gestochen scharf stehen bleibt. Nur wenn die Kamera fest auf einem echten Stativ steht, schaltest du die Stabilisierung (S-IS) kurz ab, damit sie nicht gegen sich selbst arbeitet.",
        "Die zweite stille Stärke versteckt sich hinter dem Auslöse-Symbol [Lautlos]. Auf Knopfdruck wechselt die Kamera vom hörbaren mechanischen Verschluss zu einem rein elektronischen Auslesen des Sensors. In ruhigen Cafés, Museen, auf Konzerten oder beim Beobachten auf der Straße entsteht null Auslösegeräusch — niemand schaut erschrocken auf.",
        "Ein ehrlicher Praxishinweis für Innenräume: Unter manchen preiswerten LED- oder Leuchtstoffröhren kann der lautlose elektronische Verschluss blasse Querstreifen ins Foto zeichnen, weil die Lampe 50-mal pro Sekunde flimmert. Sobald du das drinnen im Sucher siehst, schaltest du per Pfeiltaste Unten in einer Sekunde auf das normale mechanische Einzelbild zurück."
      ],
      "takeaway": "Nutze die Stabilisierung mutig für kreative lange Handbelichtungen — und vergiss nicht, für echte Langzeitbelichtungen auf dem Stativ auf timer 2s + S-IS Aus zu wechseln."
    }
  ],
  "exposureScenarios": [
    {
      "id": "sunny-landscape",
      "label": "Sonnige Landschaft",
      "apertureIdx": 3,
      "shutterIdx": 5,
      "isoIdx": 0,
      "note": "Sweet Spot der E-M10 Mark IV: Blende f/5.6 zeichnet bis in die Weite scharf, Basis-ISO 200 holt maximale Reserven aus hellem Himmel und schattigen Felsen."
    },
    {
      "id": "street-motion",
      "label": "Lebhafte Straße",
      "apertureIdx": 2,
      "shutterIdx": 5,
      "isoIdx": 1,
      "note": "Kurze 1/500 s friert Passanten und Radfahrer sauber im Schritt ein; f/4 hält noch genügend Kontext rundherum lesbar."
    },
    {
      "id": "waterfall-silk",
      "label": "Weiches Wasser (Abends)",
      "apertureIdx": 4,
      "shutterIdx": 0,
      "isoIdx": 0,
      "note": "Mit 1/4 Sekunde beginnt Wasser seidig zu fließen — am Waldbach abends oder früh morgens oft noch ohne Graufilter und bei angelegtem Stativ messerscharf."
    },
    {
      "id": "portrait-bokeh",
      "label": "Ruhiges Porträt",
      "apertureIdx": 1,
      "shutterIdx": 4,
      "isoIdx": 1,
      "note": "Offenere Blende hebt eine Person sanft vom unruhigen Hintergrund ab; 1/250 s sorgt für sichere Schärfe auf dem vorderen Auge."
    }
  ],
  "curatedMenuHighlights": [
    {
      "step": "01",
      "title": "Das Super Control Panel freischalten",
      "where": "MENU -> Anwender C1 -> Steuerungseinst. -> P/A/S/M -> LV-Monitor-Funktionsanzeige: Ein",
      "page": "S. 80, 136",
      "why": "Die wahrscheinlich wichtigste Umstellung der ganzen Kamera. Ab Werk siehst du auf Druck der OK-Taste nur eine schmale Seitenleiste. Sobald du das Super Control Panel aktivierst, öffnen ein einziger Tipp auf OK alle zwanzig wichtigsten Kamera-Schalter auf einer einzigen klaren Übersicht — ähnlich dem Statusdisplay einer großen Spiegelreflex, nur direkt per Rad oder Finger bedienbar."
    },
    {
      "step": "02",
      "title": "RAW und feines JPEG gemeinsam sichern",
      "where": "SCP unten links -> LN + RAW (und optional Anwender F -> JPEG-Qualität -> LSF)",
      "page": "S. 93, 140",
      "why": "Ein JPEG sieht sofort fertig aus und fliegt per Smartphone-App problemlos zu Freunden. Eine zusätzliche 12-Bit-RAW-Datei (.ORF) dient als dein verlustfreies Negativ: Selbst wenn ein Himmel einmal zu hell geraten ist oder du spontan in Schwarzweiß fotografiert hast, bleibt das vollständige Farboriginal mit riesiger Tonwertreserve sicher auf der Karte."
    },
    {
      "step": "03",
      "title": "Ehrliche Farben mit 'Natürlich' statt 'i-Enhance'",
      "where": "SCP oben links -> Bildmodus: Natürlich (oder Monoton für Schwarzweiß)",
      "page": "S. 82, 90",
      "why": "Die Werkseinstellung 'i-Enhance' verstärkt Kontrast und Sättigung je nach Szene recht kräftig, was Himmel oder Grüntöne manchmal unruhig wirken lässt. 'Natürlich' liefert ausgewogene, angenehm filmische Farben als ruhige Basis — und für bewusste Schwarzweiß-Spaziergänge wartet direkt daneben 'Monoton'."
    },
    {
      "step": "04",
      "title": "Kein Piepen und kein grelles Hilfslicht mehr",
      "where": "MENU -> Anwender C2 -> Signalton: Aus • MENU -> Aufnahme 1 -> AF-Hilfslicht: Aus",
      "page": "S. 123, 137",
      "why": "Draußen in der stillen Morgenlandschaft wie auch im Straßencafé stören elektronisches Fokus-Piepen und das vorne aufleuchtende orange Autofokus-Licht nur das Motiv und dich selbst. Im Sucher zeigt dir der grüne Punkt lautlos und deutlich präziser, wann die Schärfe sitzt."
    },
    {
      "step": "05",
      "title": "Sucher-Helfer: Histogramm, Rot-Warnung & Wasserwaage",
      "where": "MENU -> Anwender C1 -> Info-Einstellungen -> LV-Info -> Anwender 1 & 2",
      "page": "S. 28, 136, 144",
      "why": "Mit wenigen Haken legst du dir auf die INFO-Taste genau das, was bei der Landschaft wirklich zählt: Eine kleine Helligkeitskurve (Histogramm), rote Warnflecken auf Stellen, die drohen ins pure Weiß auszufressen, sowie eine zweiseitige Wasserwaage gegen unbemerkt kippende Horizonte."
    },
    {
      "step": "06",
      "title": "Echtes Vorschaubild im Sucher aktiv halten",
      "where": "MENU -> Anwender C1 -> LV-Erweiterung: Aus",
      "page": "S. 136",
      "why": "Wenn diese Option auf 'Aus' steht, zeigt dir die Kamera exakt die Helligkeit, mit der das Foto gespeichert wird — drehst du an der Belichtungskorrektur, siehst du die Wirkung unmittelbar. Nur bei Nachtaufnahmen in tiefer Finsternis schaltest du sie kurz als Kompositionshilfe ein."
    },
    {
      "step": "07",
      "title": "Einzelnes AF-Feld statt 121-Felder-Rätselraten",
      "where": "Pfeiltaste Links -> Einzelnes Feld [ · ] • optional Anwender A -> AF-Sucherfeld: Ein",
      "page": "S. 72, 135",
      "why": "Wenn alle 121 Autofokus-Felder gleichzeitig aktiv sind, entscheidet die Kamera oft spontan für den Grashalm vor deinem eigentlichen Motiv. Mit dem einzelnen grünen Feld legst du die Schärfe exakt dorthin, wo du sie haben willst — und mit aktivem Sucher-Touchpad schiebst du das Feld bequem mit dem Daumen über den Monitor, während dein Auge am Sucher bleibt."
    },
    {
      "step": "08",
      "title": "Entrauschung bei JPEGs auf 'schwach' stellen",
      "where": "MENU -> Anwender D1 -> Rauschfilter: schwach",
      "page": "S. 138",
      "why": "Ab Werk bügelt die Kamera hohe ISO-Bilder für JPEGs spürbar glatt, wodurch feines Laub, Stein oder Fell manchmal etwas wachsig wirkt. Die Stufe 'schwach' bewahrt sichtbar mehr natürliche Textur und sieht auch bei ISO 1600 oder 3200 angenehm organisch aus."
    }
  ],
  "milestones": [
    {
      "id": "m-basics",
      "title": "Umsteiger-Klarheit",
      "desc": "Alle 4 Grundlagen-Kapitel gelesen",
      "rule": "basics_all"
    },
    {
      "id": "m-gear",
      "title": "Kamera-Kenner",
      "desc": "8+ Elemente direkt an der E-M10 erkundet",
      "rule": "controls_8"
    },
    {
      "id": "m-starter",
      "title": "Wohlfühl-Setup",
      "desc": "Stufe 1 im Lernpfad abgeschlossen",
      "rule": "stage_1"
    },
    {
      "id": "m-landscape",
      "title": "Weitblick draußen",
      "desc": "3+ Landschafts-Missionen erprobt",
      "rule": "landscape_3"
    },
    {
      "id": "m-street",
      "title": "Leiser Beobachter",
      "desc": "3+ Street-Missionen erprobt",
      "rule": "street_3"
    },
    {
      "id": "m-quiz",
      "title": "Souverän am Auslöser",
      "desc": "6+ Praxis-Szenarien im Quiz gelöst",
      "rule": "quiz_6"
    }
  ]
};
