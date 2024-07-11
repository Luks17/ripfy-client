import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useActiveTrack } from "react-native-track-player";
import PlayerControls from "./PlayerControls";
import { colors } from "../../lib/constants/colors";
import { Image } from "expo-image";

function MiniPlayer() {
  const activeTrack = useActiveTrack();

  if (!activeTrack) return null;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <>
        <Image source={{ uri: activeTrack.artwork }} style={styles.image} />
        <View style={styles.trackContainer}>
          <Text style={styles.trackTitle}>{activeTrack.title}</Text>
        </View>
        <View style={styles.trackControlsContainer}>
          <PlayerControls.PausePlayBtn />
          <PlayerControls.SkipToNextBtn />
        </View>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 8,
    right: 8,
    bottom: 60,
    backgroundColor: colors.base100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackContainer: {
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 10,
    color: colors.baseContent,
  },
  trackControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
});

export default MiniPlayer;
