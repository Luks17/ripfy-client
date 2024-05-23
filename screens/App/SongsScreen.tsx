import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../lib/ui/colors";

function SongsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pesquisarStack}>
        <TextInput
          placeholder="  pesquisar..."
          style={styles.pesquisar}
        ></TextInput>
        <View style={styles.group}>
          <FontAwesome name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.nomeMusica}>Nome Musica</Text>
          <View style={styles.nomeArtistaRow}>
            <Text style={styles.nomeArtista}>Nome Artista</Text>
            <Text style={styles.tempo}>00:00</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.button1Stack}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.nomeMusica1}>Nome Musica</Text>
          <View style={styles.nomeArtista1Row}>
            <Text style={styles.nomeArtista1}>Nome Artista</Text>
            <Text style={styles.tempo1}>00:00</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.button2Stack}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.nomeMusica2}>Nome Musica</Text>
          <View style={styles.nomeArtista2Row}>
            <Text style={styles.nomeArtista2}>Nome Artista</Text>
            <Text style={styles.tempo2}>00:00</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View style={styles.button3Stack}>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.nomeMusica3}>Nome Musica</Text>
          <View style={styles.nomeArtista3Row}>
            <Text style={styles.nomeArtista3}>Nome Artista</Text>
            <Text style={styles.tempo3}>00:00</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base100,
  },
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
  button1: {
    top: 0,
    width: 316,
    height: 89,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 27,
  },
  nomeMusica1: {
    color: "#121212",
    fontWeight: "bold",
    marginTop: 19,
    marginLeft: 57,
  },
  nomeArtista1: {
    color: "#121212",
    fontStyle: "italic",
  },
  tempo1: {
    color: "#121212",
    marginLeft: 102,
    marginTop: 4,
  },
  nomeArtista1Row: {
    height: 21,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 57,
    marginRight: 30,
  },
  image1: {
    top: 20,
    left: -1,
    width: 109,
    height: 49,
    position: "absolute",
  },
  button1Stack: {
    width: 343,
    height: 89,
    marginTop: 15,
    marginLeft: -5,
  },
  button2: {
    top: 0,
    left: 31,
    width: 316,
    height: 89,
    position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  nomeMusica2: {
    color: "#121212",
    fontWeight: "bold",
    marginTop: 19,
    marginLeft: 59,
  },
  nomeArtista2: {
    color: "#121212",
    fontStyle: "italic",
  },
  tempo2: {
    color: "#121212",
    marginLeft: 102,
    marginTop: 4,
  },
  nomeArtista2Row: {
    height: 21,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 59,
    marginRight: 28,
  },
  image2: {
    top: 20,
    left: 2,
    width: 109,
    height: 49,
    position: "absolute",
  },
  button2Stack: {
    width: 347,
    height: 89,
    marginTop: 20,
    marginLeft: -11,
  },
  button3: {
    top: 0,
    width: 316,
    height: 89,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 29,
  },
  nomeMusica3: {
    color: "#121212",
    fontWeight: "bold",
    marginTop: 19,
    marginLeft: 55,
  },
  nomeArtista3: {
    color: "#121212",
    fontStyle: "italic",
  },
  tempo3: {
    color: "#121212",
    marginLeft: 102,
    marginTop: 4,
  },
  nomeArtista3Row: {
    height: 21,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 55,
    marginRight: 32,
  },
  image3: {
    top: 20,
    left: 0,
    width: 109,
    height: 49,
    position: "absolute",
  },
  button3Stack: {
    width: 345,
    height: 89,
    marginTop: 18,
    marginLeft: -8,
  },
});

export default SongsScreen;
