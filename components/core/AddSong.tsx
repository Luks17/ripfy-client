import { StyleSheet, Text, View } from "react-native";
import IconBtn from "../buttons/IconBtn";
import { useState } from "react";
import { colors } from "../../lib/constants/colors";
import InputField from "../forms/InputField";
import PrimaryButton from "../buttons/PrimaryBtn";
import SlideUpModal from "../modals/SlideUpModal";
import { useAddSongQuery } from "../../lib/hooks/queries/songs/useAddSongQuery";
import LoadingIndicator from "../feedback/LoadingIndicator";
import { useMutationToasts } from "../../lib/hooks/post-mutations/useMutationToasts";

function AddSong() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [songUrl, setSongUrl] = useState("");

  const addSongMutation = useAddSongQuery();
  const { mutate, isPending } = addSongMutation;

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleInputChange = (text: string) => setSongUrl(text);

  useMutationToasts(addSongMutation, "Música adicionada com sucesso!", () => {
    setSongUrl("");
    hideModal();
  });

  function handleSubmit() {
    mutate({ link: songUrl });
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
        <Text style={styles.title}>Adicione uma música</Text>
        <View style={styles.inputContainer}>
          <InputField
            value={songUrl}
            onInputChange={handleInputChange}
            placeholder="URL do YouTube"
            inputFieldColor={colors.baseContent}
          />
          {!isPending ? (
            <PrimaryButton
              outerStyle={styles.outerBtn}
              innerStyle={styles.innerBtn}
              onPress={handleSubmit}
            >
              Adicionar
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

export default AddSong;
