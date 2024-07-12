import type { Song } from "../constants/responses/song";
import Config from "./config";

export function getSongThumbnailUri(song: Song) {
  return `${Config.apiEndpoint}/api/stream/thumbnail/${song.id}`;
}

export function getSongUri(song: Song) {
  return `${Config.apiEndpoint}/api/stream/song/${song.id}`;
}
