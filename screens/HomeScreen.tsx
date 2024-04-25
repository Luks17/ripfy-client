import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Ripfy</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => navigation.navigate("SignUp")}
          title="Criar uma Conta"
        />
        <Button onPress={() => navigation.navigate("Login")} title="Entrar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 54,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    columnGap: 10,
    padding: 10,
    justifyContent: "center",
  },
  button: {
    width: "100%",
  },
});

export default HomeScreen;
