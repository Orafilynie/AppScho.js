export type Response<T> = { timestamp: string } & (
  | { // 200
    response: T
    state: "ok"
  }
  | { // 401
    message: string
    state: "unauthorized"
  }
  | { // 500
    state: "internal_server_error"
  }
 );
