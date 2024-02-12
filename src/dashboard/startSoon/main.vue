<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref, watchEffect } from 'vue';
import { useStartSoon } from '@mysrtafes2024-layouts/composable';

// Set the title of this page.
useHead({ title: 'Start Soon' });

const { startSoon } = useStartSoon();

const selected = ref(startSoon?.data);

watchEffect(() => {
  selected.value = startSoon?.data;
});

const toggleSwitch = () => {
  if (!startSoon) return;

  startSoon.data = selected.value;
  startSoon.save();
};

</script>

<template>
  <div class="q-pa-md">
    <QToggle
      v-model="selected"
      label="開始前通知ON"
      @update:model-value="toggleSwitch"/>
  </div>
</template>
