import * as cookie from "cookie";
import { authCookieName } from "../../config";
import { getExternalHost } from "@utils/env";

export default function clearAuthCookie() {
  document.cookie = cookie.serialize(authCookieName, "", {
    maxAge: -1,
    sameSite: true,
    path: "/",
    domain: `.${getExternalHost()}`
  });
}
