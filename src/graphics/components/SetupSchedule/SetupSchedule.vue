<script setup lang="ts">
import { useRunData } from '@mysrtafes2024-layouts/composable';
import UpnextSchedule from './UpnextSchedule.vue';
import OndeckSchedule from './OndeckSchedule.vue';

const { upnextRun, ondeckRuns, upcomingStartIn } = useRunData();

</script>

<template>
  <UpnextSchedule :run-data="upnextRun"/>
  <OndeckSchedule
    v-for="(run, index) in ondeckRuns"
    :key="run.id"
    :class="`setup_box_${index + 2}`"
    :run-data="run"
    :upcoming-start-in-seconds="upcomingStartIn[index]"/>
</template>
