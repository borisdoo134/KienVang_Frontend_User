import ForgetPassword from "@/features/auth/components/forget-password";
import { Box } from "@mui/material";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/auth-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ForgetPassword />
    </Box>
  );
};

export default ForgotPassword;
