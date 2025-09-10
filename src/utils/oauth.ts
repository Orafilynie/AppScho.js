import type { User, OAuthUserData } from "~/models";

import { INSTANCES } from "~/core/constants";
import { CASNotSupportedError } from "~/core/errors";
import { getDepartmentFromToken } from "~/utils/jwt";

export const formatUserData = (userData: OAuthUserData, token: string, refreshToken?: string): User => {
  const department = getDepartmentFromToken(token);

  return {
    department: department,
    firstname: userData.firstname,
    id_token: userData.id_token,
    lastname: userData.lastname,
    picture: userData.picture || "",
    program: userData.program,
    refreshToken: refreshToken,
    token: token
  };
};

export const generateRandomHexString = (length: number = 8): string => {
  const chars = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const validateInstance = (instance: string): void => {
  const instanceData = INSTANCES.find((inst) => inst.id === instance);

  if (!instanceData) {
    throw new Error(`Unknown instance: ${instance}`);
  }

  if (!instanceData.casurl || !instanceData.clientid) {
    throw new CASNotSupportedError(instance);
  }
};