<!-- eslint-disable max-len -->
<script setup lang="ts">
import { useRunData } from '@mysrtafes2024-layouts/composable';

const { runTitle, runCategory, runSystem, runRelease } = useRunData();

</script>

<template>
  <div class="game_box">
    <div class="title">
      {{ runTitle }}
    </div>
    <span class="dashed_line"></span>
    <div class="game_detail">
      <div class="category">{{ runCategory }}</div>
      <div class="game_console">{{ runSystem }} - {{ runRelease }}</div>
    </div>
  </div>
</template>
