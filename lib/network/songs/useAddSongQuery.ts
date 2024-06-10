import Config from "../config";
import { useMutation } from "@tanstack/react-query";
import { ClientError } from "../error";
import { ApiResponse } from "../../constants/response";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";

type Payload = {
  link: string;
};

export const useAddSongQuery = () => {
  const { token } = useContext(AuthContext);

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
        const resBody: ApiResponse<void> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);
      }),
  });
};
