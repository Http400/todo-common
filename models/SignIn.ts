export interface SignInRequest {
    username: string;
    password: string;
}

export interface SignInResponse {
    authToken: string;
    refreshToken: string;
}