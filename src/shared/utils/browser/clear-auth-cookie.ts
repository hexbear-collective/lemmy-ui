import * as cookie from "cookie";
import { authCookieName } from "../../config";
import { getExternalHost } from "@utils/env";

export default function clearAuthCookie() {
  const domain = (getExternalHost().includes('localhost') || getExternalHost().includes('test.hexbear')) ? "" : `.${getExternalHost()}`
  document.cookie = cookie.serialize(authCookieName, "", {
    maxAge: -1,
    sameSite: "lax",
    path: "/",
    domain: domain
  });
}
