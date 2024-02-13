<script setup lang="ts">
import { computed } from 'vue';
import TheFooter from './TheFooter.vue';

interface Props {
  clipPath?: string,
  backgroundUrl?: string,
}

const props = defineProps<Props>();

const style = computed(() => {
  const clip = props.clipPath ? `polygon(${props.clipPath})` : '';

  const backgroundImage = props.backgroundUrl ? `url(${props.backgroundUrl})` : undefined;

  return {
    clipPath: clip,
    backgroundImage,
  };
});

</script>

<template>
  <div>
    <div id="container" :style="style">
      <div class="logo"/>
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
