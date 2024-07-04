import { Image, StyleSheet, Text, View } from "react-native";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { colors } from "../../lib/constants/colors";
import type { Song } from "../../lib/constants/responses/song";
import MenuBtn from "../buttons/MenuBtn";
import { useDeleteSongQuery } from "../../lib/hooks/queries/songs/useDeleteSongQuery";
import { useEffect } from "react";

interface Props {
  showModal: boolean;
  closeModalHandler: () => void;
  targetTrack: Song | null;
}

function TrackOptions({ showModal, closeModalHandler, targetTrack }: Props) {
  const { mutate, isPending, isSuccess } = useDeleteSongQuery();

  useEffect(() => {
    if (isSuccess) closeModalHandler();
  }, [isSuccess]);

  function deleteTrackBtnPressHandler(track_id: string) {
    mutate(track_id);
  }

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
      <MenuBtn
        onPress={() => deleteTrackBtnPressHandler(targetTrack.id)}
        text="Deletar música"
        icon="squared-minus"
        isPending={isPending}
      />
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
