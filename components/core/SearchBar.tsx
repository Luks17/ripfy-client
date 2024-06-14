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
  pesquisar: {
    top: -50,
    left: 0,
    borderRadius: 15,
    position: "absolute",
    color: "#f08316",
    height: 40,
    width: 298,
    backgroundColor: "#fff",
  },
  group: {
    top: -40,
    left: 256,
    position: "absolute",
  },
  pesquisarStack: {
    marginTop: 60,
    marginLeft: 34,
  },
});

export default SearchBar;
