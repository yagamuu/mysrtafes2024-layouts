<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';

const gamePosition = (): Box[] => {
  const x = 0;
  const y = 265;
  const width = 1920;
  const height = 546;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath(gamePosition()));

// Set the title of this page.
useHead({ title: 'Unrailed' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="cloud"/>
    <div class="information_box_header">
      <InfoBox />
    </div>
    <div class="information_box">
      <TimerAndEstimate />
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/run_unraild.css');
</style>
