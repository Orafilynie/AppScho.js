import * as AppScho from "../../../src";
import { credentials } from "../../_credentials";

void async function main() {
  const url = await AppScho.getCASURL(credentials.instance);
  console.log("Instance :", credentials.instance);
  console.log("CAS URL :", url);
}();