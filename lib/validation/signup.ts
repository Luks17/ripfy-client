import { Alert } from "react-native";

export function validate(userName: string, passwd: string, confPasswd: string) {
  if (!userName || !passwd || !confPasswd) {
    Alert.alert("Erro", "Por favor, preencha todos os campos");
    return [!userName, !passwd, !confPasswd];
  }

  if (userName.length < 2) {
    Alert.alert(
      "Erro",
      "O nome de usuário precisa ter pelo menos 2 caracteres!"
    );
    return [true, false, false];
  }

  if (passwd.length < 6) {
    Alert.alert("Erro", "A senha precisa ter pelo menos 6 caracteres!");
    return [false, true, false];
  }

  if (passwd !== confPasswd) {
    Alert.alert("Erro", "As senhas informadas não são iguais!");
    return [false, false, true];
  }

  return [false, false, false];
}
