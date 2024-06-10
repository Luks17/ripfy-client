import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../store/auth-context";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

function ProvidersTree({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  );
}

export default ProvidersTree;
