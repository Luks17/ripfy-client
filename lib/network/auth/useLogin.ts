import { useMutation } from "@tanstack/react-query";
import Config from "../config";
import { ClientError } from "../error";
import { ApiResponse } from "../response";
import { parseAuthCookie } from "../cookies";

type Payload = {
  username: string;
  pwd: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (user: Payload) =>
      fetch(`${Config.apiEndpoint}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<void> = await res.json();
        const authToken = parseAuthCookie(res.headers);

        if (!resBody.success) throw new ClientError(resBody.error!);

        return authToken;
      }),
  });
};
