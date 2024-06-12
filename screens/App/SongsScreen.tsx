import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../lib/constants/colors";
import Track from "../../components/core/Track";
import { useGetSongsQuery } from "../../lib/hooks/queries/songs/useGetSongsQuery";
import LoadingIndicator from "../../components/feedback/LoadingIndicator";

function SongsScreen() {
  const { data, isPending } = useGetSongsQuery();

  if (isPending) return <LoadingIndicator />;

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
      {data?.map((song) => <Track key={song.id} song={song}></Track>)}
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
});

export default SongsScreen;
