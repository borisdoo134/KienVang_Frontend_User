"use client";
import { Box, Divider, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SingleNotificationSlider from "./single-notification";

const HomeNotificationSlider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "#FFC107", fontWeight: "900" }}
        >
          CẨM NANG HỮU ÍCH
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          fontWeight={900}
          color="text.primary"
        >
          Thông Báo - Sự Kiện
        </Typography>
        <Divider
          sx={{
            width: "80px",
            height: "5px",
            backgroundColor: "#FFC107",
            margin: "0 auto",
            border: "none",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        />
        <Typography
          variant="body1"
          component="h6"
          sx={{ width: "50%", paddingBottom: "25px" }}
        >
          Cập nhật nhanh chóng các chương trình ưu đãi hấp dẫn và thông tin hoạt
          động mới nhất từ dịch vụ của chúng tôi
        </Typography>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SingleNotificationSlider />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeNotificationSlider;
