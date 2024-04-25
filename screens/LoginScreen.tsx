import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../lib/navigation/root";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.mainTitle}>Login</Text>
      <Button
        onPress={() => navigation.navigate("App")}
        title="Login de mentirinha"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 54,
  },
});

export default LoginScreen;
