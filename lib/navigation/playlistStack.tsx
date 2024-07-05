import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { Playlist } from "../constants/responses/playlist";

export type PlaylistStackParamList = {
  Playlists: undefined;
  VisualizePlaylist: Playlist;
};

export const PlaylistStack =
  createNativeStackNavigator<PlaylistStackParamList>();
