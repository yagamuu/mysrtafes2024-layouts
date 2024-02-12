<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRunData, useDisplaySound } from '@mysrtafes2024-layouts/composable';
import { useHead } from '@unhead/vue';

// Set the title of this page.
useHead({ title: 'Display Sound' });

const { players } = useRunData();
const { displaySound } = useDisplaySound();

const selected = ref(displaySound?.data?.playerId || 'null');

watchEffect(() => {
  selected.value = displaySound?.data?.playerId || '';
});

const changeDisplaySound = () => {
  if (!displaySound) return;

  displaySound.data = {
    playerId: selected.value,
  };
  displaySound.save();
};

</script>

<template>
  <div class="q-pa-md">
    <QRadio
      v-for="(player) in players"
      :label="player.name"
      :key="player.id"
      :val="player.id"
      v-model="selected"
      @update:model-value="changeDisplaySound" />
  </div>
</template>
