import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

function SearchBar() {
  return (
    <View style={styles.pesquisarStack}>
      <TextInput
        placeholder="  pesquisar..."
        style={styles.pesquisar}
      ></TextInput>
      <View style={styles.group}>
        <FontAwesome name="search" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pesquisarStack: {
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  pesquisar: {
    color: "#f08316",
    height: 40,
    width: 298,
    backgroundColor: "#fff",
  },
  group: {
    right: 64,
    top: 7,
    position: "absolute",
  },
});

export default SearchBar;
