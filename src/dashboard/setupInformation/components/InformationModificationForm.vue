<script setup lang="ts">
import { ref } from 'vue';
import { SetupInformation } from '@mysrtafes2024-layouts/types/schemas/setupInformation';

interface Props {
  information: SetupInformation
}

const props = defineProps<Props>();

const emit = defineEmits({
  closeCreationForm: null,
});

const rule = [
  (v: string): boolean | string => v.length <= 170 || '最大170字まで',
  (v: string): boolean | string => v.length > 0 || '1文字以上入力して下さい',
];

const text = ref<string | null>(props.information.text);

const updateInformation = () => {
  nodecg.sendMessage('updateInformation', { id: props.information.id, text: text.value });
  emit('closeCreationForm');
};
</script>

<template>
  <div>
    <div class="fit row  justify-end">
      <QBtn round size="sm" color="primary" icon="mdi-close" @click="$emit('closeCreationForm')" />
    </div>
    <div class="q-mt-md">
      <QInput
        v-model="text"
        filled
        autogrow
        :rules="rule"
        maxlength="170"
      />
    </div>
    <div class="q-mt-md">
      <QBtn
        color="primary"
        class="full-width"
        label="EDIT"
        @click="updateInformation"/>
    </div>
  </div>
</template>
