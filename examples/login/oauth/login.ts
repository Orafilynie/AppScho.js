import { credentials } from "../../_credentials";
import * as AppScho from "../../../src";
import { INSTANCES } from "../../../src";

void async function main() {
  const user = await AppScho.loginWithOAuth(credentials.instance, credentials.oauth);
  const instance = INSTANCES.find((inst) => inst.id === credentials.instance);
  console.log("Hello", user.firstname, user.lastname, "from establishment", instance?.name || "Unknown", "and your class is", user.program, "!");
  console.log("Refresh token :", user.refreshToken);
}();
