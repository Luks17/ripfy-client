import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type PlaylistStackParamList = {
  Playlists: undefined;
  PlaylistView: undefined;
};

export const PlaylistStack =
  createNativeStackNavigator<PlaylistStackParamList>();
