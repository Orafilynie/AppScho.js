import type { Response, User } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

const decodeJWT = (token: string): any => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT format");
    }

    const payload = parts[1];
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  }
  catch (error) {
    throw new Error(`Failed to decode JWT: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
};

const getDepartmentFromToken = (token: string): null | string => {
  try {
    const decoded = decodeJWT(token);
    return decoded.department || null;
  }
  catch (error) {
    return null;
  }
};

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

    const department = getDepartmentFromToken(user.token);

    return { ...user, department };
  }
  catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AppScho API");
    }
    throw error;
  }
};
