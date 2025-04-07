import type { FeedChannel } from "~/models";

import { createFeedAPI } from "~/core/constants";

export const getFeedChannels = async (instance: string): Promise<Array<FeedChannel>> => {
  const response = await fetch(`${createFeedAPI(instance)}/channels`);
  return response.json();
};
