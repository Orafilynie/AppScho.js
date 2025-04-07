import type { ExternalService } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getExternalServices = async (instance: string): Promise<Array<ExternalService>> => {
  const response = await fetch(`${createMyAppSchoAPI(instance)}/webviews`);
  return response.json();
};
