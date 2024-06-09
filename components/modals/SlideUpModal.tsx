import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../../lib/constants/colors";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isModalVisible: boolean;
  closeModalHandler: () => void;
}

function SlideUpModal({ children, isModalVisible, closeModalHandler }: Props) {
  return (
    <Modal
      animationType="slide"
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
  useAll: { flex: 1 },
  modalContainer: {
    position: "absolute",
    height: "35%",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.tertiary,
    padding: 40,
  },
});

export default SlideUpModal;
