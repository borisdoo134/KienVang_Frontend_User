import Footer from "@/components/home/footer";
import HomeBanner from "@/components/home/home-banner";
import HomeNotificationSlider from "@/components/home/home-notification-slider";
import HomeSlogan from "@/components/home/home-slogan";
import WhyChoiceUs from "@/components/home/home-why-choice";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        width: "90vw",
        minHeight: "100vh",
      }}
    >
      <HomeSlogan />
      <HomeBanner />
      <HomeNotificationSlider />
      <WhyChoiceUs />
      <Footer />
    </Box>
  );
};

export default Home;
