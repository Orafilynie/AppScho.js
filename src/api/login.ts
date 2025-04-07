import type { Response, User } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

export const login = async (instance: string, username: string, password: string): Promise<User> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/login`, {
    headers: {
      "X-Appscho-EncodedToken": "1",
      "X-Appscho-Id": username,
      "X-Appscho-Token": btoa(password)
    }
  });

  const json: Response<User> = await response.json();
  return handleResponse(json);
};
