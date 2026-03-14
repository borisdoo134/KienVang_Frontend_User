import AppHeader from "@/components/header/app.header";
import { Suspense } from "react";

const SignedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-max relative">
      <Suspense>
        <AppHeader />
      </Suspense>
      {children}
    </div>
  );
};

export default SignedLayout;
