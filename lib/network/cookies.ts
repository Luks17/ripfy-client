export function parseAuthCookie(headers: Headers) {
  const cookieHeader = headers.get("set-cookie");

  let authToken = null;

  if (cookieHeader) {
    const cookie = cookieHeader.split(";")[0];
    const [name, value] = cookie.split("=");
    if (name === "auth-token") {
      authToken = value;
    }
  }

  return authToken;
}
