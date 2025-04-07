import type { Response, TwitterFeed } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getTwitterFeed = async (service: string): Promise<Array<TwitterFeed>> => {
  const response = await fetch(`${createAppSchoAPI(service)}/twitter`);
  const json: Response<Array<TwitterFeed>> = await response.json();
  return handleResponse(json);
};
