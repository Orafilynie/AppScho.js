export interface JWTPayload {
  nbf: number
  exp: number
  iss: string
  sub: string
  uid: number
  jti: string
  st: string
  tgt: string
  department: string
}
