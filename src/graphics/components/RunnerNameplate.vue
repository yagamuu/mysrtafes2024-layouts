<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useDisplaySound, useTimer } from '@mysrtafes2024-layouts/composable';
import * as util from '@mysrtafes2024-layouts/composable/util/format';

interface Props {
  index: number;
  innerClass?: string;
}

const props = defineProps<Props>();

const { runDataActiveRun } = useRunData();
const { displaySound } = useDisplaySound();
const { timer } = useTimer();

const name = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  return runDataActiveRun?.data.teams[props.index].players[0].name;
});

const finishTime = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];
  if (finish.state === 'completed' || finish.state === 'forfeit') {
    return util.formatSeconds(Math.trunc(finish.milliseconds / 1000));
  }
  return '';
});

const isActive = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return false;
  }
  return runDataActiveRun?.data.teams[props.index].players[0].id
    === displaySound?.data?.playerId;
});

const finishTimeClass = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];

  if (finish.state === 'completed') {
    return 'stop_blown';
  }

  return '';
});

</script>

<template>
  <div>
    <div class="player">
      {{ name }}
      <span class="speaker" v-if="isActive"/>
    </div>
    <div :class="['player_time', finishTimeClass]" v-if="finishTime">
      <span class="flag"/>
      {{ finishTime }}
    </div>
  </div>
</template>
