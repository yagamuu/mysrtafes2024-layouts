<!-- eslint-disable max-len -->
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
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
let observer: ResizeObserver | null = null;
// クラス変更フラグ
let isChangingClass = false;

// props.runData の変化を監視
watch(() => props.runData, (newVal, oldVal) => {
  const titleElement = document.querySelector('.title');
  titleClass.value = '';

  if (titleElement && newVal !== oldVal) {
    if (observer) observer.disconnect(); // 前回の監視を停止

    // 新たに監視を開始
    observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleElement) {
          if (isChangingClass) {
            isChangingClass = false;
          } else if (entry.contentRect.height > 180) {
            isChangingClass = true;
            titleClass.value = '-isLong';
          } else {
            titleClass.value = '';
          }
        }
      });
    });

    observer.observe(titleElement);
  }
});
</script>

<template>
  <div class="setup_box_1">
    <div class="title_box">
      <span class="title" :class="titleClass">
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
