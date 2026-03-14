import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SingleNotificationSlider = () => {
  return (
    <Box
      className="group cursor-pointer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        position: "relative",
        border: "1px #ADADAD solid",
        borderRadius: "30px",
        marginBottom: "30px",
        overflow: "hidden",
        gap: 5,
        backgroundColor: "white",
        boxShadow: 3,
      }}
    >
      <div className="h-75 w-[45%] overflow-hidden">
        <Image
          src="/images/image.jpg"
          alt="Skyline"
          width={100}
          height={100}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="w-[55%] flex flex-col items-start gap-y-1 pt-8">
        <Typography
          variant="h5"
          component="h4"
          fontWeight={700}
          className="pb-3 text-gray-900 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-[#caa155] group-hover:to-[#f7ff12] group-hover:bg-clip-text group-hover:text-transparent"
        >
          Người Cao Tuổi Sử Dụng CCCD Gắn Chip Hoặc ...
        </Typography>

        <Typography
          variant="body2"
          component="p"
          fontWeight={400}
          color="text.secondary"
          className="flex items-center gap-1"
        >
          <AccessTimeIcon /> 00:00 13/4/2004 - 00:00 13/4/2026
        </Typography>

        <Typography
          variant="body2"
          component="p"
          fontWeight={400}
          color="text.secondary"
          className="flex items-start gap-1 text-justify w-[85%] pb-5"
        >
          <InfoOutlinedIcon />
          Từ ngày 01/3/2026, người cao tuổi (từ đủ 60 tuổi trở lên) có thể sử
          dụng Căn cước công dân (CCCD) gắn chip hoặc ứng ...
        </Typography>

        <div className="flex items-center font-semibold text-[13px] leading-4 tracking-wider uppercase text-[#f7ff12]">
          <p className="block w-5.75 group-hover:w-15 h-px bg-linear-to-r from-[#caa155] to-[#f7ff12] mr-1 transition-all duration-500 ease-in-out"></p>
          Xem chi tiết
        </div>
      </div>
    </Box>
  );
};

export default SingleNotificationSlider;
