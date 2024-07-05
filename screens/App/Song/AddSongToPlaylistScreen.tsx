import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import type { SongsStackParamList } from "../../../lib/navigation/songsStack";
import { colors } from "../../../lib/constants/colors";
import { useGetPlaylistsQuery } from "../../../lib/hooks/queries/playlists/useGetPlaylistsQuery";
import type { Playlist } from "../../../lib/constants/responses/playlist";
import LoadingIndicator from "../../../components/feedback/LoadingIndicator";
import PlaylistOptions from "../../../components/options-menus/PlaylistOptions";
import { useContext, useLayoutEffect, useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryBtn";
import { useAddPlaylistSongQuery } from "../../../lib/hooks/queries/playlists/useAddPlaylistSongQuery";
import { ToastContext } from "../../../store/toast-context";

type Props = NativeStackScreenProps<SongsStackParamList, "AddSongToPlaylist">;

function AddSongToPlaylistScreen({ navigation, route }: Props) {
  const [selectedPlaylists, setSelectedPlaylists] = useState<string[]>([]);
  const [areMutsPending, setAreMutsPending] = useState(false);

  const { displayToast } = useContext(ToastContext);

  const { data, isPending } = useGetPlaylistsQuery();
  const { mutateAsync } = useAddPlaylistSongQuery();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Selecione Playlists",
      headerRight: () =>
        areMutsPending ? (
          <LoadingIndicator occupyAll={false} />
        ) : (
          <PrimaryButton
            onPress={onSubmit}
            innerStyle={styles.innerBtnStyle}
            textStyle={styles.btnTextStyle}
          >
            Adicionar
          </PrimaryButton>
        ),
    });
  }, [onSubmit]);

  function onSubmit() {
    const promises = [];

    for (const playlist_id of selectedPlaylists) {
      promises.push(mutateAsync({ playlist_id, song: route.params.song }));
    }

    setAreMutsPending(true);

    Promise.all(promises)
      .then(() => {
        displayToast(
          "success",
          "Música(s) adicionada(s) com sucesso na playlist!"
        );
      })
      .catch(() => {
        displayToast(
          "error",
          "Houve um erro ao adicionar a(s) música(s) na playlist! Tente novamente mais tarde..."
        );
      })
      .finally(() => {
        navigation.navigate("Songs");
      });
  }

  function onSelectHandler(playlist_id: string, is_selected: boolean) {
    if (is_selected) {
      setSelectedPlaylists((old) => [...old, playlist_id]);
    } else {
      setSelectedPlaylists((old) => old.filter((id) => id !== playlist_id));
    }
  }

  function renderPlaylistOption({ item }: ListRenderItemInfo<Playlist>) {
    if (isPending) return <LoadingIndicator />;
    return <PlaylistOptions playlist={item} onSelect={onSelectHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.playlistsContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaylistOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base300,
  },
  playlistsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  innerBtnStyle: {
    backgroundColor: colors.tertiary,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  btnTextStyle: {
    fontSize: 16,
  },
});

export default AddSongToPlaylistScreen;
