import { Image, type ImageStyle } from "expo-image";
import { useEffect } from "react";
import { Dimensions, type StyleProp } from "react-native";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export type MovingImageProps = {
  source: string;
  width: number;
  style?: StyleProp<ImageStyle>;
};

function MovingImage({ source, width, style }: MovingImageProps) {
  const translateX = useSharedValue(0);
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    translateX.value = withRepeat(
      withSequence(
        withDelay(
          5000,
          withTiming(windowWidth - width, {
            duration: 20000,
            easing: Easing.linear,
          })
        ),
        withDelay(
          5000,
          withTiming(0, { duration: 20000, easing: Easing.linear })
        )
      ),
      -1
    );

    return () => {
      cancelAnimation(translateX);
      translateX.value = 0;
    };
  }, [source, translateX, width]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <AnimatedImage
      source={{ uri: source }}
      priority="high"
      style={[style, animatedStyle]}
    />
  );
}

export default MovingImage;
