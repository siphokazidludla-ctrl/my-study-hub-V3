import { useParams } from 'react-router-dom';
import type { ModuleId } from '../types';
import { MODULES } from '../data';

export function useModule() {
  const { moduleId } = useParams();
  const id = (moduleId ?? 'ikm') as ModuleId;
  const module = MODULES.find((m) => m.id === id) ?? MODULES[0];
  return { id: module.id, module };
}

export function moduleLabel(id: ModuleId) {
  return id === 'ikm' ? 'Information and Knowledge Management' : id === 'om' ? 'Operations Management' : 'Marketing Management';
}
