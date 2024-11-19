export interface SignInRequest {
  provider: "TELEGRAM";
  code: string;
}
export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}
