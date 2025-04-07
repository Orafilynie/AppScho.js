import type { NewsFeed, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getNewsFeed = async (instance: string): Promise<Array<NewsFeed>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/news`);
  const json: Response<Array<NewsFeed>> = await response.json();
  return handleResponse(json);
};
