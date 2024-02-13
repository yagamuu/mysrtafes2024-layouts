<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useTimer, useTimekeeping } from '@mysrtafes2024-layouts/composable';

const { estimate, isChallenge } = useRunData();

const { time, runState } = useTimer();

const { time: challengeTime, status, hasHistory, latestHistorytime } = useTimekeeping();

const timerStateClass = computed(() => {
  const state = isChallenge.value ? status : runState;
  /*
  if (runState.value === 'paused') {
    return 'pause';
  }
  if (runState.value === 'forfeit') {
    return 'forfeit';
  }
  */
  if (state.value === 'finished' && (!isChallenge.value || hasHistory.value)) {
    return 'stop_yellow';
  }
  return '';
});

const timer = computed(() => {
  if (!isChallenge.value) {
    return time.value;
  }
  if (hasHistory.value) {
    return latestHistorytime.value;
  }
  return challengeTime.value;
});

</script>

<template>
  <div class="time">
    <div :class="[timerStateClass, 'now']">
      {{ timer }}
    </div>
    <div class="will">予定タイム<span>{{ estimate }}</span></div>
  </div>
</template>
