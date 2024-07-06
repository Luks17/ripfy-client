import Config from "../../../network/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import type { ApiResponse } from "../../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Playlist } from "../../../constants/responses/playlist";

type ExpectedData = {
  playlist_id: string;
};

export const useDeletePlaylistQuery = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ playlist_id }: ExpectedData) =>
      fetch(`${Config.apiEndpoint}/api/playlists/${playlist_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<void> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return { playlist_id };
      }),
    onSuccess: ({ playlist_id }) => {
      queryClient.setQueryData<Playlist[]>(["playlists", ""], (old) =>
        old !== undefined ? old.filter(({ id }) => id !== playlist_id) : []
      );
    },
  });
};
