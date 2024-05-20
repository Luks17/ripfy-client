import { Alert } from "react-native";

export function validate(userName: string, passwd: string) {
  if (!userName || !passwd) {
    Alert.alert("Erro", "Por favor, preencha ambos os campos");
    return [!userName, !passwd];
  }

  if (userName.length < 2) {
    Alert.alert(
      "Erro",
      "O nome de usuário precisa ter pelo menos 2 caracteres!"
    );
    return [true, false];
  }

  if (passwd.length < 6) {
    Alert.alert("Erro", "A senha precisa ter pelo menos 6 caracteres!");
    return [false, true];
  }

  return [false, false];
}
