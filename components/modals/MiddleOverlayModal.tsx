import {
  Modal,
  StyleSheet,
  TouchableOpacity,
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
      <TouchableOpacity onPress={closeModalHandler} style={styles.useAll}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  useAll: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalContainer: {
    position: "absolute",
    overflow: "hidden",
    backgroundColor: colors.base100,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
});

export default MiddleOverlayModal;
