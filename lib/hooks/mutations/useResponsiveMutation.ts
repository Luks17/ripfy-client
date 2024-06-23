import { useContext, useEffect } from "react";
import { ToastContext } from "../../../store/toast-context";
import { LoadingOverlayContext } from "../../../store/loading-overlay-context";
import type { UseMutationResult } from "@tanstack/react-query";

export function useResponsiveMutation(
  mutationResult: UseMutationResult<any, Error, any, unknown>,
  successMsg: string,
  successCallback?: () => void
) {
  const { displayToast } = useContext(ToastContext);
  const { showLoadingOverlay, hideLoadingOverlay } = useContext(
    LoadingOverlayContext
  );

  useEffect(() => {
    if (mutationResult.isPending) {
      showLoadingOverlay();
    } else {
      hideLoadingOverlay();
      if (mutationResult.isSuccess) {
        displayToast("success", successMsg);
        if (successCallback) successCallback();
      } else if (mutationResult.isError && mutationResult.failureReason) {
        displayToast("error", mutationResult.failureReason.message);
      }
    }
  }, [
    mutationResult,
    successCallback,
    showLoadingOverlay,
    hideLoadingOverlay,
    displayToast,
    successMsg,
  ]);
}
