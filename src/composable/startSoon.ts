import { StartSoon } from '../types/schemas/startSoon';
import { useReplicant } from 'nodecg-vue-composable';

export function useStartSoon() {
  const startSoon = useReplicant<StartSoon>('startSoon', 'mysrtafes2024-layouts');

  return {
    startSoon
  }
}