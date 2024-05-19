import { useMutation } from "@tanstack/react-query";
import Config from "../config";

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
      }).then((res) => res.json()),
  });
};
