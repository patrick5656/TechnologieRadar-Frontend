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
 - Erstellung der Funktionalität 'Technologien anzeigen und löschen' mit InMemoryApi umgesetzt.
 - Nachführen des Arbeitsjournals

Nächste geplante Schritte:
 - Funktionalitäten für das Feature 'Technologien Administration' fertigstellen.
 - Tests für Services und Komponenten erstellen.

10.02.2024 & 11.02.2024 - 4h
 - Funktionalitäten für das Feature 'Technologien Administration' fertigstellen.
 - Routing angepasst
 - Erster service Test erstellt.

Nächste geplante Schritte:
- Weitere Tests erstellen.
- Design und Layout anpassen

12.02.2024 - 2h
 - Anforderungen heruntergebrochen
 - Struktur angepasst
 - Technology-Type angepasst
 - Service für History Einträge erstellt mit InMemoryDbService

Nächste geplante Schritte:
 - Frontend Layout erstellen
 - Services ergänzen/anpassen
  

*Aufgewendete Zeit Total: 14h* 


# Fazit und Reflexion
TODO:
