import type { FacebookFeed, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getFacebookFeed = async (service: string): Promise<Array<FacebookFeed>> => {
  const response = await fetch(`${createAppSchoAPI(service)}/facebook`);
  const json: Response<Array<FacebookFeed>> = await response.json();
  return handleResponse(json);
};
