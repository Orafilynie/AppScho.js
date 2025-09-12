export interface CrousRestaurant {
  closed: boolean;
  comment: string;
  contact: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  id: string;
  kind: string;
  name: string;
  picture: string;
  schedule: Array<{
    evening: boolean;
    morning: boolean;
    noon: boolean;
  }>;
}
