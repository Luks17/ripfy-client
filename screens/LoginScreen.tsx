import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";
import PrimaryButton from "../components/buttons/PrimaryBtn";
import { colors } from "../lib/ui/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.mainTitle}>Login</Text>
      <TextInput
        style={styles.textInput}
        placeholder="JeeanGDZL"
        placeholderTextColor={colors.base100}
      />
      <TextInput
        style={styles.textInput}
        placeholder="*******"
        placeholderTextColor={colors.base100}
        secureTextEntry={true} // This hides the password input
      />
      <PrimaryButton
        innerStyle={styles.button}
        onPress={() => navigation.navigate("App")}
      >
        Confirmar
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.base100,
  },
  mainTitle: {
    fontSize: 54,
    padding: 10,
    color: colors.accent,
    margin: 50,
  },
  textInput: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: colors.successContent,
    borderRadius: 15,
  },
  button: {
    borderRadius: 15,
    margin: 20,
    backgroundColor: colors.secondary,
  },
});

export default LoginScreen;
