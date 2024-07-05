import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import type { SongsStackParamList } from "../../../lib/navigation/songsStack";

type Props = NativeStackScreenProps<SongsStackParamList, "AddSongToPlaylist">;

function AddSongToPlaylistScreen({ navigation, route }: Props) {
  return (
    <View>
      <Text>a</Text>
    </View>
  );
}

export default AddSongToPlaylistScreen;
