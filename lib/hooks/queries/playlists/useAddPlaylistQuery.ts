import Config from "../../../network/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import type { ApiResponse } from "../../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Playlist } from "../../../constants/responses/playlist";

type Payload = {
  title: string;
};

export const useAddPlaylistQuery = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Payload) =>
      fetch(`${Config.apiEndpoint}/api/playlists`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<Playlist> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
    onSuccess: (playlist) => {
      queryClient.setQueryData<Playlist[]>(["playlists"], (old) =>
        old !== undefined ? [...old, playlist] : [playlist]
      );
    },
  });
};
