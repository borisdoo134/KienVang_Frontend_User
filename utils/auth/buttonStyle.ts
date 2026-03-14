const buttonStyle = {
            mt: 2,
            bgcolor: "white",
            color: "black",
            fontWeight: "bold",
            borderRadius: "12px",
            height: "50px",
            textTransform: "none",
            fontSize: "16px",
            mb: "25px",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
}

const glassButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    boxShadow: `
      inset 0px 1px 0px rgba(255, 255, 255, 0.1),
      inset 0px -1px 0px rgba(0, 0, 0, 0.2),
      0px 20px 40px rgba(0, 0, 0, 0.4)
    `,
    backdropFilter: "blur(20px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    minWidth: "unset",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.25)",
      boxShadow: `
        inset 0px 1px 0px rgba(255, 255, 255, 0.2), 
        inset 0px -1px 0px rgba(0, 0, 0, 0.2),
        0px 25px 50px rgba(0, 0, 0, 0.5)
      `,
    },
  };

  export {buttonStyle, glassButtonStyle}