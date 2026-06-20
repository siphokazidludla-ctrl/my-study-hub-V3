# My Study Hub Index

This app is a study and exam-preparation dashboard for the MANCOSA PGDip Business Management modules:

- OB / ORB801: Organisational Behaviour
- IKM: Information and Knowledge Management
- OM: Operations Management
- MM: Marketing Management

The goal is to help a student revise module-guide content, connect theories to case facts, practise past-paper style answers, and think like a business manager rather than memorising isolated definitions.

## How to Open the App

If the app is deployed online, open the live website link and start from the dashboard.

If running locally:

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal, usually:

```text
http://127.0.0.1:5173/
```

If that port is busy, Vite may use another port such as `5174`.

## Important Sharing Note

A `127.0.0.1` or `localhost` link only works on the computer running the app. A classmate cannot open your local link from her own device.

To share for review, use one of these options:

- Best option: deploy the app to Vercel or Netlify and send the live URL.
- Code review option: send the GitHub branch/repository link so she can inspect the files.
- Local review option: send the clean project zip and ask her to run `npm install` and `npm run dev`.

## Suggested Review Path

For a classmate checking accuracy and usability, use this route:

1. Open the home dashboard.
2. Open each module: OB, IKM, OM, and MM.
3. For each module, check:
   - Units
   - Theories
   - Past papers
   - Exam builder
   - Paragraph bank
   - Checklist
4. For OB specifically, check:
   - `/ob`
   - `/ob/units`
   - `/ob/theories`
   - `/ob/past-papers`
   - `/ob/past-papers/lewin-change-aegon`
   - `/ob/paragraph-bank`
   - `/ob/command-words`
   - `/ob/references`

## How the App Is Organised

The app uses React, Vite, TypeScript, Tailwind CSS, and React Router.

Main entry files:

- `src/main.tsx`: starts the React app.
- `src/App.tsx`: defines the route system.
- `src/components/Layout.tsx`: shared app layout and navigation.
- `src/pages/HomePage.tsx`: main dashboard.

Shared module pages:

- `src/pages/ModuleHomePage.tsx`
- `src/pages/UnitsPage.tsx`
- `src/pages/UnitDetailPage.tsx`
- `src/pages/TheoriesPage.tsx`
- `src/pages/TheoryDetailPage.tsx`
- `src/pages/PastPapersPage.tsx`
- `src/pages/PastPaperDetailPage.tsx`
- `src/pages/ExamBuilderPage.tsx`
- `src/pages/ParagraphBankPage.tsx`
- `src/pages/ChecklistPage.tsx`

OB-specific pages:

- `src/ob/pages/HomePage.tsx`
- `src/ob/pages/UnitsPage.tsx`
- `src/ob/pages/TheoriesPage.tsx`
- `src/ob/pages/PastPapersPage.tsx`
- `src/ob/pages/PastPaperDetailPage.tsx`
- `src/ob/pages/ParagraphBankPage.tsx`
- `src/ob/pages/ExamBuilderPage.tsx`
- `src/ob/pages/CommandWordsPage.tsx`
- `src/ob/pages/ReferencesPage.tsx`

## How the Data Is Arranged

Shared module registry:

- `src/data/index.ts`

This defines the module list and helper functions for IKM, OM, and MM.

Unit data:

- `src/data/ikmUnits.ts`
- `src/data/omUnits.ts`
- `src/data/mmUnits.ts`

Theory data:

- `src/data/theorie.ts`

This file contains theory cards for IKM, OM, and MM. Each theory has:

- `id`
- `module`
- `name`
- `category`
- `unitIds`
- `definition`
- `plain`
- `purpose`
- `components`
- `advantages`
- `limitations`
- `examTriggers`
- `relatedTheoryIds`
- `refs`

Past-paper data:

- `src/data/pastPapers/ikm.ts`
- `src/data/pastPapers/om.ts`
- `src/data/pastPapers/mm.ts`
- `src/data/pastPapers/index.ts`

OM-specific worked examples and formulas:

- `src/data/modules/om/formulas.ts`
- `src/data/modules/om/cases.ts`
- `src/data/modules/om/workedExamples.ts`

OB data:

- `src/ob/data/index.ts`
- `src/ob/data/workedSolutions.ts`

OB uses a richer separate data model because the OB module has detailed theory cards, topic hubs, case clues, paragraph templates, and worked model answers.

## Source and Accuracy Notes

The app content is based on module guides, prescribed or recommended textbooks, uploaded past-paper material, and study-support notes.

Some entries are marked with source-status language such as:

- Module guide aligned
- Requires verification
- Inferred
- Source status: requires verification

These labels are important. They show where the content should be checked against official MANCOSA material before being used in an exam answer.

## What to Check for Accuracy

When reviewing content, check:

- Are module unit titles aligned with the module guide?
- Do theory names match the prescribed material?
- Are definitions accurate and not over-simplified?
- Are examples suitable for postgraduate business management?
- Are South African examples relevant and not forced?
- Are citations consistent with MANCOSA Harvard style?
- Are any claims unsupported or too broad?
- Are past-paper prompts and worked answers faithful to the uploaded papers?
- Are command-word structures correct for postgraduate exam expectations?

## What to Check for Usability

When reviewing usability, check:

- Can you find the right module quickly?
- Does navigation keep you inside the selected module?
- Are unit pages easy to scan?
- Are theory cards clear enough to use during revision?
- Are past-paper pages helpful for exam preparation?
- Does the exam builder produce a useful answer scaffold?
- Does the OB landing page send you to the right pages without becoming too long?
- Are mobile and desktop layouts readable?
- Are buttons and links obvious?

## Known Limitations

- Localhost links cannot be shared externally.
- Some past-paper PDFs may require OCR before deeper verification because text extraction can return only page numbers or blank text.
- Some IKM, OM, and MM examples are still broad study examples rather than fully bespoke examples for every theory.
- OB has the strongest custom theory and worked-solution content so far.

## Recommended Next Improvements

1. Deploy the app to Vercel or Netlify for classmate review.
2. OCR the scanned past-paper PDFs, then verify every past-paper prompt and worked answer.
3. Add more theory-specific South African examples for IKM, OM, and MM.
4. Add a reviewer feedback form or checklist page inside the app.
5. Add source-status filters so the student can see which cards are fully verified and which need checking.

