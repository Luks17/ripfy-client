import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import Track from "../../components/core/Track";
import { useGetSongsQuery } from "../../lib/hooks/queries/songs/useGetSongsQuery";
import LoadingIndicator from "../../components/feedback/LoadingIndicator";
import { Song } from "../../lib/constants/responses/song";
import SearchBar from "../../components/core/SearchBar";

function SongsScreen() {
  const { data, isPending } = useGetSongsQuery();

  function renderTrack({ item }: ListRenderItemInfo<Song>) {
    return <Track song={item} />;
  }

  if (isPending) return <LoadingIndicator />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={SearchBar}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.songsContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderTrack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base300,
  },
  songsContainer: {
    paddingVertical: 20,
    alignSelf: "center",
  },
});

export default SongsScreen;
