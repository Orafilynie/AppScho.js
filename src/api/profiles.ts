import type { Profile } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getProfiles = async (instance: string): Promise<Array<Profile>> => {
  const response = await fetch(`${createMyAppSchoAPI(instance)}/profiles`);
  return response.json();
};
