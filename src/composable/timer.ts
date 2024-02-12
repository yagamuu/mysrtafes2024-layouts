import { computed } from 'vue'
import { Timer } from '../types/schemas/speedcontrol';
import { useReplicant } from 'nodecg-vue-composable';
import { useRunData } from './runData';
import * as util from './util/format';

const { runDataActiveRun } = useRunData();

export function useTimer() {
  const timer = useReplicant<Timer>(
    'timer',
    'nodecg-speedcontrol',
  );

  const time = computed(() => {
    if (!timer?.data) {
      return 0;
    }
    const { milliseconds } = timer.data;
    return util.formatSeconds(Math.trunc(milliseconds / 1000));
  });

  const runState = computed(() => {
    if (!timer?.data) {
      return "stopped";
    }

    if (runDataActiveRun?.data?.teams && runDataActiveRun?.data?.teams?.length === 1) { 
      const teamId = runDataActiveRun?.data.teams[0].id;
      const teamFinishTime = timer?.data?.teamFinishTimes[teamId];
      if (teamFinishTime && teamFinishTime.state === "forfeit") { 
        return "forfeit";
      }
    }

    return timer.data.state;
  });

  return {
    timer,
    time,
    runState,
  }
}