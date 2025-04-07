import type { Crous, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const getCrous = async (instance: string, token: string): Promise<Array<Crous>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/crous`, {
    headers: {
      "X-Appscho-Token": token
    }
  });

  const json: Response<Array<Crous>> = await response.json();
  return handleResponse(json);
};
