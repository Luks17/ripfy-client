import type { Song } from "../constants/responses/song";
import Config from "./config";

export function getSongThumbnailUri(song: Song) {
  return `${Config.apiEndpoint}/stream/thumbnail/${song.id}`;
}
