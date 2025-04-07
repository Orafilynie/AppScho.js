import type { CareerEvent, Response } from "~/models";

import { createAppSchoAPI } from "~/core/constants";

export const getCareerEvents = async (service: string): Promise<Response<CareerEvent>> => {
  const response = await fetch(`${createAppSchoAPI(service)}/career/events`);
  return response.json();
};
