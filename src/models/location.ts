export interface Location {
  description: string;
  latitude: string;
  longitude: string;
  map: {
    url: never; // TODO
  };
  map_x: never; // TODO
  map_y: never; // TODO
  picture: {
    url: never; // TODO
  };
  sublocations: Array<Location>;
  title: string;
  virtual: boolean;
  visibility: string;
}
