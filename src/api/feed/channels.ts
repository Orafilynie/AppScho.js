import type { FeedChannel } from "~/models";

import { createFeedAPI } from "~/core/constants";

export const getFeedChannels = async (service: string): Promise<Array<FeedChannel>> => {
  const response = await fetch(`${createFeedAPI(service)}/channels`);
  return response.json();
};
