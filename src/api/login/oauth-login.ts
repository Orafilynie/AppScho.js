import type { OAuthLogin, OAuthUserData, Response, User } from "~/models";

import { INSTANCES, createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";
import { formatUserData, validateInstance } from "~/utils/oauth";

export const loginWithOAuth = async (instance: string, oauthToken: string): Promise<User> => {
  try {
    validateInstance(instance);

    const instanceConfig = INSTANCES.find(inst => inst.id === instance);

    const bodyParams = new URLSearchParams({
      code: oauthToken,
      grant_type: "authorization_code",
    });

    if (instanceConfig?.exchangeParams) {
      Object.entries(instanceConfig.exchangeParams).forEach(([key, value]) => {
        bodyParams.append(key, value);
      });
    }

    const tokenResponse = await fetch(`${createAppSchoAPI(instance)}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: bodyParams.toString()
    });

    if (!tokenResponse.ok) {
      throw new Error(`OAuth token exchange failed: ${tokenResponse.status} ${tokenResponse.statusText}`);
    }

    const tokenData: OAuthLogin = await tokenResponse.json();

    if (!tokenData.access_token) {
      throw new Error("Invalid OAuth response: missing access_token");
    }

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
