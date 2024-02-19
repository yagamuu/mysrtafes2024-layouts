<!-- eslint-disable max-len -->
<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';
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

/**
 * タイトル文字改行切り替え対応
 */
const titleClass = ref('');
const titleDom = ref<HTMLDivElement | null>(null);
const changedTitleClass = ref<Boolean>(false);

onMounted(() => {
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target !== titleDom.value || changedTitleClass.value) {
        return;
      }
      if (entry.contentRect.height > 180) {
        changedTitleClass.value = true;
        titleClass.value = '-isLong';
      }
    });
  });

  if (titleDom.value) {
    observer.observe(titleDom.value);
  }
});

watchEffect(() => {
  if (!props.runData?.game) {
    return;
  }
  titleClass.value = '';
  changedTitleClass.value = false;
});
</script>

<template>
  <div class="setup_box_1">
    <div class="title_box">
      <span class="title" :class="titleClass" ref="titleDom">
        {{ runData?.game }}
      </span>
        <span class="runner">
        {{ runData?.category }} / Runner : {{ runners }}
      </span>
    </div>
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
