<script setup lang="ts">
import { useSpotifyPlayingTrack } from '@mysrtafes2024-layouts/composable';

const { trackName, artists } = useSpotifyPlayingTrack();
</script>

<template>
  <div class="music">
    <span class="icon"></span>
    {{ trackName }} - {{ artists }}
  </div>
</template>
