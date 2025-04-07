import type { CareerEvent, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";

export const getCareerEvents = async (instance: string): Promise<Response<CareerEvent>> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/career/events`);
  return response.json();
};
