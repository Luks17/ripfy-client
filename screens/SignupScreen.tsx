import { StyleSheet, Text, View } from "react-native";

function SignupScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.mainTitle}>Signup</Text>
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

export default SignupScreen;
