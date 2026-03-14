import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const movingSteps = [
  {
    id: 1,
    title: "Liên hệ",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species...",
    image: "/moving-steps/datlich.jpg",
  },
  {
    id: 2,
    title: "Khảo sát",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species...",
    image: "/moving-steps/khaosat.jpg",
  },
  {
    id: 3,
    title: "Đóng gói",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species...",
    image: "/moving-steps/donghang.jpg",
  },
  {
    id: 4,
    title: "Vận chuyển",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species...",
    image: "/moving-steps/vanchuyen.jpg",
  },
  {
    id: 5,
    title: "Nghiệm thu",
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species...",
    image: "/moving-steps/nghiemthu.jpg",
  },
];

const HomeBanner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        gap: 2,
        justifyContent: "center",
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "#FFC107", fontWeight: "900" }}
        >
          QUY TRÌNH CHUYÊN NGHIỆP
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          fontWeight={900}
          color="text.primary"
        >
          5 Bước Chuyển Nhà Trọn Gói
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
          Chúng tôi tối ưu hóa từng bước để mang lại trải nghiệm dọn nhà nhẹ
          nhàng và an tâm nhất cho quý khách
        </Typography>
      </div>

      <div className="flex justify-between min-h-100 items-start">
        {movingSteps.map((step, index) => {
          const isZigzagDown = index % 2 !== 0;

          return (
            <Card
              key={step.id}
              sx={{
                maxWidth: 260,
                alignSelf: isZigzagDown ? "flex-end" : "flex-start",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={step.image}
                alt="green iguana"
                sx={{ maxHeight: "170px" }}
              />

              <CardContent
                sx={{ textAlign: "center", py: 2, position: "relative" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: "100px",
                      fontWeight: 700,
                      color: "#FFC103",
                      zIndex: 0,
                      lineHeight: 1,
                    }}
                  >
                    {step.id}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      fontWeight: 800,
                      color: "#2C3A47",
                      letterSpacing: "1px",
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    position: "relative",
                    zIndex: 1,
                    px: 2,
                  }}
                >
                  {step.desc}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Box>
  );
};

export default HomeBanner;
