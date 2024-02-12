import { SetupInformationArray } from '../types/schemas/setupInformation';
import { useReplicant } from 'nodecg-vue-composable';

export function useSetupInformation() {
  const setupInformationArray = useReplicant<SetupInformationArray>('setupInformationArray', 'mysrtafes2024-layouts');

  return {
    setupInformationArray
  }
}