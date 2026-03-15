import { } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: AccountResponse;
        accessToken: string;
        expireAt: string;
        refreshToken: string;
    }

    interface DefaultUser {
        user: AccountResponse;
        accessToken: string;
        expireAt: string;
        refreshToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: AccountResponse;
        accessToken: string;
        expireAt: string;
        refreshToken: string;
    }
}