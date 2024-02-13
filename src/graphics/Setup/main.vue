<script setup lang="ts">
import { useHead } from '@unhead/vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import SetupSchedule from '../components/SetupSchedule/SetupSchedule.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';

// Set the title of this page.
useHead({ title: 'Setup' });
</script>

<template>
  <BaseOverlay>
    <SetupSchedule/>
    <SpotifyTrack/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/setup.css');
</style>
