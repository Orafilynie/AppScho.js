export interface User {
  firstname: string
  id_token: string
  lastname: string
  /**
   * Can be an empty string.
   */
  picture: string
  program: string
  /**
   * Only available when using OAuth login
   */
  refreshToken?: string
  /**
   * Should be used for authenticated requests.
   */
  token: string
}
