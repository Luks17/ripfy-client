import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import { RootStackParamList } from "../../lib/navigation/root";
import PrimaryButton from "../../components/buttons/PrimaryBtn";
import LoadingView from "../../components/feedback/LoadingView";
import ErrorCard from "../../components/feedback/ErrorCard";
import InputField from "../../components/forms/InputField";
import { validate } from "../../lib/validation/login";
import { hasError } from "../../lib/validation/common";
import { useLoginQuery } from "../../lib/network/auth/useLoginQuery";
import { AuthContext } from "../../store/auth-context";
import { colors } from "../../lib/constants/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errors, setErrors] = useState([false, false]);

  const { mutate, isPending, isError, failureReason, data } = useLoginQuery();
  const { authenticate } = useContext(AuthContext);

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
  }, [data]);

  if (isPending) {
    return <LoadingView />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Olá novamente,</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>
      <View style={styles.formContainer}>
        {isError && <ErrorCard msg={failureReason!.message} />}
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
