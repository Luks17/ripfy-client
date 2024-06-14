import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import IconBtn from "../buttons/IconBtn";

interface Props {
  title: string;
  nTracks: number;
}

function Playlist({ title, nTracks }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.playlistContainer}
        android_ripple={{ color: colors.base100 }}
      >
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        ></Image>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{nTracks} músicas</Text>
        </View>
        <View style={styles.iconContainer}>
          <IconBtn
            icon="dots-three-vertical"
            size={16}
            color={colors.baseContent}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  playlistContainer: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  detailsContainer: {
    padding: 20,
    justifyContent: "center",
    rowGap: 10,
    flex: 1,
  },
  title: {
    color: colors.baseContent,
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    color: colors.secondary,
  },
  iconContainer: {
    justifyContent: "center",
  },
});

export default Playlist;
