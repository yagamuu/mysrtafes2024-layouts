<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useTimer, useCustomData } from '@mysrtafes2024-layouts/composable';

const { estimate, estimateS } = useRunData();
const { isChallenge, challengeTime } = useCustomData();

const { time, runState, timer } = useTimer();

const timerStateClass = computed(() => {
  /*
  if (runState.value === 'paused') {
    return 'pause';
  }
  if (runState.value === 'forfeit') {
    return 'forfeit';
  }
  */
  if (runState.value === 'finished') {
    return 'stop_yellow';
  }
  return '';
});

const timerText = computed(() => {
  if (!isChallenge.value || !timer?.data) {
    return time.value;
  }
  return challengeTime.value;
});

</script>

<template>
  <div class="time">
    <div :class="[timerStateClass, 'now']">
      {{ timerText }}
    </div>
    <div class="will">予定タイム<span>{{ estimate }}</span></div>
  </div>
</template>
