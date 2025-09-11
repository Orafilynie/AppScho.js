import { INSTANCES } from "~/core/constants";
import { generateRandomHexString, validateInstance } from "~/utils/oauth";

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
