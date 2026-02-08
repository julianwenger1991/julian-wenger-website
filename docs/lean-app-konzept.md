# LEAN App Konzept (Browser, PC & Tablet)

## Zielbild
Eine webbasierte LEAN-Plattform, mit der Teams in **einer Anwendung** arbeiten können für:

1. **Last Planner System (LPS)** – orientiert an Koppla (Phasenplanung, Lookahead, Weekly Work Plan, PPC).
2. **Shopfloor Management** – tägliche Steuerung, Eskalationen, Kennzahlen, Maßnahmen (ähnlich Jira in der Aufgabenlogik).
3. **Projektmanagement über Kanban Boards** – visuelle Aufgabensteuerung (ähnlich MS Planner).

Die App ist auf **Desktop und Tablet** optimiert, mit Fokus auf Geschwindigkeit, einfache Bedienung und klare Visualisierung.

---

## Benutzerrollen
- **Admin**: Mandanten/Projekte anlegen, Rollen vergeben, globale Einstellungen.
- **Projektleitung**: Pläne, Boards, Kennzahlen, Auswertungen, Freigaben.
- **Teamleitung / Polier / Meister**: Aufgaben planen, Status pflegen, Hindernisse melden.
- **Mitarbeitende**: Aufgaben bearbeiten, Rückmeldungen geben, Checklisten pflegen.

---

## Kernmodule

## 1) Last Planner System
### Funktionen
- **Master-/Phasenplanung** mit Meilensteinen.
- **Lookahead-Planung** (z. B. 6 Wochen) mit Constraint-Tracking.
- **Weekly Work Plan (WWP)** mit Commitments.
- **PPC (Percent Plan Complete)** automatisch berechnet.
- **Grundanalyse für nicht erledigte Aufgaben** (z. B. Material, Kapazität, Freigabe).

### Typischer Ablauf
1. Aufgabe im Phasenplan erstellen.
2. Aufgabe im Lookahead konkretisieren.
3. Blocker/Constraints identifizieren und lösen.
4. Aufgabe in den WWP übernehmen.
5. Erfüllung + Ursache bei Nichterfüllung dokumentieren.

---

## 2) Shopfloor Management
### Funktionen
- **Tägliches Board** (offene Themen, Abweichungen, Safety, Qualität, Lieferung).
- **Eskalationslogik** (Team → Bereich → Management).
- **Maßnahmen-Tracking** mit Verantwortlichen und Fristen.
- **Wiederkehrende Meetings** inkl. Protokoll und Standardagenda.
- **KPI-Kacheln** (Sicherheit, Qualität, Produktivität, Liefertermine).

### Nutzen
- Schnelle Transparenz über Probleme am Ort der Wertschöpfung.
- Klare Verantwortlichkeiten und Nachverfolgung.
- Standardisierter Verbesserungsprozess.

---

## 3) Kanban-Projektmanagement
### Funktionen
- Boards je Projekt/Team.
- Spalten wie **Backlog, Bereit, In Arbeit, Review, Erledigt**.
- Drag-and-drop, WIP-Limits, Swimlanes.
- Aufgaben mit Labels, Priorität, Fälligkeit, Anhängen, Checklisten.
- Abhängigkeiten zwischen Aufgaben und Verlinkung zu LPS-/Shopfloor-Objekten.

---

## Gemeinsames Datenmodell
Um alle drei Methoden zu verbinden, sollten folgende zentrale Entitäten existieren:

- **Workspace / Mandant**
- **Projekt**
- **Board** (Typ: LPS, Shopfloor, Kanban)
- **Karte / Task**
- **Constraint / Blocker**
- **Maßnahme**
- **KPI-Eintrag**
- **Meeting** (inkl. Agenda und Protokoll)
- **Nutzer / Rolle**

Wichtig: Eine Aufgabe kann in mehreren Kontexten sichtbar sein (z. B. Kanban + Weekly Plan), ohne dupliziert zu werden.

---

## UX- und Geräteanforderungen (PC & Tablet)
- **Responsive Layout** mit klaren Breakpoints für 10"–13" Tablets.
- Große Touch-Ziele für Drag-and-drop und Statuswechsel.
- Offline-nahe Nutzung (lokales Caching, Sync bei Verbindung).
- Schnelle Erfassung direkt im Meeting (Quick-Add, Vorlagen, Sprach-Notizen optional).

---

## Technischer Vorschlag (LEAN, skalierbar)
- **Frontend**: Next.js + TypeScript + Tailwind + DnD-Kit.
- **Backend**: Next.js Route Handlers oder separates NestJS/Fastify API.
- **Datenbank**: PostgreSQL + Prisma.
- **Realtime**: WebSockets (z. B. Socket.IO oder Supabase Realtime).
- **Auth**: NextAuth / Auth.js mit Rollenmodell.
- **Hosting**: Vercel (Frontend) + Managed Postgres.

---

## MVP-Scope (8–12 Wochen)
1. Login, Rollen, Mandant/Projekt.
2. Ein Kanban-Board pro Projekt (voll nutzbar).
3. LPS-Basis: Lookahead + Weekly Plan + PPC.
4. Shopfloor-Basis: Daily Board + Maßnahmenliste.
5. Dashboard mit Kern-KPIs.

Nicht im MVP:
- Komplexe ERP-Integrationen.
- KI-Prognosen.
- Vollständige Offline-First-Synchronisationslogik.

---

## Roadmap nach MVP
- **Phase 2**: Erweiterte Reports, Ursachenkataloge, Vorlagenbibliothek.
- **Phase 3**: Mobile Capture (Foto, Sprache), Integrationen (Teams, Jira, ERP).
- **Phase 4**: KI-Unterstützung für Risiko-/Terminprognosen.

---

## Erfolgskennzahlen
- PPC-Verbesserung pro Projekt.
- Durchlaufzeit von Störungen bis zur Lösung.
- Anteil pünktlich abgeschlossener Maßnahmen.
- Zykluszeit im Kanban.
- Nutzeraktivität je Rolle/Woche.

---

## Vorschlag für den nächsten Schritt
1. Gemeinsamer 90-Minuten-Workshop zur Priorisierung (Must/Should/Could).
2. Klickbarer UI-Prototyp für Tablet + Desktop.
3. Technischer Spike für Board-Performance und Realtime-Events.
4. Start MVP-Umsetzung in 2-Wochen-Sprints.
