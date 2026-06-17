// src/types/pastPapers.ts
// Past Paper Intelligence types for the MANCOSA study dashboard.
// These extend the existing data layer in src/types.ts (ModuleId etc.).
// Source hierarchy: Module Guide > Learning Outcomes > Prescribed Textbook >
// Past Papers > Cases > Peer-reviewed (2020+). Anything inferred is labelled.

import type { ModuleId } from '../types';

export type ExamSection = 'A' | 'B';

export interface PastPaperQuestion {
  /** Stable id, e.g. 'ikm-p1-q1' (used for routing /:moduleId/past-papers/:paperId#q1) */
  id: string;
  /** Display number exactly as printed, e.g. 'Question 1', 'Q1.2' */
  number: string;
  section: ExamSection;
  marks: number;
  /** Command words detected in the question (link to /command-words) */
  commandWords: string[];
  /** The question as asked, lightly paraphrased. Short verbatim quotes kept < 15 words. */
  prompt: string;
  /** Module guide unit ids this question maps to, e.g. ['ikm-3'] */
  unitIds: string[];
  /** Theory ids from src/data/theories.ts. Missing ones are flagged in recommendedTheories. */
  theoryIds: string[];
  /** Theories the syllabus expects that do NOT yet exist as theory pages (gap markers). */
  recommendedTheories?: string[];
  /** Ordered answer plan the student should follow under exam conditions. */
  answerPlan: string[];
  /** Full referenced model answer (markdown). Present for high-frequency questions only. */
  workedSolution?: string;
  /** How an examiner is likely to award the marks. */
  markingLogic: string[];
  commonMistakes: string[];
  /** One-line recommended paragraph structure for this command word. */
  paragraphStructure: string;
}

export interface PastPaper {
  /** e.g. 'ikm-paper-1' */
  id: string;
  module: ModuleId;
  /** The case/article title as printed on the paper. */
  title: string;
  /** Friendly label for cards, e.g. 'Business Intelligence (Section A + B)'. */
  paperRef: string;
  totalMarks: number;
  /** 2-3 sentence neutral summary of the case (no copied paragraphs). */
  caseSummary: string;
  keyFacts: string[];
  keyProblem: string;
  /** Whether the case is set in / relevant to a South African context. */
  saContext: boolean;
  /** Verification label per the brief. */
  sourceStatus: string;
  /** Examiner frequency signal for the dominant theme, where it can be inferred from repetition. */
  frequency: 'High' | 'Medium' | 'Low' | 'Requires verification';
  questions: PastPaperQuestion[];
}
