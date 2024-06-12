import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import { addOpacity } from "../../lib/ui/utils";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 200,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    padding: 24,
    backgroundColor: addOpacity(colors.base300),
  },
});

export default LoadingOverlay;
