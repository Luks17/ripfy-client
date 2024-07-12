import TrackPlayer, {
  useIsPlaying,
  useProgress,
} from "react-native-track-player";
import IconBtn from "../buttons/IconBtn";
import { colors } from "../../lib/constants/colors";
import {
  Pressable,
  type ViewProps,
  type StyleProp,
  type ViewStyle,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useState, type ReactNode } from "react";
import Slider from "@react-native-community/slider";
import { addOpacity } from "../../lib/ui/utils";

interface Props {
  size?: number;
}

function getFormattedTime(timeInSecs: number) {
  let minutes: number | string = Math.floor(timeInSecs / 60);
  let seconds: number | string = Math.floor(timeInSecs) - minutes * 60;

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
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

function ProgressSlider({ style }: ViewProps) {
  const [seekedValue, setSeekedValue] = useState(0);
  const { duration, position } = useProgress();

  function handleChange(value: number) {
    setSeekedValue(value);
  }

  function handleSlidingComplete() {
    TrackPlayer.seekTo(seekedValue);
  }

  return (
    <View style={style}>
      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={handleChange}
        onSlidingComplete={handleSlidingComplete}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor="#fff"
        thumbTintColor={colors.accent}
      />
      <View style={sliderStyles.times}>
        <Text style={sliderStyles.text}>{getFormattedTime(position)}</Text>
        <Text style={sliderStyles.text}>{getFormattedTime(duration)}</Text>
      </View>
    </View>
  );
}

const sliderStyles = StyleSheet.create({
  times: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: addOpacity(colors.baseContent, "aa") },
});

export default {
  PausePlayBtn,
  SkipToNextBtn,
  SkipToPreviousBtn,
  PausePlayPressable,
  ProgressSlider,
};
