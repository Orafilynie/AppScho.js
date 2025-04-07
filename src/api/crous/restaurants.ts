import type { CrousRestaurant, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getCrousRestaurants = async (instance: string, token: string, crous: string): Promise<Array<CrousRestaurant>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/crous/${crous}/restaurants`, {
    headers: {
      "X-Appscho-Token": token
    }
  });

  const json = await response.json() as Response<Array<CrousRestaurant>>;
  return handleResponse(json);
};
