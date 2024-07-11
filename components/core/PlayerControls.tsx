import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import IconBtn from "../buttons/IconBtn";
import { colors } from "../../lib/constants/colors";

interface Props {
  size?: number;
}

function PausePlayBtn({ size = 30 }: Props) {
  const { playing } = useIsPlaying();

  function handlePress() {
    if (playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }

  return (
    <IconBtn
      onPress={handlePress}
      icon={playing ? "pause-circle-filled" : "play-circle-filled"}
      size={size}
      color={colors.baseContent}
    />
  );
}

function SkipToNextBtn({ size = 22 }: Props) {
  function handlePress() {
    TrackPlayer.skipToNext();
  }

  return (
    <IconBtn
      onPress={handlePress}
      icon="forward"
      size={size}
      color={colors.baseContent}
    />
  );
}

function SkipToPreviousBtn({ size = 22 }: Props) {
  function handlePress() {
    TrackPlayer.skipToPrevious();
  }

  return (
    <IconBtn
      onPress={handlePress}
      icon="forward"
      size={size}
      color={colors.baseContent}
    />
  );
}

export default {
  PausePlayBtn,
  SkipToNextBtn,
  SkipToPreviousBtn,
};
