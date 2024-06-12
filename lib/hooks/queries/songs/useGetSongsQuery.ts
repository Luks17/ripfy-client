import { ApiResponse } from "../../../constants/response";
import { Song } from "../../../constants/responses/song";
import Config from "../../../network/config";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "../../../network/error";
import { useContext } from "react";
import { AuthContext } from "../../../../store/auth-context";

export const useGetSongsQuery = () => {
  const { token } = useContext(AuthContext);

  return useQuery({
    queryKey: ["songs"],
    queryFn: () =>
      fetch(`${Config.apiEndpoint}/api/songs`, {
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
