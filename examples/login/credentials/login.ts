import { credentials } from "../../_credentials";
import * as AppScho from "../../../src";

void async function main() {
  const user = await AppScho.loginWithCredentials(credentials.instance, credentials.username, credentials.password);
  console.log("Hello", user.firstname, user.lastname, "from establishment", user.program, "!");
}();
