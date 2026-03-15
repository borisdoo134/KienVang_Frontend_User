"use client";

import { buttonStyle } from "@/utils/auth/buttonStyle";
import { glassTextFieldStyle } from "@/utils/auth/formStyles";
import { Box, Button, TextField, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { SetStateAction, useActionState, useEffect } from "react";
import {
  ForgetPasswordFieldResponse,
  validateForgetPasswordForm,
} from "./action";

const ForgetPasswordForm = ({
  setStep,
  forgetPasswordField,
  setForgetPasswordField,
}: {
  setStep: React.Dispatch<SetStateAction<number>>;
  forgetPasswordField: ForgetPasswordFieldResponse | null;
  setForgetPasswordField: React.Dispatch<
    SetStateAction<ForgetPasswordFieldResponse | null>
  >;
}) => {
  const [state, formAction] = useActionState(
    validateForgetPasswordForm,
    forgetPasswordField,
  );

  useEffect(() => {
    if (state && state.email) {
      if (state.email.error === false) {
        setForgetPasswordField(state);
        setStep(2);
      }
    }
  }, [state, setStep, setForgetPasswordField]);

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
          Quên mật khẩu
        </Typography>

        <div>
          <TextField
            label="Email"
            type="text"
            name="email"
            sx={glassTextFieldStyle}
            defaultValue={state?.email?.value}
            error={state?.email?.error}
            helperText={
              state?.email?.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.email?.message}
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
          >
            Tiếp tục
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default ForgetPasswordForm;
