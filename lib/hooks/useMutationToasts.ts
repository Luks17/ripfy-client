import { UseMutationResult } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../store/toast-context";

export function useMutationToasts(
  mutationResult: UseMutationResult<any, Error, any, unknown>,
  successMsg: string
) {
  const { displayToast } = useContext(ToastContext);

  useEffect(() => {
    if (mutationResult.isSuccess) displayToast("success", successMsg);
    else if (mutationResult.isError && mutationResult.failureReason)
      displayToast("error", mutationResult.failureReason.message);
  }, [mutationResult.isSuccess, mutationResult.isError]);
}
