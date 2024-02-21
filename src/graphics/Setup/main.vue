<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { useStartSoon } from '@mysrtafes2024-layouts/composable';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import SetupSchedule from '../components/SetupSchedule/SetupSchedule.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';

// Set the title of this page.
useHead({ title: 'Setup' });

const { startSoon } = useStartSoon();

const startSoonClass = computed(() => {
  if (startSoon?.data) {
    return 'active';
  }
  return '';
});
</script>

<template>
  <BaseOverlay disable-background>
    <div :class="[startSoonClass, 'description_part']">
      <div class="description_part_alert">
        <img src="../images/common/speaker2.png" />まもなく開始します
      </div>
    </div>
    <div class="logo"/>
    <SetupSchedule/>
    <SpotifyTrack/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/setup.css');
</style>
