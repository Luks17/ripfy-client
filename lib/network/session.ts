import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "./config";
import { ApiResponse, AuthExpectedData } from "./response";
import { REFRESH_TOKEN } from "../constants/tokens";
import {
  AuthenticateFunction,
  ClearSessionFunction,
} from "../../store/auth-context";

export async function tryRefreshSession(
  authenticate: AuthenticateFunction,
  clearSession: ClearSessionFunction
) {
  try {
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);

    if (!refreshToken) return clearSession();

    const res = await fetch(`${Config.apiEndpoint}/api/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ auth_token: refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const authData: ApiResponse<AuthExpectedData> = await res.json();

    if (!authData.success) return clearSession();

    authenticate(authData.data!);
  } catch (e) {
    console.log(e);
    clearSession();
  }
}
