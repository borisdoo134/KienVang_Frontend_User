import NextAuthWrapper from "@/wrapper/next-auth/next.auth.wrapper";
import ProgressBarWrapper from "@/wrapper/progress-bar/progress.bar.wrapper";
import { quicksand } from "@/wrapper/theme/theme";
import ThemeWrapper from "@/wrapper/theme/theme.wrapper";
import { UserAvatarWrapper } from "@/wrapper/user-avatar/user.avatar.wrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        <AppRouterCacheProvider>
          <ThemeWrapper>
            <NextAuthWrapper>
              <ProgressBarWrapper>
                <UserAvatarWrapper>{children}</UserAvatarWrapper>
              </ProgressBarWrapper>
            </NextAuthWrapper>
          </ThemeWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
