import type { ExternalService } from "~/models";

import { createMyAppSchoAPI } from "~/core/constants";

export const getExternalServices = async (service: string): Promise<Array<ExternalService>> => {
  const response = await fetch(`${createMyAppSchoAPI(service)}/webviews`);
  return response.json();
};
