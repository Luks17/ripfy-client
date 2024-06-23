import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { colors } from "../../lib/constants/colors";
import type { ToastTypes } from "../../store/toast-context";
import { useEffect } from "react";

interface Props {
  type: ToastTypes;
  message: string;
  closeToast: () => void;
}

function ToastNotification({ type, message, closeToast }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 5000);

    return () => clearTimeout(timer);
  }, [closeToast]);

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={[styles.modalContainer, { borderColor: colors[type] }]}
    >
      <Pressable onPress={closeToast}>
        <Text style={styles.message}>{message}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    height: 50,
    backgroundColor: colors.base200,
    borderRadius: 3,
    top: "12%",
    width: "90%",
    left: "5%",
    zIndex: 999,
    borderLeftWidth: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  message: {
    color: colors.baseContent,
  },
});

export default ToastNotification;
