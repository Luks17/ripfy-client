import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import { addOpacity } from "../../lib/ui/utils";
import type { Playlist } from "../../lib/constants/responses/playlist";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  playlist: Playlist;
  onSelect: (playlist_id: string, is_selected: boolean) => void;
}

function PlaylistOption({ playlist, onSelect }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  function onPressHandler() {
    setIsSelected(!isSelected);
    onSelect(playlist.id, !isSelected);
  }

  return (
    <View>
      <Pressable
        style={styles.container}
        android_ripple={{ color: colors.base100 }}
        onPress={onPressHandler}
      >
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{playlist.title}</Text>
          <Text style={styles.desc}>{57} músicas</Text>
        </View>
        <View style={styles.selectorContainer}>
          <MaterialIcons
            name={`radio-button-${isSelected ? "on" : "off"}`}
            color={colors.baseContent}
            size={20}
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
    borderRadius: 6,
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
  selectorContainer: {
    justifyContent: "center",
  },
});

export default PlaylistOption;
