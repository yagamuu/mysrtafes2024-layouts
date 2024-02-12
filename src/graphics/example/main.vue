<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref } from 'vue';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });

// Helper composable to make accessing/modifying replicants easier.
// For more information see https://github.com/Dan-Shields/nodecg-vue-composable

// Accessing normal types.
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </div>
</template>
