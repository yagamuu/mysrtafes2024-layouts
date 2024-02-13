<script setup lang="ts">
import { ref, computed } from 'vue';

const date = ref(new Date());
const nowDate = computed(() => {
  const year = date.value.getFullYear().toString();
  const month = (date.value.getMonth() + 1).toString();
  const day = date.value.getDate().toString();
  const hour = date.value.getHours().toString().padStart(2, '0');
  const minute = date.value.getMinutes().toString().padStart(2, '0');
  return `${year}/${month}/${day} ${hour}:${minute}`;
});
setInterval(() => {
  date.value = new Date();
}, 1000);
</script>

<template>
  <div class="footer">
    <div class="left">本イベントは、RTA in Japanのチャンネル貸出システムを利用した外部のRTAイベントです。</div>
    <div class="right"><div class="x_icon"></div>#不思議RTAフェス<span>{{ nowDate }}</span></div>
  </div>
</template>
