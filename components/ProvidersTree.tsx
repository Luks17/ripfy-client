import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../store/auth-context";
import { ReactNode } from "react";
import ToastContextProvider from "../store/toast-context";

const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

function ProvidersTree({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ToastContextProvider>
    </QueryClientProvider>
  );
}

export default ProvidersTree;
