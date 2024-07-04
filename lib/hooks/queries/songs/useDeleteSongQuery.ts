import Config from "../../../network/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import type { ApiResponse } from "../../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Song } from "../../../constants/responses/song";

export const useDeleteSongQuery = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (song_id: string) =>
      fetch(`${Config.apiEndpoint}/api/songs/${song_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<void> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return song_id;
      }),
    onSuccess: (song_id: string) => {
      queryClient.setQueryData<Song[]>(["songs", ""], (old) =>
        old !== undefined ? old.filter((song) => song.id !== song_id) : []
      );
    },
  });
};
