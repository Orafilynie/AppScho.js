import { credentials } from "../../_credentials";
import * as AppScho from "../../../src";

void async function main() {
  const url = AppScho.getCASURL(credentials.instance);
  console.log("Instance :", credentials.instance);
  console.log("CAS URL :", url);
}();
