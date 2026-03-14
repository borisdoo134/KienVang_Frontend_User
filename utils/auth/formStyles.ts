export const glassTextFieldStyle = {
    marginBottom: "24px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "white", // Màu chữ khi gõ
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)", 
      },
      "&:hover fieldset": {
        borderColor: "white", 
      },
      "&.Mui-focused fieldset": {
        borderColor: "white", 
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)", // Màu nhãn (Label)
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white", // Màu nhãn khi click vào
    },
};