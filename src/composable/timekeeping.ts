import { computed } from 'vue'
import { Timekeeping } from '../types/schemas/nodecgTimekeeper';
import { useReplicant } from 'nodecg-vue-composable';

export function useTimekeeping() {
  const timekeeping = useReplicant<Timekeeping>(
    'timekeeping',
    'nodecg-timekeeper',
  );

  const time = computed(() => {
    if (!timekeeping?.data) {
      return '00:00';
    }
    if (timekeeping.data.time.rawInSecond <= 0) {
      return '00:00';
    }
    return timekeeping.data.time.display;
  });

  const status = computed(() => timekeeping?.data?.status || 'finished');

  return {
    timekeeping,
    time,
    status
  }
}