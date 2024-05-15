import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../lib/ui/colors";

function CatalogScreen() {
  return <View style={styles.rootContainer}></View>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.base100,
  },
});

export default CatalogScreen;
