import Config from "../config";
import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "../response";
import { ClientError } from "../error";

type Payload = {
  username: string;
  pwd: string;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (newUser: Payload) =>
      fetch(`${Config.apiEndpoint}/api/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const data: ApiResponse<void> = await res.json();

        if (!data.success) throw new ClientError(data.error!);

        return data;
      }),
  });
};
