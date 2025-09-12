export interface FeedPost {
  channel: {
    name: string;
    picture: null | string;
    uuid: string;
  };
  content: string;
  created_at: string;
  picture: string;
  pinned: boolean;
  reactions: {
    like: {
      count: number;
      self: boolean;
    };
  };
  uuid: string;
}
