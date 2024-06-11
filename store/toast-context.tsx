import { ReactNode, createContext, useReducer } from "react";
import ToastNotification from "../components/feedback/ToastNotification";

interface ProviderProps {
  children: ReactNode;
}

export type ToastTypes = "success" | "info" | "warning" | "error";
export type DisplayToastFunction = (type: ToastTypes, msg: string) => void;

type Value = {
  displayToast: DisplayToastFunction;
};

type ToastValues = {
  isToastDisplayed: boolean;
  toastType: ToastTypes;
  msg: string;
};

function toastReducer(
  state: ToastValues,
  action: {
    type: "display" | "hide";
    payload?: { toastType: ToastTypes; msg: string };
  }
): ToastValues {
  if (action.type === "display") {
    return {
      isToastDisplayed: true,
      toastType: action.payload!.toastType,
      msg: action.payload!.msg,
    };
  } else if (action.type === "hide") {
    return {
      isToastDisplayed: false,
      toastType: "info",
      msg: "",
    };
  } else {
    return state;
  }
}

export const ToastContext = createContext<Value>({} as Value);

export default function ToastContextProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(toastReducer, {
    isToastDisplayed: false,
    toastType: "info",
    msg: "",
  });

  const hideToastHandler = () => dispatch({ type: "hide" });

  function displayToastHandler(type: ToastTypes, msg: string) {
    dispatch({ type: "display", payload: { toastType: type, msg } });
  }

  return (
    <ToastContext.Provider
      value={{
        displayToast: displayToastHandler,
      }}
    >
      {children}
      {state.isToastDisplayed && (
        <ToastNotification
          type={state.toastType}
          message={state.msg}
          closeToast={hideToastHandler}
        />
      )}
    </ToastContext.Provider>
  );
}
