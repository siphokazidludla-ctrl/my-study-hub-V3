// src/data/pastPapers/index.ts
// Aggregates all module past papers and exposes helpers for the Past Papers Hub.

import type { ModuleId } from '../../types';
import type { PastPaper } from '../../types/pastPapers';
import { IKM_PAST_PAPERS } from './ikm';
import { OM_PAST_PAPERS } from './om';
import { MM_PAST_PAPERS } from './mm';

export const PAST_PAPERS: PastPaper[] = [
  ...IKM_PAST_PAPERS,
  ...OM_PAST_PAPERS,
  ...MM_PAST_PAPERS,
];

export function pastPapersFor(module: ModuleId): PastPaper[] {
  return PAST_PAPERS.filter((p) => p.module === module);
}

export function getPastPaper(id: string): PastPaper | undefined {
  return PAST_PAPERS.find((p) => p.id === id);
}

/**
 * Frequency intelligence: counts how often a recommended/linked theme appears
 * across a module's questions, so the Past Paper Intelligence page can rank
 * "most examined" topics from real papers rather than guesses.
 */
export function themeFrequency(module: ModuleId): { theme: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const paper of pastPapersFor(module)) {
    for (const q of paper.questions) {
      const themes = [...(q.theoryIds ?? []), ...(q.recommendedTheories ?? [])];
      for (const t of themes) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([theme, count]) => ({ theme, count }))
    .sort((a, b) => b.count - a.count);
}

export { IKM_PAST_PAPERS, OM_PAST_PAPERS, MM_PAST_PAPERS };
