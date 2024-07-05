import type { ApiResponse } from "../../../constants/response";
import Config from "../../../network/config";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";
import type { Song } from "../../../constants/responses/song";

export const useGetPlaylistSongsQuery = (
  playlist_id: string,
  searchQuery: string
) => {
  const { token } = useContext(AuthContext);

  const queryParams = searchQuery ? `?search=${searchQuery}` : "";

  return useQuery({
    queryKey: ["playlist", playlist_id, searchQuery],
    queryFn: () =>
      fetch(
        `${Config.apiEndpoint}/api/playlists/${playlist_id}/songs${queryParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then(async (res) => {
        const resBody: ApiResponse<Song[]> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
  });
};
