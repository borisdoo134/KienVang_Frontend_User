import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Divider,
  InputAdornment,
  Alert,
  Collapse,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { LiteralUnion, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { glassTextFieldStyle } from "@/utils/auth/formStyles";
import { buttonStyle, glassButtonStyle } from "@/utils/auth/buttonStyle";
import { validateLoginForm } from "@/components/login/action";
import { BuiltInProviderType } from "next-auth/providers/index";

const LoginForm = () => {
  const [state, formAction, pending] = useActionState(validateLoginForm, null);
  const [error, setError] = useState<string | null | undefined>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const socialsLogin = async (
    provider: LiteralUnion<BuiltInProviderType> | undefined,
  ) => {
    const storedUrl =
      typeof window !== "undefined" ? sessionStorage.getItem("prevUrl") : null;
    await signIn(provider, {
      callbackUrl: storedUrl || "/home",
    });
  };

  useEffect(() => {
    const credentialsLogin = async () => {
      if (state) {
        if (!state.email?.error && !state.password?.error) {
          let emailInput = state.email.value;
          if (!emailInput.includes("@")) {
            emailInput += "@gmail.com";
          }

          const response = await signIn("credentials", {
            email: emailInput,
            password: state.password?.value,
            redirect: false,
          });

          if (!response || !response.ok) {
            setError(response?.error);
          } else {
            const storedUrl = sessionStorage.getItem("prevUrl") || "/home";
            sessionStorage.removeItem("prevUrl");
            router.push(storedUrl);
          }
        } else {
          setError(null);
        }
      }
    };
    credentialsLogin();
  }, [state, router]);

  return (
    <Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "white",
          textAlign: "left",
        }}
      >
        Đăng nhập
      </Typography>

      <form action={formAction}>
        <Box display="flex" flexDirection="column">
          <TextField
            label="Email"
            type="text"
            name="email"
            sx={glassTextFieldStyle}
            defaultValue={state?.email?.value}
            error={!!state?.email?.error}
            helperText={
              state?.email?.error && (
                <span className="flex items-center gap-x-1">
                  <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                  {state?.email.message}
                </span>
              )
            }
          />

          <Box>
            <TextField
              fullWidth
              label="Mật khẩu"
              name="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              sx={[glassTextFieldStyle, { marginBottom: "8px" }]}
              defaultValue={state?.password?.value}
              error={!!state?.password?.error}
              helperText={
                state?.password?.error && (
                  <span className="flex items-center gap-x-1">
                    <ErrorOutlineRoundedIcon sx={{ fontSize: "16px" }} />
                    {state?.password.message}
                  </span>
                )
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{
                          color: state?.password?.error
                            ? "error.main"
                            : "white",
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Typography
              variant="caption"
              align="right"
              display="block"
              sx={{
                color: "white",
                fontWeight: "300",
                opacity: "0.7",
                "& a:hover": { opacity: "0.4" },
              }}
            >
              <Link href={"/forgot"}>Quên mật khẩu?</Link>
            </Typography>
          </Box>

          <Collapse in={!!error}>
            <Alert
              severity="error"
              closeText="Đóng"
              sx={{ mb: 3, borderRadius: 2 }}
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          </Collapse>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={[buttonStyle, { marginTop: "20px", marginBottom: 0 }]}
            type="submit"
            disabled={pending}
          >
            {pending ? "Đang xử lý..." : "Đăng nhập"}
          </Button>
        </Box>
      </form>

      <Divider
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "10px",
          fontWeight: "medium",
          my: "25px",
          "&::before, &::after": {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        HOẶC ĐĂNG NHẬP VỚI
      </Divider>

      <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
        <Button onClick={() => socialsLogin("facebook")} sx={glassButtonStyle}>
          <Image
            src={`/facebook.png`}
            alt="facebook logo"
            width={24}
            height={24}
          />
        </Button>

        <Button onClick={() => socialsLogin("google")} sx={glassButtonStyle}>
          <Image src={`/google.png`} alt="google logo" width={24} height={24} />
        </Button>
      </Box>

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
        Không có tài khoản?{" "}
        <Link
          href={"/register"}
          style={{
            color: "#d32f2f",
            fontWeight: "bold",
            opacity: 1,
            textDecoration: "none",
          }}
        >
          Đăng kí
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
