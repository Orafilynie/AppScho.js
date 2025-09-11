import type { Response, User } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";
import { getProgramFromToken } from "~/utils/jwt";

export const loginWithCredentials = async (instance: string, username: string, password: string): Promise<User> => {
  try {
    const response = await fetch(`${createAppSchoAPI(instance)}/login`, {
      headers: {
        "X-Appscho-EncodedToken": "1",
        "X-Appscho-Id": username,
        "X-Appscho-Token": btoa(password)
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const json: Response<User> = await response.json();
    const user = handleResponse(json);

    const program = getProgramFromToken(user.token);

    return { ...user, program: program || user.program };
  }
  catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AppScho API");
    }
    throw error;
  }
};
