import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";
import PrimaryButton from "../components/buttons/PrimaryBtn";
import { colors } from "../lib/ui/colors";
import InputField from "../components/forms/InputField";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Olá novamente,</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>
      <View style={styles.formContainer}>
        <InputField
          value={userName}
          onInputChange={(text) => setUserName(text)}
          label="Nome de usuário"
          placeholder="Roberto Carlos"
        />
        <InputField
          value={passwd}
          onInputChange={(text) => setPasswd(text)}
          label="Senha"
          placeholder="Seu segredo"
          secure={true}
        />
        <View style={styles.distanceFromTop}>
          <PrimaryButton
            innerStyle={styles.button}
            onPress={() => navigation.navigate("App")}
          >
            Confirmar
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.base100,
    paddingHorizontal: 30,
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 50,
  },
  mainTitle: {
    fontSize: 42,
    color: colors.accent,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.accent,
  },
  formContainer: {
    backgroundColor: colors.base200,
    padding: 40,
    rowGap: 20,
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  distanceFromTop: {
    marginTop: 12,
  },
});

export default LoginScreen;
