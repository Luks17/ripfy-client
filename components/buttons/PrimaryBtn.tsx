import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../lib/ui/colors";

interface Props {
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  innerStyle?: StyleProp<ViewStyle>;
  outerStyle?: StyleProp<ViewStyle>;
  ripple?: string;
}

function PrimaryButton({
  children,
  onPress,
  innerStyle,
  outerStyle,
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
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 10,
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
