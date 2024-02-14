"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
replicants_1.runDataActiveRunReplicant.on('change', (newVal, oldVal) => {
    if ((newVal === null || newVal === void 0 ? void 0 : newVal.teams) && (oldVal === null || oldVal === void 0 ? void 0 : oldVal.id) !== newVal.id) {
        (0, nodecg_1.get)().sendMessageToBundle('reset-history', 'nodecg-timekeeper');
        (0, nodecg_1.get)().sendMessageToBundle('edit-time', 'nodecg-timekeeper', newVal.estimate);
    }
});
