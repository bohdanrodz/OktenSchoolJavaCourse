export interface IUserWithTokens {      // interface for user with access and refresh tokens
    id: number;     // object properties
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}