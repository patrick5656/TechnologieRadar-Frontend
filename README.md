# TechnologieRadar Dokumentation

# Einführung
TODO: Allgemeines zum Projekt

# Lösungsstrategie
TODO: Architekturentscheide --> Single Page Application, JAM-Stack, Server Side Rendering

Technologieentscheide

# Bausteinsicht
TODO: Client / Server

Ansichten des Clients

## Client-Ansichten
Technologie-Radar-Administration:
Technologien können in dieser Ansicht vom CTO oder einem Tech-Lead verwaltet werden. Dazu gehört, neue Technologien hinzufügen, bestehende aktualisieren und löschen. Ausserdem sollen Technologien publiziert werden können.

einem Technologie-Radar-Viewer:
Diese Ansicht dient den Mit
ie-Radar-Viewer, auf welcher der Technologie-Radar resp. die Technologien allen Mitarbeiter eingesehen werden können.

System-Administration (Optionale Ansicht):
In dieser Ansicht soll es möglich sein, neue Mandanten zu erfassen und zu verwalten. Es soll ausserdem möglich sein, neue Personen zu einem Mandanten hinzuzufügen.


REST-API

# Laufzeitsicht
TODO: Ablauf eines Requests

# Verteilungssicht
TODO: Wo liegen die Applikation und wohin und wie werden diese Deployt?

# Querschnittliche Konzepte
TODO: Authentifizierung:

TODO: Evtl sonstiges.

# Entwurfsentscheidungen
Mit Standalone Komponenten ist es möglich, komplett auf Module in einer Angular App zu verzichten. 
Ich habe mich jedoch dazu entschieden, meine Angular App modular aufzubauen für Features, da aus meiner Sicht so die Applikation strukturierter ist. Für Shared Komponenten sollen stattdessen Standalone Komponenten verwendet werden. 

# Qualitätsanforderungen

# Arbeitsjournal
09.02.2024 - 8h
 - Erstellung der git Repositories (Frontend & Backend)
 - Recherche zur Dokumentation (arc42)
 - Erstellung der initialen Dokumentation
 - Erstellung der Angular application mit einem modularen Aufbau
 - Erstellung eines Grundgerüst zum speichern und anzeigen von Technologien.


10.02.2024 & 11.02.2024 - 4h
 - Funktionalitäten zum speichern/lesen von Technologien erweitert
 - Routing angepasst
 - Erster service Test erstellt.


12.02.2024 - 2h
 - Projekt struktur angepasst
 - Technology-Type angepasst
 - Service für History Einträge erstellt mit InMemoryDbService

19.02.2024 - 10h
 - CSS Framework rechechiert.
 - Layout erstellt für die Seite mit pico css
 - Overview der Administationsseite überarbeitet
 - Modal erstellt um nicht publizierte Technologien zu veröffentlichen

20.02.2024 - 8h
 - Fertigstellung der Ansicht und Logik zum Publizieren einer Technology.
 - Erstellung der Formulare zum erstellen von einer Technologie sowie zum bearbeiten
 - Begonnen mit dem erstellen des Backends (Node js mit einem simplen Get Endpoint sowie connection auf eine MySql Datenbank)  --> Uncommited

21.02.2024 - 4 morgen + 5h nachmittag
 - Fertigstellung des Backends Endpoints zum Erstellen, Bearbeiten und Lesen von Technologien
 - Anpassen des Frontends um das Backend aufzurufen.
 - Hinzufügen Add Technology Button sowie Zurück Button

22.02.2024 - 2h
 - Hinzufügen von einer Change History Tabelle
 - Schreiben in die Change History Tabelle beim Insert

23.02.2024 - 7h
 - Backend angepasst für besseres Testing zu ermöglichen.
 - Erster Unit Test erstellt für Endpoint mit Sinon Mock

24.02.2024 - 2h
 - Restliche Tests im Backend erstellt.
 - Verwendung von Enviroments Variablen

25.02.2024 - 8h
 - Anpassung des Frontend um die korrekten Endpunkte aufzurufen
 - Validierung für Ring und Ring description erstellt (beide required sobald eines gesetz ansonsten optional)
 - Neue Ansicht erstellt für Benutzer mit Gruppierung nach Kategorie oder Einordnung
 - Ausblenden der Descriptions in der Tabelle bei kleinem Screen
 - Kleinere Anpassung im Layout
 - Erstellung von tests im Frontend

*Aufgewendete Zeit Total: 58h* 


# Fazit und Reflexion
Fazit und Reflexion: Vorgehen war bisschen chaotisch. Ziel war zunächst eine Grundstruktur zu erstellen und bis dahin war alles durcheinander.
Ausserdem habe ich einige Anforderungen gar nicht im Auge gehabt, weswegen diese noch nachträglich angepasst werden mussten.

Ziel am Anfang den Aufbau fertig machen, um genügend früh fragen stellen bei Problemen.
