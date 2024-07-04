import { Image, StyleSheet, Text, View } from "react-native";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { colors } from "../../lib/constants/colors";
import type { Song } from "../../lib/constants/responses/song";
import MenuBtn from "../buttons/MenuBtn";

interface Props {
  showModal: boolean;
  closeModalHandler: () => void;
  targetTrack: Song | null;
}

function TrackOptions({ showModal, closeModalHandler, targetTrack }: Props) {
  if (!targetTrack) return null;

  return (
    <MiddleOverlayModal
      isModalVisible={showModal}
      closeModalHandler={closeModalHandler}
    >
      <View style={styles.trackContainer}>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        />
        <Text style={styles.title}>{targetTrack.title}</Text>
      </View>
      <MenuBtn text="Deletar música" icon="squared-minus" />
    </MiddleOverlayModal>
  );
}

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    columnGap: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.base300,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    width: 200,
    color: colors.baseContent,
  },
});

export default TrackOptions;
