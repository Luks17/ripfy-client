import Config from "../config";
import { useMutation } from "@tanstack/react-query";
import { ClientError } from "../error";
import { ApiResponse } from "../../constants/response";

type Payload = {
  username: string;
  pwd: string;
};

export const useSignupQuery = () => {
  return useMutation({
    mutationFn: (newUser: Payload) =>
      fetch(`${Config.apiEndpoint}/api/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const resBody: ApiResponse<void> = await res.json();

        if (!resBody.success) throw new ClientError(resBody.error!);
      }),
  });
};
