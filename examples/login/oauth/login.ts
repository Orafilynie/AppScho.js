import * as AppScho from "../../../src";
import { credentials } from "../../_credentials";

void async function main() {
  const user = await AppScho.loginWithOAuth(credentials.instance, credentials.oauth);
  console.log("Hello", user.firstname, user.lastname, "from establishment", user.program, "!");
  console.log("Refresh token :", user.refreshToken);
}();