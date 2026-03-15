import { useState } from "react";
import { useUserAvatar } from "@/wrapper/user-avatar/user.avatar.wrapper";
import { useSession } from "next-auth/react";
import { Avatar, Button } from "@mui/material";
import AccountMenu from "./account.menu";
import Link from "next/link";
import NotificationButton from "@/features/notification/notification.button";

const HeaderButtons = () => {
  const { status } = useSession();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { avatarSrc, name } = useUserAvatar();

  const handleSavePrevUrl = (linkTo: string) => {
    if (!window.location.pathname.includes(linkTo)) {
      sessionStorage.setItem("prevUrl", window.location.pathname);
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      {status === "authenticated" && <NotificationButton />}
      {status === "authenticated" ? (
        <>
          <Avatar
            alt="avatar"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ cursor: "pointer" }}
            src={avatarSrc}
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>
          <AccountMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </>
      ) : (
        <>
          <Link href={"/login"} onClick={() => handleSavePrevUrl("/login")}>
            <Button
              sx={{ width: "110px" }}
              variant="outlined"
              color="secondary"
            >
              Đăng Nhập
            </Button>
          </Link>

          <Link
            href={"/register"}
            onClick={() => handleSavePrevUrl("/register")}
          >
            <Button sx={{ width: "110px" }} variant="contained" color="primary">
              Đăng Kí
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderButtons;
