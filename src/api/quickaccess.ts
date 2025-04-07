import type { QuickAccess } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getQuickAccesses = async (instance: string): Promise<Array<QuickAccess>> => {
  const response = await fetch(`${createMyAppSchoAPI(instance)}/quickaccess`);
  return response.json();
};
