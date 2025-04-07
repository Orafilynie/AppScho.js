import type { Response, YouTubeFeed } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getYouTubeFeed = async (instance: string): Promise<Array<YouTubeFeed>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/youtube`);
  const json: Response<Array<YouTubeFeed>> = await response.json();
  return handleResponse(json);
};
