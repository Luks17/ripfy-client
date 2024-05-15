import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";
import PrimaryButton from "../components/buttons/PrimaryBtn";
import { colors } from "../lib/ui/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Ripfy</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          outerStyle={{ width: "50%" }}
          innerStyle={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          Criar Conta
        </PrimaryButton>
        <PrimaryButton
          outerStyle={{ width: "50%" }}
          innerStyle={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          Entrar
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.base100,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 100,
    color: colors.accent,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    columnGap: 10,
    padding: 20,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 15,
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
});

export default HomeScreen;
