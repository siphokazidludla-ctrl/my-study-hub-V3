export { IKM_UNITS } from './ikmUnits';
export { OM_UNITS } from './omUnits';
export { MM_UNITS } from './mmUnits';
export { THEORIES, getTheory } from './theorie';
export { COMMAND_WORDS } from './commandWords';
export { CASES, EXAM_TOPICS } from './cases';
export { REFERENCES } from './references';

import type { ModuleId } from '../types';
import { IKM_UNITS } from './ikmUnits';
import { OM_UNITS } from './omUnits';
import { MM_UNITS } from './mmUnits';
import { THEORIES } from './theorie';

export const MODULES = [
  { id: 'ob' as ModuleId, code: 'OB', name: 'Organisational Behaviour', path: '/ob', description: 'Behaviour, teams, motivation, leadership, culture, change, conflict and exam tools.' },
  { id: 'ikm' as ModuleId, code: 'IKM', name: 'Information and Knowledge Management', path: '/ikm', description: 'Information systems, knowledge management, governance, ethics and AI-enabled business learning.' },
  { id: 'om' as ModuleId, code: 'OM', name: 'Operations Management', path: '/om', description: 'Operations strategy, quality, forecasting, process, capacity, supply chains, inventory, JIT and MRP.' },
  { id: 'mm' as ModuleId, code: 'MM', name: 'Marketing Management', path: '/mm', description: 'Marketing strategy, consumer behaviour, STP, marketing mix, branding, digital marketing and customer value.' },
];

export function unitsFor(module: ModuleId) {
  if (module === 'ikm') return IKM_UNITS;
  if (module === 'om') return OM_UNITS;
  if (module === 'ob') return [];
  return MM_UNITS;
}

export function theoriesFor(module: ModuleId) {
  if (module === 'ob') return [];
  return THEORIES.filter((t) => t.module === module);
}
