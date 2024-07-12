import { useEffect } from "react";
import Animated, {
  Easing,
  type StyleProps,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";

export type MovingTextProps = {
  text: string;
  textLengthThreshold: number;
  style?: StyleProps;
};

function MovingText({ text, textLengthThreshold, style }: MovingTextProps) {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length >= textLengthThreshold;

  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) return;

    translateX.value = withRepeat(
      withSequence(
        withDelay(
          5000,
          withTiming(-textWidth, { duration: 9000, easing: Easing.ease })
        ),
        withDelay(
          5000,
          withTiming(0, { duration: 9000, easing: Easing.linear })
        )
      ),
      -1
    );

    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [translateX, text]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        style,
        animatedStyle,
        shouldAnimate && {
          width: 9999,
        },
      ]}
    >
      {text}
    </Animated.Text>
  );
}

export default MovingText;
