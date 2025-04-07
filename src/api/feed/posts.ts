import type { FeedPost } from "~/models";

import { createFeedAPI } from "~/core/constants";

export const getFeedPosts = async (service: string): Promise<Array<FeedPost>> => {
  const response = await fetch(`${createFeedAPI(service)}/posts`);
  return response.json();
};
