import { getExternalHost, isHttps } from "@utils/env";
import * as cookie from "cookie";
import { authCookieName } from "../../config";

export default function setAuthCookie(jwt: string) {
  const domain = (getExternalHost().includes('localhost') || getExternalHost().includes('test.hexbear')) ? "" : `.${getExternalHost()}`
  document.cookie = cookie.serialize(authCookieName, jwt, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    secure: isHttps(),
    sameSite: "lax",
    path: "/",
    domain: domain // required for hexbear dashboard to access cookie
  });
}
