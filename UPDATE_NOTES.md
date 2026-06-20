# Update Notes — Study Hub Expansion (2026-06-19)

This update makes the **IKM, OM and MM** modules as comprehensive as the
**OB** module by giving every past-paper question a full worked model answer and
by solving the three shared case studies. **Everything is additive — nothing was
deleted.**

## What changed, in plain terms

1. **Every past-paper question now has a model answer.**
   - Information & Knowledge Management: 62 new answers (now 75/75).
   - Operations Management: 11 new answers (now 17/17).
   - Marketing Management: 28 new answers (now 30/30).
   - Total: **101 new model answers**, 122/122 questions covered.
   - Where to see them: open a subject → **Past Papers** → pick a question →
     expand **Model answer**.

2. **The three shared case studies are now fully solved** in the Case Lab
   (IKM digital-transformation, OM stockouts, MM brand-repositioning), each with
   a topic classification, 10 guided solution steps, an exam model paragraph and
   critical-judgement points.

3. **The dashboard now shows a study-notes panel** ("Worked-solution coverage")
   summarising coverage and explaining how to use a model answer to revise.

## How the model answers are written
- Structure: Introduction → themed body paragraphs (with bold sub-headings) →
  Conclusion, matching the existing examples in the app.
- Referencing: in-text Harvard citations drawn only from each module's
  established 2020+ sources (e.g. Laudon and Laudon, 2023; Dalkir, 2022;
  Saffady, 2021; Heizer, Render and Munson, 2020; Slack, Jones and Burgess, 2022;
  Kotler and Armstrong, 2020; Hislop, Bosua and Helms, 2023; the relevant MANCOSA
  Module Guides, 2026).
- Grounding: each answer is built on that question's existing answer plan and
  marking logic, so it reinforces the guidance already in the app.

## Important note on OM calculation questions
Some OM questions (trend projection, weighted moving average / MAD, ABC analysis)
had **no source data table** in the original files. Their answers give the
**full method** with **clearly labelled illustrative numbers** and stated
assumptions. Use them to learn the technique, then plug in the actual figures
your exam provides. This is also flagged on the dashboard.

## Files added or edited (no deletions)
- `src/data/pastPapers/ikm.ts` — 62 `workedSolution` fields added.
- `src/data/pastPapers/om.ts` — 11 `workedSolution` fields added.
- `src/data/pastPapers/mm.ts` — 28 `workedSolution` fields added.
- `src/pages/CaseDetailPage.tsx` — 2 new guided case solutions added.
- `src/pages/HomePage.tsx` — new coverage/notes dashboard panel.
- `CHANGELOG.md` — detailed change log entry appended.
- `UPDATE_NOTES.md` — this file.

The 21 model answers that already existed and the entire OB module were left
untouched. The original clean-project archive
(`my-study-hub-clean-project-2026-06-18.zip`) is retained in the project root.

## Verified
- `npm run build` succeeds (TypeScript compile + Vite production build).
- Coverage check confirms 75/75 (IKM), 17/17 (OM), 30/30 (MM) model answers.

---

# Theory Depth Upgrade (2026-06-20)

The theory cards for IKM, OM and MM now match OB's depth. Before, every theory
showed the **same** generic worked example, South African example and
common-mistakes list. Now all **53 theories** have their own:

- a **bespoke worked example** showing the framework applied to a real situation,
- a **South African example** (POPIA, load-shedding, BBBEE, the rand, SADC
  expansion, local market diversity), and
- a **tailored common-mistakes list** of the specific errors students make with
  that framework.

That is ~159 new pieces of teaching content (53 each across IKM 18, OM 15,
MM 20). You see them on every concept/theory detail page under "Examples" and
"Common mistakes".

This was done additively: the original theory data and the `make()` factory were
left intact; a `THEORY_OVERRIDES` map is merged on top, so nothing was deleted
and the generic text survives only as a fallback. Verified again with
`npm run build`.

## What still differs from OB (optional, not yet done)
OB also has a few extra per-theory fields the shared theory type does not include
(named theorists, assumptions, use-when/avoid-when, a model paragraph template,
recommendations). The shared modules cover the same teaching ground through their
existing fields plus the new bespoke examples; adding those extra OB-only fields
would require extending the shared `Theory` type and is available on request.
