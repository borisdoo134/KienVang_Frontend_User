import { apiUrl } from "@/utils/url";
import { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { letRefreshToken, shouldRefreshToken } from "@/utils/refresh.token";
import { sendRequest } from "@/utils/fetch.api";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
        courseIds: { type: "courseIds" },
      },
      async authorize(credentials) {
        const request: CredentialsLoginRequest = {
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        };

        const credentialsLoginResponse = await sendRequest<
          ApiResponse<LoginResponse>
        >({
          method: "POST",
          url: `${apiUrl}/auth/login/credentials`,
          headers: {
            "Content-Type": "application/json",
          },
          body: request,
        });

        if (credentialsLoginResponse.status === 200) {
          const user: User = {
            id: credentialsLoginResponse.data.user.accountId.toString(),
            user: credentialsLoginResponse.data.user,
            accessToken: credentialsLoginResponse.data.accessToken,
            expireAt: credentialsLoginResponse.data.expireAt,
            refreshToken: credentialsLoginResponse.data.refreshToken,
          };
          return user;
        } else {
          throw new Error(
            credentialsLoginResponse.message
              ? credentialsLoginResponse.message.toString()
              : "Sai tên tài khoản hoặc mật khẩu!",
          );
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || `${profile.first_name} ${profile.last_name}`,
          email: profile.email,
          image: profile.picture.data.url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "signIn") {
        if (account?.provider !== "credentials") {
          const request: SocialsLoginRequest = {
            email: user.email ?? "",
            name: user.name ?? "",
            avatar: user.image ?? "",
            accountType: account?.provider.toUpperCase() ?? "",
          };
          const socialsLoginResponse = await sendRequest<
            ApiResponse<LoginResponse>
          >({
            method: "POST",
            url: `${apiUrl}/auth/login/socials`,
            headers: {
              "Content-Type": "application/json",
            },
            body: request,
          });

          if (socialsLoginResponse.status === 200) {
            const data = socialsLoginResponse.data;
            if (data) {
              token.user = data.user;
              token.accessToken = data.accessToken;
              token.expireAt = data.expireAt;
              token.refreshToken = data.refreshToken;
            }
          } else {
            throw new Error("Đăng nhập không thành công!");
          }
        } else {
          token.user = user.user;
          token.accessToken = user.accessToken;
          token.expireAt = user.expireAt;
          token.refreshToken = user.refreshToken;
        }
      } else if (trigger === "update") {
        if (session) {
          token.user.name = session.user.name;
          token.user.dob = session.user.dob;
          token.user.gender = session.user.gender;
          token.user.avatar = session.user.avatar;
        }
      }

      if (shouldRefreshToken(token.expireAt)) {
        return letRefreshToken(token);
      }
      return token;
    },
    async session({ session, token, trigger, newSession }) {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.expireAt = token.expireAt;
        session.refreshToken = token.refreshToken;
      }
      if (trigger === "update") {
        if (newSession) {
          session.user.name = newSession.user.name;
          session.user.dob = newSession.user.dob;
          session.user.gender = newSession.user.gender;
          session.user.avatar = newSession.user.avatar;
        }
      }
      return session;
    },
  },
};
