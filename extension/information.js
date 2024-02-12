"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const nodecg_1 = require("./util/nodecg");
const replicants_1 = require("./util/replicants");
const createInformation = (text) => {
    if (!replicants_1.informationArrayReplicant.value) {
        return;
    }
    replicants_1.informationArrayReplicant.value.push({
        id: (0, uuid_1.v4)(),
        text,
    });
    (0, nodecg_1.get)().log.info('Add information');
};
const updateInformation = (information) => {
    if (!replicants_1.informationArrayReplicant.value) {
        return;
    }
    const informationIndex = replicants_1.informationArrayReplicant.value.findIndex((informationRep) => informationRep.id === information.id);
    if (informationIndex < -1) {
        return;
    }
    replicants_1.informationArrayReplicant.value[informationIndex] = information;
    (0, nodecg_1.get)().log.info('Update information');
};
const deleteInformation = (id) => {
    if (!replicants_1.informationArrayReplicant.value) {
        return;
    }
    replicants_1.informationArrayReplicant.value = replicants_1.informationArrayReplicant.value.filter((information) => information.id !== id);
    (0, nodecg_1.get)().log.info('Delete information');
};
(0, nodecg_1.get)().listenFor('createInformation', (data, ack) => {
    createInformation(data.text);
    if (ack && !ack.handled) {
        ack(null);
    }
});
(0, nodecg_1.get)().listenFor('updateInformation', (data, ack) => {
    updateInformation(data);
    if (ack && !ack.handled) {
        ack(null);
    }
});
(0, nodecg_1.get)().listenFor('deleteInformation', (data, ack) => {
    deleteInformation(data.id);
    if (ack && !ack.handled) {
        ack(null);
    }
});
