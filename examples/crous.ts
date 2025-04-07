import * as AppScho from "../src";
import { credentials } from "./_credentials";

void async function main() {
  const { token } = await AppScho.login(credentials.instance, credentials.username, credentials.password);

  // Retrieve the list of all Crous available for this instance.
  const crous = await AppScho.getCrous(credentials.instance, token);

  // Let's retrieve restaurants from the first Crous.
  const restaurants = await AppScho.getCrousRestaurants(credentials.instance, token, crous[0].id);
  console.log(restaurants);
}();
