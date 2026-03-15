"use client";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

const ProgressBarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressProvider
        height="3px"
        color="#FFC103"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarWrapper;
