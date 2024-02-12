"use strict";
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSoonReplicant = exports.informationArrayReplicant = exports.runDataActiveRunReplicant = exports.displaySoundReplicant = void 0;
const nodecg_1 = require("./nodecg");
/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
exports.displaySoundReplicant = (0, nodecg_1.get)().Replicant('displaySound', {
    defaultValue: {
        playerId: '',
    },
});
exports.runDataActiveRunReplicant = (0, nodecg_1.get)().Replicant('runDataActiveRun', 'nodecg-speedcontrol');
exports.informationArrayReplicant = (0, nodecg_1.get)().Replicant('setupInformationArray', {
    defaultValue: [],
});
exports.startSoonReplicant = (0, nodecg_1.get)().Replicant('startSoon', {
    defaultValue: false,
});
