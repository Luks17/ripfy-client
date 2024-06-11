import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../store/auth-context";
import { ReactNode } from "react";
import ToastContextProvider from "../store/toast-context";
import LoaderOverlayProvider from "../store/loading-overlay-context";

const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

function ProvidersTree({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoaderOverlayProvider>
        <ToastContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ToastContextProvider>
      </LoaderOverlayProvider>
    </QueryClientProvider>
  );
}

export default ProvidersTree;
