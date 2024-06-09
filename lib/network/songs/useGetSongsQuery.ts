import { ApiResponse } from "../../constants/response";
import { Song } from "../../constants/responses/song";
import Config from "../config";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "../error";

export const useGetSongsQuery = (accessToken: string) => {
  return useQuery({
    queryKey: ["songs"],
    queryFn: () =>
      fetch(`${Config.apiEndpoint}/api/songs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(async (res) => {
        const resBody: ApiResponse<Song[]> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
  });
};
