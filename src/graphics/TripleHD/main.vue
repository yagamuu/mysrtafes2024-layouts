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
  const x = 1123;
  const y = 39;
  const width = 762.03125;
  const height = 426;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 349;
  const y = 527;
  const width = 762.03125;
  const height = 426;
  return [[x, x + width, y, y + height]];
};

const player3GamePosition = (): Box[] => {
  const x = 1123;
  const y = 527;
  const width = 762.03125;
  const height = 426;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition(), ...player3GamePosition()]));

// Set the title of this page.
useHead({ title: 'TripleHD' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="cloud"/>
    <div class="logo"/>
    <div class="kaisetsu_box"/>
    <div class="movie">
      <RunnerNameplate class="movie_footer" :index="0"/>
    </div>
    <div class="movie2">
      <RunnerNameplate class="movie_footer" :index="1"/>
    </div>
    <div class="movie3">
      <RunnerNameplate class="movie_footer" :index="2"/>
    </div>
    <div class="information_box">
      <InfoBox />
      <TimerAndEstimate />
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/run_3.css');
</style>
