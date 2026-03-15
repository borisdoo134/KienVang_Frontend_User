"use client";
import { RegisterFieldResponse } from "@/components/register/action";
import OtpForm from "@/components/register/otp-form";
import RegisterComplete from "@/components/register/register-complete";
import RegisterForm from "@/components/register/register-form";
import RegisterNavigator from "@/components/register/register-navigator";

import { Box, MobileStepper } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [registerField, setRegisterField] =
    useState<RegisterFieldResponse | null>(null);
  console.log(">>>check step: ", step);
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
        onClearData={() => setRegisterField(null)}
      />

      {step === 1 && (
        <RegisterForm
          setStep={setStep}
          registerField={registerField}
          setRegisterField={setRegisterField}
        />
      )}

      {step === 2 && (
        <OtpForm registerField={registerField} setStep={setStep} />
      )}

      {step === 3 && <RegisterComplete />}

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

export default Register;
