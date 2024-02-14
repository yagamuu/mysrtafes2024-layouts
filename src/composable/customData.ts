import { computed } from 'vue'
import { RunDataActiveRun } from '../types/schemas/speedcontrol';
import { useReplicant } from 'nodecg-vue-composable';

export function useCustomData() {
  const runDataActiveRun = useReplicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');

  const isChallenge = computed(() => runDataActiveRun?.data?.customData.isChallenge === '挑戦枠' ? true : false);

  return {
    isChallenge,
  }
}