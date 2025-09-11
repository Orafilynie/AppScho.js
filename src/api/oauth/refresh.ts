import type { OAuthLogin, OAuthUserData, Response, User } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";
import { formatUserData } from "~/utils/oauth";

export const refreshOAuthToken = async (instance: string, refreshToken: string): Promise<OAuthLogin> => {
  try {
    if (!refreshToken) {
      throw new Error("Refresh token is required");
    }

    const response = await fetch(`${createAppSchoAPI(instance)}/oauth/refresh`, {
      body: `refresh_token=${refreshToken}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status} ${response.statusText}`);
    }

    const tokenData: OAuthLogin = await response.json();

    if (!tokenData.access_token) {
      throw new Error("Invalid refresh response: missing access_token");
    }

    return tokenData;
  }
  catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AppScho API");
    }
    throw error;
  }
};

export const refreshOAuthTokenWithUser = async (instance: string, refreshToken: string): Promise<User> => {
  try {
    const tokenData = await refreshOAuthToken(instance, refreshToken);

    const userResponse = await fetch(`${createAppSchoAPI(instance)}/whoami`, {
      headers: {
        "X-Appscho-Token": tokenData.access_token
      }
    });

    if (!userResponse.ok) {
      throw new Error(`User data fetch failed: ${userResponse.status} ${userResponse.statusText}`);
    }

    const userJson: Response<OAuthUserData> = await userResponse.json();
    const userData = handleResponse(userJson);

    return formatUserData(userData, tokenData.access_token, tokenData.refresh_token);
  }
  catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error: Unable to connect to AppScho API");
    }
    throw error;
  }
};
