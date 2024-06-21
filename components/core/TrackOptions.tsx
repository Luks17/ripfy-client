import { StyleSheet, Text, View } from "react-native";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { colors } from "../../lib/constants/colors";

interface Props {
  showModal: boolean;
  closeModalHandler: () => void;
  targetTrackId: string;
}

function TrackOptions({ showModal, closeModalHandler, targetTrackId }: Props) {
  return (
    <MiddleOverlayModal
      isModalVisible={showModal}
      closeModalHandler={closeModalHandler}
    >
      <View style={styles.listItem}>
        <Text style={styles.title}>Deletar música</Text>
      </View>
    </MiddleOverlayModal>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
  },
  title: {
    color: colors.baseContent,
  },
});

export default TrackOptions;
