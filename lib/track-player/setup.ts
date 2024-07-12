import TrackPlayer, { RepeatMode } from "react-native-track-player";

export async function setupTrackPlayer() {
  await TrackPlayer.setupPlayer({ maxCacheSize: 1024 * 50 });

  await TrackPlayer.setVolume(0.5);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}
