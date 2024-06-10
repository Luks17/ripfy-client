import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";

function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 24,
    backgroundColor: colors.base100,
  },
});

export default LoadingView;
