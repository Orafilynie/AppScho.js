import type { OAuthLogin, OAuthUserData, Response, User } from "~/models";

import { createAppSchoAPI, INSTANCES } from "~/core/constants";
import { CASNotSupportedError } from "~/core/errors";
import { handleResponse } from "~/core/handler";

const formatUserData = (userData: OAuthUserData, token: string, refreshToken?: string): User => {
  return {
    firstname: userData.firstname,
    id_token: userData.id_token,
    lastname: userData.lastname,
    picture: userData.picture || "",
    program: userData.program,
    refreshToken: refreshToken,
    token: token
  };
};

const generateRandomHexString = (length: number = 8): string => {
  const chars = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const validateInstance = (instance: string): void => {
  const instanceData = INSTANCES.find((inst) => inst.id === instance);

  if (!instanceData) {
    throw new Error(`Unknown instance: ${instance}`);
  }

  if (!instanceData.casurl || !instanceData.clientid) {
    throw new CASNotSupportedError(instance);
  }
};

export const getCASURL = (instance: string): string => {
  validateInstance(instance);
  const instanceData = INSTANCES.find((inst) => inst.id === instance)!;

  const state = generateRandomHexString(8);

  const redirectUri = instanceData.uriend === false
    ? `https://${instance}.callback.oauth.appscho.com`
    : `https://${instance}.callback.oauth.appscho.com/`;

  const params = new URLSearchParams({
    client_id: instanceData.clientid!,
    redirect_uri: redirectUri,
    response_type: "code",
    state: state
  });

  let queryString = params.toString();

  if (instanceData.scope) {
    queryString += `&scope=${instanceData.scope}`;
  }

  return `${instanceData.casurl}?${queryString}`;
};


export const loginWithOAuth = async (instance: string, oauthToken: string): Promise<User> => {
  try {
    validateInstance(instance);

    const tokenResponse = await fetch(`${createAppSchoAPI(instance)}/oauth/token`, {
      body: `code=${oauthToken}&grant_type=authorization_code`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
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
