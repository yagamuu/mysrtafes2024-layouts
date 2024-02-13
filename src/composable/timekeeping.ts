import { computed } from 'vue'
import { Timekeeping, History } from '../types/schemas/nodecgTimekeeper';
import { useReplicant } from 'nodecg-vue-composable';
import * as util from './util/format';

export function useTimekeeping() {
  const timekeeping = useReplicant<Timekeeping>(
    'timekeeping',
    'nodecg-timekeeper',
  );

  const history = useReplicant<History>(
    'history',
    'nodecg-timekeeper',
  );

  const time = computed(() => {
    if (!timekeeping?.data) {
      return '00:00';
    }
    if (timekeeping.data.time.rawInSecond <= 0) {
      return '00:00';
    }
    return util.formatSeconds(timekeeping.data.time.rawInSecond);
  });

  const status = computed(() => timekeeping?.data?.status || 'finished');

  const hasHistory = computed(() => history?.data && history.data.length > 0 ? true : false);

  const latestHistorytime = computed(() => {
    if (!history?.data?.[0]) {
      return '00:00';
    }
    if (history?.data?.[0].time.rawInSecond <= 0) {
      return '00:00';
    }
    return util.formatSeconds(history?.data?.[0].time.rawInSecond);
  });

  return {
    timekeeping,
    time,
    status,
    history,
    hasHistory,
    latestHistorytime,
  }
}