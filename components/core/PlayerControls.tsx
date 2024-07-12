import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import IconBtn from "../buttons/IconBtn";
import { colors } from "../../lib/constants/colors";
import { Pressable, type StyleProp, type ViewStyle } from "react-native";
import type { ReactNode } from "react";

interface Props {
  size?: number;
}

function PausePlayPressable({
  children,
  style,
}: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const { playing } = useIsPlaying();

  function handlePress() {
    if (playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }

  return (
    <Pressable style={style} onPress={handlePress}>
      {children}
    </Pressable>
  );
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
      icon={playing ? "pause" : "controller-play"}
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
      icon="banckward"
      size={size}
      color={colors.baseContent}
    />
  );
}

export default {
  PausePlayBtn,
  SkipToNextBtn,
  SkipToPreviousBtn,
  PausePlayPressable,
};
