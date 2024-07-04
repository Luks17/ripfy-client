import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../../lib/constants/colors";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isModalVisible: boolean;
  closeModalHandler: () => void;
}

function MiddleOverlayModal({
  children,
  isModalVisible,
  closeModalHandler,
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={closeModalHandler}
    >
      <Pressable onPress={closeModalHandler} style={styles.useAll}>
        <View style={styles.overlayOpacity}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  useAll: {
    flex: 1,
  },
  overlayOpacity: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    elevation: 6,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: colors.base100,
    borderRadius: 4,
  },
});

export default MiddleOverlayModal;
