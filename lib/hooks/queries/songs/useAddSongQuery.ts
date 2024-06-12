import Config from "../../../network/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import { ApiResponse } from "../../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import { Song } from "../../../constants/responses/song";

type Payload = {
  link: string;
};

export const useAddSongQuery = () => {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Payload) =>
      fetch(`${Config.apiEndpoint}/api/songs`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<Song> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
    onSuccess: (song) => {
      queryClient.setQueryData<Song[]>(["songs"], (old) =>
        old !== undefined ? [...old, song] : [song]
      );
    },
  });
};
