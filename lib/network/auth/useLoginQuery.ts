import { useMutation } from "@tanstack/react-query";
import Config from "../config";
import { ClientError } from "../error";
import { ApiResponse, AuthExpectedData } from "../response";

type Payload = {
  username: string;
  pwd: string;
};

export const useLoginQuery = () => {
  return useMutation({
    mutationFn: (user: Payload) =>
      fetch(`${Config.apiEndpoint}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<AuthExpectedData> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);

        return resBody.data!;
      }),
  });
};
