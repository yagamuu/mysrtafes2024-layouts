import { RunDataActiveRun } from '@mysrtafes2024-layouts/types/schemas/speedcontrol/RunData';
import { get as nodecg } from './util/nodecg';
import { runDataActiveRunReplicant } from './util/replicants';

runDataActiveRunReplicant.on('change', (newVal: RunDataActiveRun, oldVal: RunDataActiveRun) => {
  if (newVal?.teams && oldVal?.id !== newVal.id) {
    nodecg().sendMessageToBundle('reset-history', 'nodecg-timekeeper');

    nodecg().sendMessageToBundle('edit-time', 'nodecg-timekeeper', newVal.estimate);
  }
});
