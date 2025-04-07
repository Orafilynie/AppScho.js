import type { Metadata, Platform, Response } from "~/models";

import { handleResponse } from "~/core/handler";

export const getMetadata = async (instance: string, platform: Platform): Promise<Metadata> => {
  const response = await fetch(`https://metadata.appscho.com/versions/${instance}/${platform}/production`);
  const json: Response<Metadata> = await response.json();
  return handleResponse(json);
};
