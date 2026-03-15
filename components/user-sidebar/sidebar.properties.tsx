import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export const topLinks = [
  {
    key: "profile",
    link: "/account/profile",
    name: "Tài khoản của tôi",
    icon: <PersonIcon sx={{ fontSize: "1.2rem" }} />,
  },
  {
    key: "my-order",
    link: "/account/my-order",
    name: "Đơn đặt lịch của tôi",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: "1.2rem" }} />,
  },
  {
    key: "settings",
    link: "/account/settings",
    name: "Cài đặt",
    icon: <SettingsIcon sx={{ fontSize: "1.2rem" }} />,
  },
];
