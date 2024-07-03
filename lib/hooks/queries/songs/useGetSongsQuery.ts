import type { ApiResponse } from "../../../constants/response";
import type { Song } from "../../../constants/responses/song";
import Config from "../../../network/config";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";

export const useGetSongsQuery = (searchQuery: string) => {
  const { token } = useContext(AuthContext);

  const queryParams = searchQuery ? `?search=${searchQuery}` : "";

  return useQuery({
    queryKey: ["songs", searchQuery],
    queryFn: () =>
      fetch(`${Config.apiEndpoint}/api/songs${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const resBody: ApiResponse<Song[]> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
  });
};
