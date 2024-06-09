import { StyleSheet, Text, View } from "react-native";
import IconBtn from "./buttons/IconBtn";
import { useState } from "react";
import { colors } from "../lib/constants/colors";
import InputField from "./forms/InputField";
import PrimaryButton from "./buttons/PrimaryBtn";
import SlideUpModal from "./modals/SlideUpModal";

function AddSong() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [songUrl, setSongUrl] = useState("");

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleInputChange = (text: string) => setSongUrl(text);

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
          />
          <PrimaryButton
            outerStyle={styles.outerBtn}
            innerStyle={styles.innerBtn}
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
