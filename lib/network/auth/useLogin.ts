import { useMutation } from "@tanstack/react-query";
import Config from "../config";
import { ClientError } from "../error";
import { ApiResponse } from "../response";

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
        const data: ApiResponse<void> = await res.json();

        if (data.success) return data;
        else {
          throw new ClientError(data.error!);
        }
      }),
  });
};
