import { StyleSheet, Text, View } from "react-native";
import IconBtn from "../buttons/IconBtn";
import { useContext, useEffect, useState } from "react";
import { colors } from "../../lib/constants/colors";
import InputField from "../forms/InputField";
import PrimaryButton from "../buttons/PrimaryBtn";
import SlideUpModal from "../modals/SlideUpModal";
import { useAddSongQuery } from "../../lib/network/songs/useAddSongQuery";
import { ToastContext } from "../../store/toast-context";

function AddSong() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [songUrl, setSongUrl] = useState("");

  const { displayToast } = useContext(ToastContext);

  const { mutate, isError, failureReason, isPending, isSuccess } =
    useAddSongQuery();

  useEffect(() => {
    if (isSuccess) displayToast("success", "Música adicionada com sucesso");
    else if (isError && failureReason)
      displayToast("error", failureReason.message);
  }, [isSuccess, isError]);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleInputChange = (text: string) => setSongUrl(text);

  function handleSubmit() {
    mutate({ link: songUrl });
  }

  return (
    <>
      <IconBtn onPress={showModal} icon="pluscircleo" color="black" />
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
          <PrimaryButton
            outerStyle={styles.outerBtn}
            innerStyle={styles.innerBtn}
            onPress={handleSubmit}
          >
            Adicionar
          </PrimaryButton>
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
