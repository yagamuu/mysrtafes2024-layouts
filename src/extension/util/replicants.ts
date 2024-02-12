/* eslint-disable max-len */

import type { DisplaySound, SetupInformationArray, StartSoon } from '@mysrtafes2024-layouts/types/schemas';
import type { RunDataActiveRun } from '@mysrtafes2024-layouts/types/schemas/speedcontrol';
import type NodeCG from '@nodecg/types';
import { get as nodecg } from './nodecg';

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
export const displaySoundReplicant = nodecg().Replicant<DisplaySound>('displaySound', {
  defaultValue: {
    playerId: '',
  },
}) as unknown as NodeCG.ServerReplicantWithSchemaDefault<DisplaySound>;

export const runDataActiveRunReplicant = nodecg().Replicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol') as unknown as NodeCG.ServerReplicantWithSchemaDefault<RunDataActiveRun>;

export const informationArrayReplicant = nodecg().Replicant<SetupInformationArray>('setupInformationArray', {
  defaultValue: [],
});

export const startSoonReplicant = nodecg().Replicant<StartSoon>('startSoon', {
  defaultValue: false,
});
