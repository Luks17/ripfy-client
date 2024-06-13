import Constants from "expo-constants";

function getApiEndpoint() {
  const apiPort = parseInt(process.env.API_PORT || "7717");

  return (
    process.env.API_URL ||
    `http://${Constants.expoConfig?.hostUri?.split(":").shift()}:${apiPort}`
  );
}

export default {
  apiEndpoint: getApiEndpoint(),
  apiKey: process.env.API_KEY || "",
  apiTokenExpirationTime: parseInt(
    process.env.API_TOKEN_REFRESH_TIMER || "1140"
  ),
};
