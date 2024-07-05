import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconBtn from "../buttons/IconBtn";
import { colors } from "../../lib/constants/colors";
import SlideUpModal from "../modals/SlideUpModal";
import InputField from "../forms/InputField";
import { useAddPlaylistQuery } from "../../lib/hooks/queries/playlists/useAddPlaylistQuery";
import { useMutationToasts } from "../../lib/hooks/post-mutations/useMutationToasts";
import PrimaryButton from "../buttons/PrimaryBtn";
import LoadingIndicator from "../feedback/LoadingIndicator";

function AddPlaylist() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const playlistMutation = useAddPlaylistQuery();
  const { mutate, isPending } = playlistMutation;

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleInputChange = (text: string) => setPlaylistName(text);

  useMutationToasts(playlistMutation, "Playlist criada com sucesso!", () => {
    hideModal();
  });

  function handleSubmit() {
    mutate({ title: playlistName });
  }

  return (
    <>
      <IconBtn
        onPress={showModal}
        icon="pluscircleo"
        color={colors.baseContent}
      />
      <SlideUpModal
        isModalVisible={isModalVisible}
        closeModalHandler={hideModal}
      >
        <Text style={styles.title}>Criar uma nova playlist</Text>
        <View style={styles.inputContainer}>
          <InputField
            value={playlistName}
            onInputChange={handleInputChange}
            placeholder="Nome da playlist"
            inputFieldColor={colors.baseContent}
          />
          {!isPending ? (
            <PrimaryButton
              outerStyle={styles.outerBtn}
              innerStyle={styles.innerBtn}
              onPress={handleSubmit}
            >
              Confirmar
            </PrimaryButton>
          ) : (
            <LoadingIndicator occupyAll={false} />
          )}
        </View>
      </SlideUpModal>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: colors.tertiaryContent,
  },
  inputContainer: {
    rowGap: 16,
  },
  outerBtn: {
    alignItems: "center",
  },
  innerBtn: {
    backgroundColor: colors.accent,
    borderRadius: 5,
  },
});

export default AddPlaylist;
