import type { Lesson, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getPlanning = async (instance: string, token: string): Promise<Array<Lesson>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/planning`, {
    headers: {
      "X-Appscho-Token": token
    }
  });

  const json: Response<Array<Lesson>> = await response.json();
  return handleResponse(json);
};
