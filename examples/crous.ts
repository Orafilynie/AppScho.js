import * as AppScho from "../src";
import { credentials } from "./_credentials";
/**
* Choose "credentials" for logging in with credentials, else choose "oauth" for logging in with an oauth token.
*/
const authType = "credentials";
void async function main() {
  // Initializate the token string.
  let token: string = "";

  // Login with the choosen authentication type.
  if (authType === "credentials") {
    const { token: userToken } = await AppScho.loginWithCredentials(credentials.instance, credentials.username, credentials.password);
    token = userToken;
  }
  else if (authType === "oauth") {
    const { token: userToken } = await AppScho.loginWithOAuth(credentials.instance, credentials.oauth);
    token = userToken;
  }

  // Retrieve the list of all Crous available for this instance.
  const crous = await AppScho.getCrous(credentials.instance, token);

  // Let's retrieve restaurants from the first Crous.
  const restaurants = await AppScho.getCrousRestaurants(credentials.instance, token, crous[0].id);
  console.log(restaurants);
}();
