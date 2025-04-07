import type { Profile } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getProfiles = async (service: string): Promise<Array<Profile>> => {
  const response = await fetch(`${createMyAppSchoAPI(service)}/profiles`);
  return response.json();
};
