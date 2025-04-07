import type { NewsFeed, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getNewsFeed = async (service: string): Promise<Array<NewsFeed>> => {
  const response = await fetch(`${createAppSchoAPI(service)}/news`);
  const json: Response<Array<NewsFeed>> = await response.json();
  return handleResponse(json);
};
