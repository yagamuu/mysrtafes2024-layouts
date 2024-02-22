import { computed } from 'vue'
import { useRunData } from './runData';
import { useTimer } from './timer';
import * as util from './util/format';

const { runDataActiveRun, estimateS } = useRunData();
const { timer } = useTimer();

export function useCustomData() {
  const isChallenge = computed(() => runDataActiveRun?.data?.customData.isChallenge === '挑戦枠' ? true : false);

  const challengeTime = computed(() => {
    const milliseconds = timer?.data?.milliseconds ?? 0;
    const timeSeconds = estimateS.value - Math.floor(milliseconds / 1000);
    return util.formatSeconds(timeSeconds > 0 ? timeSeconds : 0);
  });

  return {
    isChallenge,
    challengeTime,
  }
}