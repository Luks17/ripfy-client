import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { Song } from "../constants/responses/song";

export type SongsStackParamList = {
  Songs: undefined;
  AddSongToPlaylist: Song;
};

export const SongsStack = createNativeStackNavigator<SongsStackParamList>();
