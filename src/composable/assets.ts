import { useAssetReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';

export function useAssets() {
  const layoutBg = useAssetReplicant('layoutBg', 'mysrtafes2024-layouts');

  const layoutBgUrl = computed(() => layoutBg?.value[0]?.url ?? '');

  return {
    layoutBg,
    layoutBgUrl
  }
}