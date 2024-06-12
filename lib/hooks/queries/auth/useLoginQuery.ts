import { useMutation } from "@tanstack/react-query";
import Config from "../../../network/config";
import { ClientError } from "../../../network/error";
import { ApiResponse } from "../../../constants/response";
import { AuthExpectedData } from "../../../constants/responses/auth";

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
