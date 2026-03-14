import { Box, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { Dispatch, SetStateAction } from "react";

const RegisterNavigator = ({
  step,
  setStep,
  onClearData,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  onClearData?: () => void;
}) => {
  const handleBack = () => {
    if (step > 1) {
      if (step === 2 && onClearData) {
        onClearData();
      }
      setStep(step - 1);
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={1}
      sx={{
        marginTop: "16px",
        marginX: "-16px",
      }}
    >
      <Tooltip title="Về trang trước" arrow placement="top">
        <IconButton
          disabled={step === 1 || step === 3}
          onClick={handleBack}
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            "&.Mui-disabled": {
              bgcolor: "rgba(255,255,255,0.08)",
              color: "rgba(255, 255, 255, 0.3)",
              cursor: "not-allowed",
              pointerEvents: "auto",
            },
          }}
        >
          <FirstPageOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Về trang chủ" arrow placement="top">
        <Link href={"/home"}>
          <IconButton
            sx={{
              color: "white",
              bgcolor: "rgba(255,255,255,0.08)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default RegisterNavigator;
