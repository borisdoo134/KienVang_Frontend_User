"use client";

import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import LoginForm from "@/components/login/login-form";

const Login = () => {
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
      }}
    >
      <Box display="flex" justifyContent="flex-end" mb={1}>
        <Link href={"/home"}>
          <IconButton
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              color: "white",
              bgcolor: "rgba(255,255,255,0.08)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Link>
      </Box>
      <LoginForm />
    </Box>
  );
};

export default Login;
