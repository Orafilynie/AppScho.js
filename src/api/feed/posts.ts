import type { FeedPost } from "~/models";

import { createFeedAPI } from "~/core/constants";

export const getFeedPosts = async (instance: string): Promise<Array<FeedPost>> => {
  const response = await fetch(`${createFeedAPI(instance)}/posts`);
  return response.json();
};
