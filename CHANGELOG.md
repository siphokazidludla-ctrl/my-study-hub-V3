# Content Audit Fixes — my-study-hub (2026-06-18)

All changes are confined to `src/data/`. No components, routes, or types were
touched. Project type-checks clean (`tsc --noEmit`) and builds (`npm run build`).

## 1. Broken theory links: 50 -> 0
Units referenced 50 theory IDs that had no theory page. Unit pages were silently
dropping those links and several core frameworks were unreachable.

- **26 were ID mismatches** (the theory existed under a different ID). These were
  re-pointed to the canonical ID, e.g. `om-tqm` -> `om-quality`,
  `om-scm` -> `om-supply-chain`, `mm-segmentation` -> `mm-stp`,
  `mm-pestel` -> `mm-environment`, `ikm-seci` -> `ikm-tacit-explicit`.
- **13 genuinely-missing high-yield frameworks were authored** as full theory
  pages and the remaining references were aliased to them:
  - MM: BCG matrix, Ansoff matrix, Porter's Five Forces, Product Life Cycle,
    Competitive market positions, Market entry strategies, Marketing research & MIS.
  - IKM: CIA triad, Business Process Management, Balanced Scorecard,
    Knowledge management systems, KM strategy, IS strategy & competitive advantage.
- Theory count: 36 -> 49 (IKM 8->14, MM 13->20, OM 15 unchanged).

## 2. Reference rule (2020+) violation fixed
`Kotler and Keller (2016)` breached the "2020 onwards" rule. All usages were
migrated to the prescribed `Kotler and Armstrong (2020)` and the stale entry was
removed from `references.ts`.

## 3. Empty unit fixed
`ikm-8` (capstone) had no linked theories; it now links a representative set
(DIKW, KM cycle, KM strategy, IS strategy, governance, balanced scorecard,
learning organisation).

## 4. relatedTheoryIds repaired
5 dangling related-theory links fixed (`om-lean`->`om-jit`,
`om-layout`->`om-process-strategy`, `mm-positioning`->`mm-stp`).

## Verified
- Broken unit->theory links: 0 (was 50)
- Broken theory->unit links: 0
- Broken related-theory links: 0 (was 5)
- Past-paper theory links: 0 unresolved (79 references, already clean)
- `tsc --noEmit`: clean
- `npm run build`: success

---

# Worked-Solution & Case Expansion — my-study-hub (2026-06-19)

Goal: bring IKM, OM and MM up to the comprehensiveness of the OB module by giving
**every past-paper question a full model answer** and **solving the shared case
studies**. Additive only — nothing was deleted or removed. Project type-checks
clean (`tsc`) and builds (`npm run build`).

## 1. Worked model answers: 101 added (100% past-paper coverage)
Authored full, referenced model answers (`workedSolution`) for every past-paper
question that lacked one. Each answer is structured (Introduction, themed body
paragraphs with **bold** sub-headings, Conclusion), uses in-text Harvard
citations from the module's established 2020+ references, and is grounded in that
question's existing `answerPlan`/marking logic.

| Module | Questions | Had answers | Added | Now covered |
|--------|-----------|-------------|-------|-------------|
| IKM    | 75        | 13          | 62    | 75 / 75     |
| OM     | 17        | 6           | 11    | 17 / 17     |
| MM     | 30        | 2           | 28    | 30 / 30     |
| **Total** | **122** | **21**    | **101** | **122 / 122** |

Files touched: `src/data/pastPapers/ikm.ts`, `src/data/pastPapers/om.ts`,
`src/data/pastPapers/mm.ts`. Insertion was per-question (before each
`answerPlan`); the 21 pre-existing answers were left untouched.

Rendering: answers appear in the existing Past Paper detail page under the
expandable **Model answer** section (plain text, line breaks preserved).

## 2. Shared case studies solved: 3
Added full guided solutions (topic, question type, 10 solution steps, an exam
model paragraph, and critical-judgement points) for the two shared cases that
previously fell back to placeholder text, and confirmed the OM case already had
one:
- `ikm-digital-transformation` — KM cycle, SECI, information governance, change.
- `mm-brand-repositioning` — STP, value proposition, customer journey, IMC.
- `om-stockouts` — already solved (forecasting/inventory); retained as-is.

File touched: `src/pages/CaseDetailPage.tsx` (two new `CASE_GUIDES` entries).
No type changes, no deletions.

## 3. Dashboard study notes
Added a "Worked-solution coverage (latest update)" panel to the home dashboard
(`src/pages/HomePage.tsx`) summarising coverage per module, how to use a model
answer to study, and the note about OM calculation questions (see below).

## Method note — OM calculation questions
A few OM questions (trend projection, weighted moving average/MAD, ABC analysis)
had **no source data table** in the original past-paper files. Their model
answers therefore present the **full method** — formula, procedure, worked steps
— using **clearly labelled illustrative figures** with assumptions stated, so
students learn the technique and substitute the real exam figures. This is
flagged in-app on the dashboard.

## Verification
- `npm run build` succeeds (tsc + vite). 
- Coverage check: ikm 75/75, om 17/17, mm 30/30 `workedSolution` fields present.
- OB module files were not modified.

---

# Theory Depth Upgrade — my-study-hub (2026-06-20)

Brought IKM, OM and MM **theory cards** to OB-level depth. Previously every
shared theory displayed the same generic `example`, `saExample` and
`commonMistakes` (hard-coded in the `make()` factory). Now all 53 theories have
**bespoke, framework-specific** versions of these three student-facing fields.

- IKM: 18 theories upgraded.
- OM: 15 theories upgraded.
- MM: 20 theories upgraded.
- Total: **53 bespoke worked examples, 53 South African examples, and 53 tailored
  common-mistakes sets** (about 159 new pieces of teaching content).

Each example shows the framework applied to a realistic business situation; each
SA example localises it (POPIA, load-shedding, BBBEE, SADC expansion, the rand,
local market diversity); each common-mistakes set lists the specific errors
students make with that framework.

Implementation (additive, non-destructive): the theory array was renamed
`RAW_THEORIES`, a `THEORY_OVERRIDES` map was added, and `THEORIES` is now
`RAW_THEORIES` merged with its overrides. The `make()` factory and all original
tailored fields (definition, plain, purpose, components, advantages, limitations,
examTriggers, refs) are unchanged; the generic factory text remains only as a
fallback. Verified with `npm run build`.

---

# Unit Teaching Notes + Landing Cleanup — my-study-hub (2026-06-20)

## Unit notes across IKM, OM and MM (39 units)
Every unit page now opens with a plain-language "Unit notes (start here)" panel
so even a newcomer can understand the unit before reading outcomes. Each unit's
notes contain: an introduction, "Key ideas explained simply" (each key concept
explained with a worked example), a "How it fits together and links to theory"
section, and an "Outcome to content to theory" mapping table. Sources are listed
per unit (MANCOSA module guides and prescribed textbooks as primary; OpenStax /
other open references labelled as supplementary).

- IKM: 10 units
- OM: 12 units
- MM: 17 units
- Total: 39 units, each with full teaching notes (introduction + ~3 concept
  explanations with examples + application + a mapping table).

Implementation (additive): added UnitNotes / UnitConceptNote / UnitMapRow types
and an optional notes field on Unit (src/types.ts); added src/data/unitNotes.ts
holding the notes; merged them onto units in src/data/index.ts; and extended
src/pages/UnitDetailPage.tsx to render the notes and the mapping table. No unit,
theory hub, outcome or existing field was removed.

## Landing-page cleanup
The home page previously showed two "Subjects" panels (the left sidebar nav and a
right-hand card). Removed the duplicate card on the home page; subject navigation
remains in the sidebar (present on every page) and each module's description still
appears on its own module home page, so no content was lost. The "Quick exam hubs"
panel now spans full width with a pointer to the Subjects menu.

Verified with npm run build (tsc + vite).

---

# OB unit "start here" notes (2026-06-20)

OB unit pages previously had no introductory notes — they jumped straight to the
content list, outcomes and theory cards. (OB uses a separate data model and unit
page under `src/ob/`, so the earlier IKM/OM/MM unit-notes work did not reach it.)

All 12 OB units (u1–u12) now open with a plain-language "Unit notes (start here)"
panel — introduction, key ideas explained simply with examples, how it links to
theory, and an outcome → content → theory map table — matching the other modules.
Grounded in the ORB801 Module Guide (2025) and Jones, George & Hill (2013), with
OpenStax Principles of Management cited only as supplementary.

Additive only — no OB theory card, hub, unit field or theory link was changed or
deleted. New file: `src/ob/data/unitNotes.ts`. Edited: `src/ob/data/index.ts`
(optional `notes` field + merge) and `src/ob/pages/UnitDetailPage.tsx` (render).

Verified with npm run build (tsc + vite); all 12 keys confirmed in the bundle.

---

# Fix: empty concept cards (Concept not found) — all modules (2026-06-20)

Clicking any concept card (Concept Library → a card) opened a page reading
"MISSING CONCEPT — Concept not found." This affected IKM, OM and MM (reported
on OM).

Cause: a route-param name mismatch. The route is defined as
`concepts/:conceptId` (App.tsx) but `ConceptDetailPage` read `theoryId` from
useParams(), so the lookup id was always undefined and getTheory() returned
nothing — even though the underlying theory data was fully present (verified:
THEORIES has 53 entries; getTheory('om-quality') resolves correctly).

Fix: `src/pages/ConceptDetailPage.tsx` now reads `conceptId` from useParams()
(one-line change). Concept detail pages now render fully — definition, purpose,
exam triggers, components, common mistakes, worked + South African examples,
related concepts and references. Audited all other detail pages (units,
theories, cases, past-papers, formulas) — their params already matched; this was
the only mismatch.

Verified with npm run build (tsc + vite) and by loading the OM and IKM concept
detail pages in a headless browser (now populated, no "not found").
