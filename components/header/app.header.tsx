"use client";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import HeaderButtons from "./header.buttons";
import HeaderNavLinks from "./header.nav.links";

const AppHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: "20px",
        width: "100%",
        paddingInline: "20px",
        img: {
          objectFit: "cover",
          borderRadius: "50%",
        },
        bgcolor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(25px)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 15,
      }}
    >
      <Link
        href={"/home"}
        className="items-center flex justify-center cursor-pointer gap-x-2 mr-3"
      >
        <Image src={`/logo2.webp`} alt="app logo" width={160} height={160} />
      </Link>
      <HeaderNavLinks />
      <HeaderButtons />
    </Box>
  );
};

export default AppHeader;
