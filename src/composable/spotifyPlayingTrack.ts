import { computed } from 'vue'
import { SpotifyPlayingTrack } from '../types/schemas/nodecgSpotifyWidget';
import { useReplicant } from 'nodecg-vue-composable';

export function useSpotifyPlayingTrack() {
  const spotifyPlayingTrack = useReplicant<SpotifyPlayingTrack>(
    'spotifyPlayingTrack',
    'nodecg-spotify-widget',
  );

  const trackName = computed(() => spotifyPlayingTrack?.data?.name || '');
  const artists = computed(() => spotifyPlayingTrack?.data?.artists.join(', ') || '');

  return {
    spotifyPlayingTrack,
    trackName,
    artists,
  }
}