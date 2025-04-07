import type { Response } from "~/models/response";

import { InternalServerError, NotFoundError, UnauthorizedError } from "./errors";

export const handleResponse = <T>(response: Response<T>): T => {
  switch (response.state) {
    case "ok" : return response.response;

    case "unauthorized":
      throw new UnauthorizedError();

    case "internal_server_error":
      throw new InternalServerError();

    default:
      throw new NotFoundError();
  }
};
