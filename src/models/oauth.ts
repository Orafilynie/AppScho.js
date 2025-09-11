export interface OAuthLogin {
  access_token: string
  refresh_token: string
  scope: string
  token_type: string
}

export interface OAuthUserData {
  firstname: string
  id_token: string
  lastname: string
  picture: string
  program: string
  promotion: string
  uid: string
}
