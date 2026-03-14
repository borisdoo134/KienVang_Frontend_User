"use client";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

const ProgressBarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressProvider
        height="3px"
        color="#E7C45C"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarWrapper;
