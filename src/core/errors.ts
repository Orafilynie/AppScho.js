export class AppSchoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppSchoError";
  }
}

export class InternalServerError extends AppSchoError {
  constructor() {
    super("Internal server error, please try again later");
    this.name = "InternalServerError";
  }
}

export class NotFoundError extends AppSchoError {
  constructor() {
    super("Not found, your instance probably doesn't have this feature");
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppSchoError {
  constructor() {
    super("Unauthorized, please check your credentials or token");
    this.name = "UnauthorizedError";
  }
}

export class CASNotSupportedError extends AppSchoError {
  constructor(instance: string) {
    super(`CAS authentication is not supported for instance "${instance}"`);
    this.name = "CASNotSupportedError";
  }
}