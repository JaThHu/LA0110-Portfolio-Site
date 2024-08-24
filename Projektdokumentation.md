# Projekt-Dokumentation

Ghost_SnipexOG/Jathhu/JanickDieSniper

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|   23.08.2024    | 0.0.1   | Das Projekt ist aufgesetzt, und die Navigation zwischen den Seiten funktioniert einwandfrei. Die Grundstruktur der Website steht. |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Ich mache ein Portfolio als Website mit HTML, CSS und JavaScript.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |     Muss            |  Funktional    | Als Besucher der Website möchte ich eine klare und einfach zu bedienende Navigation haben, damit ich schnell zu den verschiedenen Bereichen der Website gelangen kann. |
| 2  |       Muss          |   Funktional   |      Als potenzieller Arbeitgeber oder Kunde möchte ich eine übersichtliche Darstellung der Projekte sehen, damit ich einen schnellen Eindruck von den Fähigkeiten und bisherigen Arbeiten des Entwicklers bekomme.                              |
| 3  |      Muss           |   Funktional   |       Als Benutzer möchte ich den Ersteller mit den Links folgen und anschreiben können.                             |
| 4  |     Muss            |  Qualität    |Als Benutzer, der die Website auf einem mobilen Gerät besucht, möchte ich eine mobilfreundliche Darstellung der Website haben, damit ich die Inhalte ohne Zoom oder horizontales Scrollen lesen und navigieren kann.|
| 5  |        Muss         |   Funktional   |             Als Besucher der Website möchte ich auf einer „Über mich“-Seite mehr über die Person hinter der Website erfahren, damit ich Vertrauen aufbauen und mehr über deren Hintergrund und Fähigkeiten erfahren kann.                       |
|  6 |       Muss          | Funktional     |     Als Benutzer möchte ich auf die veröffentlichte Website zugreifen können, damit ich die Inhalte, Projekte und Kontaktmöglichkeiten des Entwicklers sehen und nutzen kann.                               |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Website ist geladen, und die Navigationsleiste ist sichtbar. | Der Benutzer klickt auf den Link "Über mich" in der Navigationsleiste. | Die "Über mich"-Seite wird korrekt angezeigt. |
| 1.2  | Die Website ist geladen, und die Navigationsleiste ist sichtbar. | Der Benutzer bewegt den Mauszeiger über das Menü "Projekte" und klickt auf einen Eintrag im Dropdown-Menü. | Die entsprechende Projektseite wird geladen. |
| 2.1  | Die "Projekte"-Seite ist geladen. | Der Benutzer scrollt durch die Projekte. | Alle Projekte werden mit Titel, Bild, Beschreibung und Link korrekt angezeigt. |
| 3.1  | Die Kontaktseite ist geöffnet. | Der Benutzer klickt auf einen der Links. | Der Link öffnet sich und kann auf der Seite machen was er will. |
| 4.1  | Die Website wird auf einem mobilen Gerät geöffnet. | Der Benutzer navigiert durch die Website. | Die Inhalte passen sich der Bildschirmgröße an, ohne dass der Benutzer horizontal scrollen muss. |
| 5.1  | Der Benutzer klickt auf den "Über mich"-Link in der Navigation. | Der Benutzer ruft die "Über mich"-Seite auf. | Die "Über mich"-Seite wird angezeigt und zeigt eine persönliche Beschreibung, den Lebenslauf und Kontaktdaten. |
| 6.1  | Die Website ist live geschaltet und öffentlich zugänglich. | Der Benutzer ruft die URL der Website im Browser auf. | Die Website wird korrekt geladen, und alle Inhalte sind sichtbar und funktionsfähig. |


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |  23.08.2024     |    Janick       |   Einrichtung des React.js-Projekts und Implementierung der Navbar.	           |               |
| 1.B |    23.08.2024      |     Janick      |      Entwicklung der Navigation für die Startseite, „Über mich“-Seite und „Projekte“-Seite.	        |               |
| 2.A		 | 06.09.2024      |     Janick      |      Entwicklung der Startseite mit allen notwendigen Platzhaltern und Verlinkungen.        |               |
| 2.B		 |  06.09.2024     |     Janick      |   Darstellung der Projekte mit Platzhaltern für Titel, Bild, Beschreibung und Link.	           |               |
| 2.C	 |   06.09.2024    |     Janick      |      Gestaltung der Projekt-Platzhalter mit Hover-Effekten.	        |               |
|3.A	  | 18.10.2024      |    Janick       |    Hinzufügen von Social Media-Links und E-Mail-Kontaktmöglichkeit im Footer.          |               |
| 4.A |  18.10.2024     |   Janick        |     Umsetzung des Responsive Designs für die Navigation und Hauptinhalte.	         |               |
| 4.B	 |  18.10.2024     |   Janick        |     Anpassung der „Über mich“- und „Projekte“-Seite für mobile Geräte.         |               |
| 5.A | 06.09.2024      |    Janick       |    Entwicklung der „Über mich“-Seite mit allen relevanten Informationen.	          |               |
| 6.A	 |  25.10.2024     |   Janick        |     Veröffentlichung der Website auf dem Web-Server.         |               |
| 7.A	 |  25.10.2024     |    Janick       |     Testing der gesamten Website und Behebung von Fehlern.         |               |

Total: 

## 3 Entscheiden

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |  23.08.2024     |    Janick       |               |                   |
| 1.B  | 23.08.2024      |    Janick       |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
