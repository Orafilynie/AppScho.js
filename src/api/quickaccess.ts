import type { QuickAccess } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getQuickAccesses = async (service: string): Promise<Array<QuickAccess>> => {
  const response = await fetch(`${createMyAppSchoAPI(service)}/quickaccess`);
  return response.json();
};
