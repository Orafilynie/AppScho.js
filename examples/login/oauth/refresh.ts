import * as AppScho from "../../../src";
import { credentials } from "../../_credentials";

void async function main() {
  const token = await AppScho.refreshOAuthToken(credentials.instance, credentials.refresh);
  console.log("Refreshed AppScho token :", token.access_token);
  console.log("New refresh token :", token.refresh_token);
}();