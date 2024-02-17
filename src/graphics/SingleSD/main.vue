<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';

const gamePosition = (): Box[] => {
  const x = 582;
  const y = 27;
  const width = 1104;
  const height = 830;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath(gamePosition()));


// Set the title of this page.
useHead({ title: 'SingleSD' });
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
  @import url('../css/run_1.css');
</style>
