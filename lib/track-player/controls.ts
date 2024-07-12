import type { Track } from "react-native-track-player";
import type { Song } from "../constants/responses/song";
import { getSongThumbnailUri, getSongUri } from "../network/util";
import TrackPlayer from "react-native-track-player";

export async function loadAndPlay(song: Song) {
  const track: Track = {
    title: song.title,
    artist: song.channel,
    url: getSongUri(song),
    artwork: getSongThumbnailUri(song),
  };

  await TrackPlayer.load(track);
  await TrackPlayer.play();
}
