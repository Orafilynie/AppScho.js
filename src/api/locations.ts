import type { Location } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getLocations = async (service: string): Promise<Array<Location>> => {
  const response = await fetch(`${createMyAppSchoAPI(service)}/locations`);
  return response.json();
};
