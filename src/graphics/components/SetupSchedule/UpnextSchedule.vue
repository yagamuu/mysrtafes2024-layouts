<!-- eslint-disable max-len -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { RunData } from '@mysrtafes2024-layouts/types/schemas/speedcontrol';
import { useSetupInformation } from '@mysrtafes2024-layouts/composable';

const props = defineProps({
  runData: {
    type: Object as () => RunData,
    default: undefined,
  },
});

const { setupInformationArray } = useSetupInformation();

const runners = computed(() => {
  if (!props.runData) {
    return '';
  }
  return props.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
});

const displaySetupInformation = ref(0);

setInterval(() => {
  const length = setupInformationArray?.data?.length || 0;
  displaySetupInformation.value = (displaySetupInformation.value + 1) % length;
}, 20000);

</script>

<template>
  <div class="setup_box_1">
    <span class="title">
      {{ runData?.game }}
    </span>
    <span class="runner">
      {{ runData?.category }} / Runner : {{ runners }}
    </span>
    <span class="detail">
      <span
        v-for="(information, index) in setupInformationArray?.data"
        :key="information.id"
        :class="[index === displaySetupInformation ? 'active' : '']">
        {{ information.text }}
      </span>
    </span>
  </div>
</template>
