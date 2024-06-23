import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { RootStackParamList } from "../../lib/navigation/root";
import { useEffect, useState } from "react";

import PrimaryButton from "../../components/buttons/PrimaryBtn";
import InputField from "../../components/forms/InputField";

import { validate } from "../../lib/validation/signup";
import { hasError } from "../../lib/validation/common";
import { useSignupQuery } from "../../lib/hooks/queries/auth/useSignupQuery";
import { colors } from "../../lib/constants/colors";
import { useResponsiveMutation } from "../../lib/hooks/mutations/useResponsiveMutation";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

function SignupScreen({ navigation }: Props) {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confPasswd, setConfPasswd] = useState("");
  const [errors, setErrors] = useState([false, false, false]);

  const signupMutation = useSignupQuery();
  const { mutate, isSuccess } = signupMutation;

  useResponsiveMutation(signupMutation, "Conta criada com sucesso!");

  function handleSubmit() {
    const validationErrors = validate(userName, passwd, confPasswd);
    setErrors(validationErrors);

    if (hasError(validationErrors)) return;

    mutate({ username: userName, pwd: passwd });
  }

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Home");
    }
  }, [isSuccess]);

  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Seja bem-vindo,</Text>
          <Text style={styles.subtitle}>Crie uma conta para continuar</Text>
        </View>
        <View style={styles.formContainer}>
          <InputField
            value={userName}
            onInputChange={(text) => setUserName(text)}
            label="Nome de usuário"
            placeholder="Seu nome no aplicativo"
            error={errors[0]}
          />
          <InputField
            value={passwd}
            onInputChange={(text) => setPasswd(text)}
            label="Senha"
            placeholder="Senha bem segura"
            secure={true}
            error={errors[1]}
          />
          <InputField
            value={confPasswd}
            onInputChange={(text) => setConfPasswd(text)}
            label="Confirmar Senha"
            placeholder="Sua senha novamente"
            secure={true}
            error={errors[2]}
          />
          <View style={styles.distanceFromTop}>
            <PrimaryButton innerStyle={styles.button} onPress={handleSubmit}>
              Criar Conta
            </PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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

export default SignupScreen;
