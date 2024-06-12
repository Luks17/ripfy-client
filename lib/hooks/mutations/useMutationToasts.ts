import { UseMutationResult } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../../store/toast-context";

export function useMutationToasts(
  mutationResult: UseMutationResult<any, Error, any, unknown>,
  successMsg: string,
  successCallback?: () => void
) {
  const { displayToast } = useContext(ToastContext);

  useEffect(() => {
    if (mutationResult.isSuccess) {
      displayToast("success", successMsg);

      if (successCallback) successCallback();
    } else if (mutationResult.isError && mutationResult.failureReason) {
      displayToast("error", mutationResult.failureReason.message);
    }
  }, [mutationResult.isSuccess, mutationResult.isError]);
}
