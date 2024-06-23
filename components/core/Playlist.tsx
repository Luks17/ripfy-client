import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import IconBtn from "../buttons/IconBtn";
import { addOpacity } from "../../lib/ui/utils";

interface Props {
  title: string;
  nTracks: number;
}

function Playlist({ title, nTracks }: Props) {
  return (
    <View>
      <Pressable
        style={styles.container}
        android_ripple={{ color: colors.base100 }}
      >
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        />
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
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  detailsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
    rowGap: 5,
    flex: 1,
  },
  title: {
    color: colors.baseContent,
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    color: addOpacity(colors.baseContent, "80"),
  },
  iconContainer: {
    justifyContent: "center",
  },
});

export default Playlist;
