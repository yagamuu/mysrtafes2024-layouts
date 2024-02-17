<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';

const gamePositionMain = (): Box[] => {
  const x = 379;
  const y = 90;
  const width = 973.328125;
  const height = 730;
  return [[x, x + width, y, y + height]];
};

const gamePositionSub = (): Box[] => {
  const x = 1368;
  const y = 432;
  const width = 512;
  const height = 388;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...gamePositionMain(), ...gamePositionSub()]));

// Set the title of this page.
useHead({ title: 'SingleDS' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="cloud"/>
    <div class="logo"/>
    <div class="video_box"></div>
    <div class="kaisetsu_box"></div>
    <div class="information_box">
      <TimerAndEstimate />
      <InfoBox />
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/common.css');
  @import url('../css/run_1_ds.css');
</style>
