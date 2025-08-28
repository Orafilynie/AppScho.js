import type { Response, User, OAuthLogin, OAuthUserData } from "~/models";

import { createAppSchoAPI } from "~/core/constants";
import { handleResponse } from "~/core/handler";

const formatUserData = (userData: OAuthUserData, token: string, refreshToken?: string): User => {
  return {
    firstname: userData.firstname,
    id_token: userData.id_token,
    lastname: userData.lastname,
    picture: userData.picture || "",
    program: userData.program,
    token: token,
    refreshToken: refreshToken
  };
};

export const loginWithOAuth = async (instance: string, oauthToken: string): Promise<User> => {
  const tokenResponse = await fetch(`${createAppSchoAPI(instance)}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `code=${oauthToken}&grant_type=authorization_code`
  });

  const tokenData: OAuthLogin = await tokenResponse.json();

  const userResponse = await fetch(`${createAppSchoAPI(instance)}/whoami`, {
    headers: {
      "X-Appscho-Token": tokenData.access_token
    }
  });

  const userJson: Response<OAuthUserData> = await userResponse.json();
  const userData = handleResponse(userJson);

  return formatUserData(userData, tokenData.access_token, tokenData.refresh_token);
};

export const refreshOAuthToken = async (instance: string, refreshToken: string): Promise<OAuthLogin> => {
  const response = await fetch(`${createAppSchoAPI(instance)}/oauth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `refresh_token=${refreshToken}`
  });

  return await response.json();
};