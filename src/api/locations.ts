import type { Location } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getLocations = async (instance: string): Promise<Array<Location>> => {
  const response = await fetch(`${createMyAppSchoAPI(instance)}/locations`);
  return response.json();
};
