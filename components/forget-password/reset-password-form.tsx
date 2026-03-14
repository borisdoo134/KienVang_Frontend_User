"use client";
import { buttonStyle } from "@/utils/auth/buttonStyle";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import { sendChangePasswordRequest } from "./action";
import { glassTextFieldStyle } from "@/utils/auth/formStyles";

const ResetPasswordForm = ({
  setStep,
  code,
}: {
  setStep: React.Dispatch<SetStateAction<number>>;
  code: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [showRePassword, setShowRePassword] = useState(false);

  const sendChangePasswordRequestExpand = sendChangePasswordRequest.bind(
    null,
    code,
  );

  const [state, formAction, pending] = useActionState(
    sendChangePasswordRequestExpand,
    null,
  );

  useEffect(() => {
    if (state && state.ok) {
      setStep((prev) => prev + 1);
    }
  }, [state]);

  return (
    <Box>
      <form action={formAction}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Nhập mật khảu mới
        </Typography>

        <div>
          <TextField
            label="Mật khẩu"
            name="password"
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            sx={glassTextFieldStyle}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      sx={{
                        color: state?.password?.error ? "error.main" : "white",
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            defaultValue={state?.password.value}
            error={state?.password.error}
            helperText={
              state?.password.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.password.message}
                </span>
              )
            }
          />

          <TextField
            label="Nhập lại mật khẩu"
            name="rePassword"
            autoComplete="current-password"
            type={showRePassword ? "text" : "password"}
            sx={[glassTextFieldStyle, { marginBottom: 2 }]}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowRePassword((prev) => !prev)}
                      edge="end"
                      sx={{
                        color: state?.rePassword?.error
                          ? "error.main"
                          : "white",
                      }}
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            defaultValue={state?.rePassword.value}
            error={state?.rePassword.error}
            helperText={
              state?.rePassword.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.rePassword.message}
                </span>
              )
            }
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={buttonStyle}
            type="submit"
            loading={pending}
          >
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
