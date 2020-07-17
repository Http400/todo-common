export interface RefreshTokenRequest {
    userId: string;
    refreshToken: string;
}

export interface RefreshTokenResponse {
    token: string;
}