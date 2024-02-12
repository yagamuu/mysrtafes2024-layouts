import { computed } from 'vue'
import { RunDataActiveRun, RunDataActiveRunSurrounding, RunDataArray } from '../types/schemas/speedcontrol';
import { useReplicant } from 'nodecg-vue-composable';
import * as util from './util/format';

export function useRunData() {
  const runDataActiveRun = useReplicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');
  const runDataArray = useReplicant<RunDataArray>(
    'runDataArray',
    'nodecg-speedcontrol',
  );
  const runDataActiveRunSurrounding = useReplicant<RunDataActiveRunSurrounding>(
    'runDataActiveRunSurrounding',
    'nodecg-speedcontrol',
  );

  const players = computed(() => {
    if (!runDataActiveRun?.data) {
      return [];
    }

    return runDataActiveRun?.data?.teams.flatMap((team) => team.players);
  });

  const speedcontrolActiveRunIndex = computed(() => {
    const activeRunIndex = runDataArray?.data?.findIndex(
      (runData) => runData.id === runDataActiveRunSurrounding?.data?.current,
    );
    return activeRunIndex;
  });

  const upcomingRuns = computed(() => {
    const index = speedcontrolActiveRunIndex.value || 0;
    return runDataArray?.data?.slice(index, index + 3);
  });

  const upcomingStartIn = computed(() => {
    if (!upcomingRuns.value || !upcomingRuns.value[1]) {
      return [];
    }

    const startInArray = [0];
    const secondRunStartIn = (upcomingRuns.value[0].estimateS || 0)
      + (upcomingRuns.value[1].setupTimeS || 0);
    startInArray.push(secondRunStartIn);

    if (!upcomingRuns.value[2]) {
      return startInArray;
    }

    const thirdRunStartIn = secondRunStartIn
      + (upcomingRuns.value[1].estimateS || 0) + (upcomingRuns.value[2].setupTimeS || 0);
    startInArray.push(thirdRunStartIn);

    return startInArray;
  });

  const runTitle = computed(() => runDataActiveRun?.data?.game ?? '');

  const runCategory = computed(() => runDataActiveRun?.data?.category ?? '');

  const runSystem = computed(() => runDataActiveRun?.data?.system ?? '');

  const estimate = computed(() => {
    const estimateS = runDataActiveRun?.data?.estimateS ?? 0;
    return util.formatSeconds(estimateS);
  });

  return {
    runDataActiveRun,
    players,
    upcomingRuns,
    upcomingStartIn,
    runTitle,
    runCategory,
    runSystem,
    estimate,
  }
}