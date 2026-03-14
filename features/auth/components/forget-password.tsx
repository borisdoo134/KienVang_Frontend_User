"use client";
import { ForgetPasswordFieldResponse } from "@/components/forget-password/action";
import ForgetPasswordForm from "@/components/forget-password/forget-password-form";
import OtpForm from "@/components/forget-password/otp-form";
import ResetPasswordComplete from "@/components/forget-password/reset-password-complete";
import ResetPasswordForm from "@/components/forget-password/reset-password-form";
import RegisterNavigator from "@/components/register/register-navigator";
import { Box, MobileStepper } from "@mui/material";
import { useState } from "react";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const totalSteps = 5;
  const [forgetPasswordField, setForgetPasswordField] =
    useState<ForgetPasswordFieldResponse | null>(null);
  return (
    <Box
      sx={{
        width: "420px",
        maxWidth: "90%",
        height: "auto",
        p: 4,
        pt: 2,
        backgroundColor: "rgba(20, 20, 20, 0.5)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",

        display: "flex",
        flexDirection: "column",

        position: "relative",
        overflow: "hidden",
      }}
    >
      <RegisterNavigator
        step={step}
        setStep={setStep}
        onClearData={() => setForgetPasswordField(null)}
      />

      {step === 1 && (
        <ForgetPasswordForm
          setStep={setStep}
          forgetPasswordField={forgetPasswordField}
          setForgetPasswordField={setForgetPasswordField}
        />
      )}

      {step === 2 && (
        <OtpForm
          forgetPasswordField={forgetPasswordField}
          setStep={setStep}
          setCode={setCode}
        />
      )}

      {step === 3 && <ResetPasswordForm setStep={setStep} code={code} />}

      {step === 4 && <ResetPasswordComplete />}

      <MobileStepper
        variant="progress"
        steps={totalSteps}
        position="static"
        activeStep={step}
        nextButton={null}
        backButton={null}
        sx={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          p: 0,
          "& .MuiLinearProgress-root": {
            width: "100%",
          },
        }}
      />
    </Box>
  );
};

export default ForgetPassword;
