"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { glassTextFieldStyle } from "@/utils/auth/formStyles";
import { buttonStyle } from "@/utils/auth/buttonStyle";
import { SetStateAction, useActionState, useEffect, useState } from "react";
import { RegisterFieldResponse, validateRegisterForm } from "./action";

const RegisterForm = ({
  setStep,
  registerField,
  setRegisterField,
}: {
  setStep: React.Dispatch<SetStateAction<number>>;
  registerField: RegisterFieldResponse | null;
  setRegisterField: React.Dispatch<
    SetStateAction<RegisterFieldResponse | null>
  >;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showRePassword, setShowRePassword] = useState(false);

  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const [state, formAction, pending] = useActionState(
    validateRegisterForm,
    registerField,
  );

  useEffect(() => {
    if (state?.ok) {
      setRegisterField(state);
      setStep(2);
    }
  }, [state, setStep, setRegisterField]);

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
          Đăng kí
        </Typography>

        <div>
          <TextField
            label="Họ và tên"
            type="text"
            name="name"
            sx={glassTextFieldStyle}
            defaultValue={state?.name.value}
            error={state?.name.error}
            helperText={
              state?.name.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.name.message}
                </span>
              )
            }
          />

          <TextField
            label="Email"
            type="text"
            name="email"
            sx={glassTextFieldStyle}
            defaultValue={state?.email.value}
            error={state?.email.error}
            helperText={
              state?.email.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.email.message}
                </span>
              )
            }
          />

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
                      onClick={handleClickShowPassword}
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
                      onClick={handleClickShowRePassword}
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
            Đăng kí
          </Button>

          <Typography
            variant="body2"
            component="p"
            sx={{
              color: "white",
              mt: "30px",
              textAlign: "center",
              fontWeight: "300",
              opacity: "0.7",
            }}
          >
            Đã có tài khoản?{" "}
            <Link
              href={"/login"}
              className="text-[#d32f2f] font-bold opacity-100"
            >
              Đăng nhập
            </Link>
          </Typography>
        </div>
      </form>
    </Box>
  );
};

export default RegisterForm;
