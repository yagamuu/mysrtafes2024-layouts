"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
if ((_a = replicants_1.runDataActiveRunReplicant.value) === null || _a === void 0 ? void 0 : _a.teams) {
    replicants_1.displaySoundReplicant.value = {
        playerId: replicants_1.runDataActiveRunReplicant.value.teams[0].players[0].id,
    };
}
replicants_1.runDataActiveRunReplicant.on('change', (newVal, oldVal) => {
    if ((newVal === null || newVal === void 0 ? void 0 : newVal.teams) && (oldVal === null || oldVal === void 0 ? void 0 : oldVal.id) !== newVal.id) {
        replicants_1.displaySoundReplicant.value.playerId = newVal.teams[0].players[0].id;
    }
    (0, nodecg_1.get)().log.info('Change Display Sound');
});
const changeDisplaySound = (playerId) => {
    if (!replicants_1.displaySoundReplicant.value) {
        return;
    }
    replicants_1.displaySoundReplicant.value.playerId = playerId;
    (0, nodecg_1.get)().log.info('Change Display Sound');
};
(0, nodecg_1.get)().listenFor('changeDisplaySound', (data, ack) => {
    changeDisplaySound(data.id);
    if (ack && !ack.handled) {
        ack(null);
    }
});
