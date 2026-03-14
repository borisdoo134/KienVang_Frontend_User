import Footer from "@/components/home/footer";
import HomeBanner from "@/components/home/home-banner";
import HomeNotificationSlider from "@/components/home/home-notification-slider";
import HomeSlogan from "@/components/home/home-slogan";
import WhyChoiceUs from "@/components/home/home-why-choice";
import { Box } from "@mui/material";
import React from "react";

const Home = ({
  systemData,
  accountAmounts,
}: {
  systemData: SystemResponse[];
  accountAmounts: CustomerAmount;
}) => {
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
      <HomeSlogan accountAmounts={accountAmounts} />
      <HomeBanner />
      <HomeNotificationSlider />
      <WhyChoiceUs />
      <Footer systemData={systemData} />
    </Box>
  );
};

export default Home;
