import Config from "../../../network/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import type { ApiResponse } from "../../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Song } from "../../../constants/responses/song";

type ExpectedData = {
  playlist_id: string;
  song: Song;
};

type Payload = {
  song_id: string;
};

export const useAddPlaylistSongQuery = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ExpectedData) =>
      fetch(`${Config.apiEndpoint}/api/playlists/${data.playlist_id}/songs`, {
        method: "POST",
        body: JSON.stringify({ song_id: data.song.id } as Payload),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<void> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return { playlist_id: data.playlist_id, song: data.song };
      }),
    onSuccess: ({ playlist_id, song }) => {
      queryClient.setQueryData<Song[]>(["playlist", playlist_id, ""], (old) =>
        old !== undefined ? [...old, song] : [song]
      );
    },
  });
};
