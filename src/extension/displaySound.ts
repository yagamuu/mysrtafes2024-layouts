import { RunDataActiveRun } from '@mysrtafes2024-layouts/types/schemas/speedcontrol/RunData';
import { get as nodecg } from './util/nodecg';
import { displaySoundReplicant, runDataActiveRunReplicant } from './util/replicants';

if (runDataActiveRunReplicant.value?.teams) {
  displaySoundReplicant.value = {
    playerId: runDataActiveRunReplicant.value.teams[0].players[0].id,
  };
}

runDataActiveRunReplicant.on('change', (newVal: RunDataActiveRun, oldVal: RunDataActiveRun) => {
  if (newVal?.teams && oldVal?.id !== newVal.id) {
    displaySoundReplicant.value.playerId = newVal.teams[0].players[0].id;
  }
  nodecg().log.info('Change Display Sound');
});

const changeDisplaySound = (playerId: string): void => {
  if (!displaySoundReplicant.value) { return; }

  displaySoundReplicant.value.playerId = playerId;

  nodecg().log.info('Change Display Sound');
};

nodecg().listenFor('changeDisplaySound', (data, ack) => {
  changeDisplaySound(data.id);

  if (ack && !ack.handled) {
    ack(null);
  }
});
