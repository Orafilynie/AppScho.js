import type { JWTPayload } from "~/models";

export const decodeJWT = (token: string): JWTPayload => {
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

export const getProgramFromToken = (token: string): null | string => {
  try {
    const decoded = decodeJWT(token);
    return decoded.department || null;
  }
  catch (error) {
    return null;
  }
};
