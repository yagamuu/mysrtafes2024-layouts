import { get as nodecg } from './util/nodecg';
import { startSoonReplicant, runDataActiveRunReplicant } from './util/replicants';

runDataActiveRunReplicant.on('change', () => {
  startSoonReplicant.value = false;
});

const changeStartSoon = (value: boolean): void => {
  startSoonReplicant.value = value;

  nodecg().log.info('Change Start Soon');
};

nodecg().listenFor('changeStartSoon', (data, ack) => {
  changeStartSoon(data.value);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg().listenFor('timerStart', 'nodecg-speedcontrol', (data, ack) => {
  changeStartSoon(false);

  if (ack && !ack.handled) {
    ack(null);
  }
});
