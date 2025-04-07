import * as AppScho from "../src";
import { credentials } from "./_credentials";

void async function main() {
  const user = await AppScho.login(credentials.instance, credentials.username, credentials.password);
  console.log("Hello", user.firstname, user.lastname, "from establishment", user.program, "!");
}();
