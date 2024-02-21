<script setup lang="ts">
import { computed } from 'vue';
import { useAssets } from '@mysrtafes2024-layouts/composable';
import TheFooter from './TheFooter.vue';

interface Props {
  clipPath?: string,
  backgroundUrl?: string,
  disableBackground?: boolean,
}

const props = defineProps<Props>();

const { layoutBgUrl } = useAssets();

const style = computed(() => {
  const clip = props.clipPath ? `polygon(${props.clipPath})` : '';

  const url = props.backgroundUrl ? props.backgroundUrl : layoutBgUrl.value;

  const backgroundImage = props.disableBackground ? `` : `url(${url})`;

  return {
    clipPath: clip,
    backgroundImage,
  };
});

</script>

<template>
  <div>
    <div id="container" :style="style">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
