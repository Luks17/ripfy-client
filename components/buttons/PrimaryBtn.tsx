import type React from "react";
import {
  type GestureResponderEvent,
  Pressable,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { colors } from "../../lib/constants/colors";

interface Props {
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  innerStyle?: StyleProp<ViewStyle>;
  outerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  ripple?: string;
}

function PrimaryButton({
  children,
  onPress,
  innerStyle,
  outerStyle,
  textStyle,
  ripple = colors.tertiary,
}: Props) {
  return (
    <View style={[styles.outerContainer, outerStyle]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressedIos, innerStyle]
            : [styles.innerContainer, innerStyle]
        }
        android_ripple={{ color: ripple }}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  text: {
    color: colors.primaryContent,
    textAlign: "center",
    fontSize: 20,
  },
  pressedIos: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
