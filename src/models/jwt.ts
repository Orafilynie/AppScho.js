export interface JWTPayload {
  department: string
  exp: number
  iss: string
  jti: string
  nbf: number
  st: string
  sub: string
  tgt: string
  uid: number
}
