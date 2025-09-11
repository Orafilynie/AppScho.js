import type { Lesson, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { NoPlanningSubscriptionError } from "~/core/errors";
import { handleResponse } from "~/core/handler";

export const getPlanning = async (instance: string, token: string): Promise<Array<Lesson>> => {
  try {
    const response = await fetch(`${createAppSchoAPI(instance)}/planning`, {
      headers: {
        "X-Appscho-Token": token
      }
    });

    if (response.status === 500) {
      throw new NoPlanningSubscriptionError();
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const json: Response<Array<Lesson>> = await response.json();
    return handleResponse(json);
  }
  catch (error) {
    if (error instanceof NoPlanningSubscriptionError) {
      throw error;
    }
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AppScho API");
    }
    throw error;
  }
};
