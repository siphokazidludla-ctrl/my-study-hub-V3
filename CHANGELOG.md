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
