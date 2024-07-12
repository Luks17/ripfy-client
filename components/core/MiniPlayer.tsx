import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useActiveTrack } from "react-native-track-player";
import PlayerControls from "./PlayerControls";
import { colors } from "../../lib/constants/colors";
import { Image } from "expo-image";
import MovingText from "../animated/MovingText";
import { addOpacity } from "../../lib/ui/utils";
import { useNavigation } from "@react-navigation/native";
import type { SignedInStackParamList } from "../../lib/navigation/signedInStack";
import type { StackNavigationProp } from "@react-navigation/stack";

type SignedInNavigationProps = StackNavigationProp<
  SignedInStackParamList,
  "AppTabs"
>;

function MiniPlayer() {
  const { navigate } = useNavigation<SignedInNavigationProps>();
  const activeTrack = useActiveTrack();

  if (!activeTrack) return null;

  function pressHandler() {
    navigate("AppTrackPlayer");
  }

  return (
    <TouchableOpacity
      onPress={pressHandler}
      activeOpacity={0.9}
      style={styles.container}
    >
      <>
        <Image source={{ uri: activeTrack.artwork }} style={styles.image} />
        <View style={styles.trackContainer}>
          <MovingText
            text={activeTrack.title!}
            textLengthThreshold={30}
            style={styles.trackTitle}
          />
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
    columnGap: 10,
    alignItems: "center",
    borderRadius: 8,
    padding: 7,
  },
  image: {
    width: 45,
    height: 45,
  },
  trackContainer: {
    flex: 1,
    overflow: "hidden",
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: addOpacity(colors.baseContent, "dd"),
  },
  trackControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    paddingHorizontal: 10,
  },
});

export default MiniPlayer;
