"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
replicants_1.runDataActiveRunReplicant.on('change', () => {
    replicants_1.startSoonReplicant.value = false;
});
const changeStartSoon = (value) => {
    replicants_1.startSoonReplicant.value = value;
    (0, nodecg_1.get)().log.info('Change Start Soon');
};
(0, nodecg_1.get)().listenFor('changeStartSoon', (data, ack) => {
    changeStartSoon(data.value);
    if (ack && !ack.handled) {
        ack(null);
    }
});
(0, nodecg_1.get)().listenFor('timerStart', 'nodecg-speedcontrol', (data, ack) => {
    changeStartSoon(false);
    if (ack && !ack.handled) {
        ack(null);
    }
});
