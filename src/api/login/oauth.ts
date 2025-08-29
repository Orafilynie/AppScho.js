import type { Response, User, OAuthLogin, OAuthUserData } from "~/models";

import { createAppSchoAPI, INSTANCES } from "~/core/constants";
import { handleResponse } from "~/core/handler";
import { CASNotSupportedError } from "~/core/errors";

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

const generateRandomHexString = (length: number = 8): string => {
  const chars = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const getCASURL = (instance: string): string => {
  const instanceData = INSTANCES.find(inst => inst.id === instance);
  
  if (!instanceData) {
    throw new Error(`Unknown instance: ${instance}`);
  }

  if (!instanceData.casurl || !instanceData.clientid) {
    throw new CASNotSupportedError(instance);
  }

  const state = generateRandomHexString(8);

  const redirectUri = instanceData.uriend === false 
    ? `https://${instance}.callback.oauth.appscho.com`
    : `https://${instance}.callback.oauth.appscho.com/`;

  const params = new URLSearchParams({
    client_id: instanceData.clientid,
    response_type: "code",
    redirect_uri: redirectUri,
    state: state
  });

  let query = params.toString();

  if (instanceData.scope) {
    query += `&scope=${instanceData.scope}`;
  }

  return `${instanceData.casurl}?${query}`;
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