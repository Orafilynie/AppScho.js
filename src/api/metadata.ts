import type { Metadata, Platform, Response } from "~/models";

import { handleResponse } from "~/core/handler";

export const getMetadata = async (service: string, platform: Platform): Promise<Metadata> => {
  const response = await fetch(`https://metadata.appscho.com/versions/${service}/${platform}/production`);
  const json: Response<Metadata> = await response.json();
  return handleResponse(json);
};
