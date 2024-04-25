import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";
import PrimaryButton from "../components/buttons/PrimaryBtn";
import { colors } from "../lib/ui/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.mainTitle}>Login</Text>
      <PrimaryButton
        innerStyle={styles.button}
        onPress={() => navigation.navigate("App")}
      >
        Entrar na sua conta
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.base100,
  },
  mainTitle: {
    fontSize: 54,
    padding: 20,
    color: colors.accent,
  },
  button: {
    backgroundColor: colors.secondary,
  },
});

export default LoginScreen;
