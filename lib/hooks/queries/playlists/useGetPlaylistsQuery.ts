import type { ApiResponse } from "../../../constants/response";
import Config from "../../../network/config";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Playlist } from "../../../constants/responses/playlist";

export const useGetPlaylistsQuery = (searchQuery: string) => {
  const { token } = useContext(AuthContext);

  const queryParams = searchQuery ? `?search=${searchQuery}` : "";

  return useQuery({
    queryKey: ["playlists", searchQuery],
    queryFn: () =>
      fetch(`${Config.apiEndpoint}/api/playlists${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const resBody: ApiResponse<Playlist[]> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
  });
};
