import { StyleSheet, Text, View } from "react-native";
import {
  State,
  useActiveTrack,
  usePlaybackState,
} from "react-native-track-player";
import LoadingIndicator from "../../components/feedback/LoadingIndicator";
import MovingImage from "../../components/animated/MovingImage";
import { colors } from "../../lib/constants/colors";
import { addOpacity } from "../../lib/ui/utils";
import PlayerControls from "../../components/core/PlayerControls";

const btnsMarginToEdges = 30;

function AppTrackPlayerScreen() {
  const activeTrack = useActiveTrack();
  const playerState = usePlaybackState();

  const isPlaying = playerState.state === State.Playing;

  if (!activeTrack) {
    return (
      <View style={styles.container}>
        <LoadingIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.trackContainer}>
        {!isPlaying && (
          <>
            <View style={styles.trackInfoContainer}>
              <Text style={styles.title}>{activeTrack.title!}</Text>
              <Text style={styles.desc}>{activeTrack.artist!}</Text>
            </View>
            <View
              style={[styles.padWithBlack, { marginLeft: btnsMarginToEdges }]}
            >
              <PlayerControls.SkipToPreviousBtn />
            </View>
            <View style={styles.padWithBlack}>
              <PlayerControls.PausePlayBtn />
            </View>
            <View
              style={[styles.padWithBlack, { marginRight: btnsMarginToEdges }]}
            >
              <PlayerControls.SkipToNextBtn />
            </View>
          </>
        )}
        <PlayerControls.PausePlayPressable style={styles.trackArtworkContainer}>
          <MovingImage
            source={activeTrack.artwork!}
            width={1280}
            style={styles.trackArtwork}
          />
        </PlayerControls.PausePlayPressable>
      </View>
      <View style={styles.slider}>
        <PlayerControls.ProgressSlider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  trackContainer: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackInfoContainer: {
    position: "absolute",
    zIndex: 10,
    alignItems: "flex-start",
    rowGap: 4,
    top: 30,
    left: 20,
  },
  title: {
    fontSize: 16,
    maxWidth: 300,
    padding: 5,
    backgroundColor: "#000",
    color: colors.baseContent,
  },
  desc: {
    fontSize: 16,
    maxWidth: 200,
    padding: 5,
    backgroundColor: "#000",
    color: addOpacity(colors.baseContent, "cc"),
  },
  trackArtworkContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  trackArtwork: {
    width: 1280,
    height: "100%",
  },
  padWithBlack: {
    zIndex: 10,
    borderRadius: 999,
    backgroundColor: "#000",
    padding: 12,
  },
  slider: {
    padding: 10,
  },
});

export default AppTrackPlayerScreen;
