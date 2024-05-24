import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Track() {
  return (
    <View style={styles.buttonStack}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.nomeMusica}>Nome Musica</Text>
        <View style={styles.nomeArtistaRow}>
          <Text style={styles.nomeArtista}>Nome Artista</Text>
          <Text style={styles.tempo}>00:00</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require("../assets/unknown_artist.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 0,
    left: 31,
    width: 316,
    height: 89,
    position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  nomeMusica: {
    color: "#121212",
    fontWeight: "bold",
    marginTop: 14,
    marginLeft: 63,
  },
  nomeArtista: {
    color: "#121212",
    fontStyle: "italic",
  },
  tempo: {
    color: "#121212",
    marginLeft: 102,
    marginTop: 3,
  },
  nomeArtistaRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 63,
    marginRight: 24,
  },
  image: {
    top: 20,
    left: 2,
    width: 109,
    height: 49,
    position: "absolute",
  },
  buttonStack: {
    width: 347,
    height: 89,
    marginTop: 57,
    marginLeft: -11,
  },
});

export default Track;
