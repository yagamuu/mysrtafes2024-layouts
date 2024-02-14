<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import RunnerNameplate from '../components/RunnerNameplate.vue';

const player1GamePosition = (): Box[] => {
  const x = 27;
  const y = 243;
  const width = 925;
  const height = 520;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 968;
  const y = 243;
  const width = 925;
  const height = 520;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition()]));

// Set the title of this page.
useHead({ title: 'DoubleHD' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="cloud"/>
    <div class="movie">
      <RunnerNameplate class="movie_footer" :index="0"/>
    </div>
    <div class="movie2">
      <RunnerNameplate class="movie_footer" :index="1"/>
    </div>
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
  @import url('../css/run_2.css');
</style>
