import type { EventsFeed, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getEventsFeed = async (service: string): Promise<Array<EventsFeed>> => {
  const response = await fetch(`${createAppSchoAPI(service)}/events`);
  const json: Response<Array<EventsFeed>> = await response.json();
  return handleResponse(json);
};
