import { ReactNode, createContext, useState } from "react";
import LoadingOverlay from "../components/feedback/LoadingOverlay";

interface ProviderProps {
  children: ReactNode;
}

export type showLoadingOverlayFunction = () => void;
export type hideLoadingOverlayFunction = () => void;

type Value = {
  showLoadingOverlay: showLoadingOverlayFunction;
  hideLoadingOverlay: hideLoadingOverlayFunction;
};

export const LoadingOverlayContext = createContext({} as Value);

export default function LoaderOverlayProvider({ children }: ProviderProps) {
  const [isShown, setIsShown] = useState(false);

  const showOverlayHandler = () => setIsShown(true);
  const hideOverlayHandler = () => setIsShown(false);

  return (
    <LoadingOverlayContext.Provider
      value={{
        showLoadingOverlay: showOverlayHandler,
        hideLoadingOverlay: hideOverlayHandler,
      }}
    >
      {children}
      {isShown && <LoadingOverlay />}
    </LoadingOverlayContext.Provider>
  );
}
