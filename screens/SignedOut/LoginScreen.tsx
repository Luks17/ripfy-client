import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import type { SignedOutStackParamList } from "../../lib/navigation/signedOutStack";
import PrimaryButton from "../../components/buttons/PrimaryBtn";
import InputField from "../../components/forms/InputField";
import { validate } from "../../lib/validation/login";
import { hasError } from "../../lib/validation/common";
import { useLoginQuery } from "../../lib/hooks/queries/auth/useLoginQuery";
import { AuthContext } from "../../store/auth-context";
import { colors } from "../../lib/constants/colors";
import { useResponsiveMutation } from "../../lib/hooks/post-mutations/useResponsiveMutation";

type Props = NativeStackScreenProps<SignedOutStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errors, setErrors] = useState([false, false]);

  const loginMutation = useLoginQuery();
  const { mutate, data } = loginMutation;

  const { authenticate } = useContext(AuthContext);

  useResponsiveMutation(loginMutation, "Login realizado com sucesso!");

  function handleSubmit() {
    const validationErrors = validate(userName, passwd);
    setErrors(validationErrors);

    if (hasError(validationErrors)) return;

    mutate({ username: userName, pwd: passwd });
  }

  useEffect(() => {
    if (data !== undefined) {
      authenticate(data);
    }
  }, [data, authenticate]);

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
          placeholder="Exemplo123"
          error={errors[0]}
        />
        <InputField
          value={passwd}
          onInputChange={(text) => setPasswd(text)}
          label="Senha"
          placeholder="Seu segredo"
          secure={true}
          error={errors[1]}
        />
        <View style={styles.distanceFromTop}>
          <PrimaryButton innerStyle={styles.button} onPress={handleSubmit}>
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
