import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Song } from "../../lib/constants/responses/song";
import { colors } from "../../lib/constants/colors";
import { addOpacity } from "../../lib/ui/utils";
import { getSongThumbnailUri } from "../../lib/network/util";
import { Image } from "expo-image";

interface Props {
  song: Song;
  pressHandler?: (song: Song) => void;
  longPressHandler?: (song: Song) => void;
}

function Track({ song, pressHandler, longPressHandler }: Props) {
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={pressHandler?.bind(null, song)}
        onLongPress={longPressHandler?.bind(null, song)}
        android_ripple={{ color: colors.base100 }}
      >
        <Image
          source={{ uri: getSongThumbnailUri(song) }}
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {song.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>
            {song.channel}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 5,
    paddingHorizontal: 5,
    maxWidth: 150,
  },
  title: {
    color: colors.baseContent,
    fontWeight: "bold",
  },
  desc: {
    color: addOpacity(colors.baseContent, "80"),
  },
});

export default Track;
