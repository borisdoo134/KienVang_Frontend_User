"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import Image from "next/image";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { buttonStyle } from "@/utils/auth/buttonStyle";
import { RegisterFieldResponse } from "./action";
import { sendRequest } from "@/utils/fetch.api";
import { apiUrl } from "@/utils/url";

const OtpForm = ({
  setStep,
  registerField,
}: {
  setStep: React.Dispatch<SetStateAction<number>>;
  registerField: RegisterFieldResponse | null;
}) => {
  const [otp, setOtp] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendEmail = async () => {
    if (timer > 0 || !registerField) return;
    setTimer(60);

    const registerRequest: RegisterRequest = {
      name: registerField?.name.value,
      email: registerField?.email.value,
      password: registerField?.password.value,
    };

    await sendRequest<ApiResponse<void>>({
      url: `${apiUrl}/user/request-register`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: registerRequest,
    });
  };

  const handleSubmit = async () => {
    const activeResponse = await sendRequest<ApiResponse<void>>({
      url: `${apiUrl}/user/active/${otp}`,
    });

    if (activeResponse.status === 200) {
      setStep((prev) => prev + 1);
    } else {
      setErrorMessage(activeResponse.message.toString());
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Image src={`/verify.png`} alt="app logo" width={100} height={100} />

      <Typography
        variant="h6"
        component="p"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Xác Thực Email
      </Typography>

      <Typography
        variant="body2"
        component="p"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "200",
        }}
      >
        Chúng tôi vừa gửi mã OTP 6 chữ số đến email:{" "}
        <span className="font-bold text-sm">{registerField?.email.value}</span>{" "}
        vui lòng kiểm tra hòm thư và nhập mã để hoàn tất xác thực!
      </Typography>

      <MuiOtpInput
        length={6}
        value={otp}
        onChange={handleChange}
        autoFocus
        sx={{
          gap: 1,
          pb: 3,
          "& .MuiOutlinedInput-root": {
            color: "white",
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: "8px",

            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#90caf9",
              borderWidth: "2px",
            },
          },
          "& .MuiOutlinedInput-input": {
            caretColor: "white",
          },
        }}
      />

      {errorMessage && (
        <p className="text-red-500 text-sm mb-3 ml-2 flex items-center gap-x-1">
          <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
          {errorMessage}
        </p>
      )}

      <Button
        fullWidth
        variant="contained"
        size="large"
        type="submit"
        disabled={otp.length < 6}
        sx={[
          buttonStyle,
          {
            "&.Mui-disabled": {
              bgcolor: "rgba(255, 255, 255, 0.5)",
              color: "rgba(255, 255, 255, 0.5)",
              cursor: "not-allowed",
              pointerEvents: "auto",
            },
          },
        ]}
        onClick={handleSubmit}
      >
        Xác thực
      </Button>

      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(255, 255, 255, 0.3)",
          mb: "25px",
        }}
      />

      <Typography
        variant="caption"
        component="p"
        sx={{
          color: "white",
          textAlign: "center",
          fontWeight: "200",
        }}
      >
        Không nhận được mã OTP?
        <span
          onClick={handleResendEmail}
          className={`font-bold text-sm ml-1.5 transition-all duration-200 
      ${
        timer > 0
          ? "text-gray-400 cursor-not-allowed pointer-events-none"
          : "text-red-500 cursor-pointer hover:underline"
      }
    `}
        >
          {timer > 0 ? `Gửi lại (${timer}s)` : "Gửi lại"}
        </span>
      </Typography>
    </Box>
  );
};

export default OtpForm;
