import { StyleSheet, Text, View } from "react-native";

function CatalogScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.mainTitle}>Catalogo</Text>
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

export default CatalogScreen;
