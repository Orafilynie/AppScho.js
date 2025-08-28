export interface OAuthLogin {
  token_type: string
  scope: string
  access_token: string
  refresh_token: string
}

export interface OAuthUserData {
  uid: string
  firstname: string
  lastname: string
  program: string
  promotion: string
  picture: string
  id_token: string
}