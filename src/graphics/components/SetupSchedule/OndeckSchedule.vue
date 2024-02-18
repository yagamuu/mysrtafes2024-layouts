<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import type { RunData } from '@mysrtafes2024-layouts/types/schemas/speedcontrol';

const props = defineProps({
  runData: {
    type: Object as () => RunData,
    default: undefined,
  },
  upcomingStartInSeconds: {
    type: Number,
    default: 0,
  },
});

const runners = computed(() => {
  if (!props.runData) {
    return '';
  }
  return props.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
});

const hours = computed(() => Math.floor(props.upcomingStartInSeconds / 3600));
const minutes = computed(() => (Math.floor(props.upcomingStartInSeconds / 60) % 60).toString().padStart(2, '0'));

</script>

<template>
  <div>
    <div class="next_time_box">
      <p class="next_time">
        <template v-if="hours > 0">
         <span>{{ hours }}</span>時間
        </template>
        <span>{{ minutes }}</span>分後
      </p>
    </div>
    <div class="next_title">
      <span class="title">
        {{ runData?.game }}
      </span>
      <span class="runner">
        {{ runData?.category }} / Runner : {{ runners }}
      </span>
    </div>
  </div>
</template>
