import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e293b",
        color: "#f8fafc",
        p: 4,
        width: "100vw",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Link href={"/home"} className="cursor-pointer">
              <Image
                src={`/logo2.webp`}
                alt="app logo"
                width={160}
                height={160}
              />
            </Link>{" "}
            <Typography
              variant="body2"
              sx={{ color: "#cbd5e1", mb: 3, lineHeight: 1.8 }}
            >
              Tự hào là đơn vị cung cấp dịch vụ chuyển nhà, chuyển văn phòng
              trọn gói uy tín, chuyên nghiệp hàng đầu, mang lại sự an tâm tuyệt
              đối cho khách hàng trên toàn quốc.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "#FFC107",
                  bgcolor: "rgba(255, 193, 7, 0.1)",
                  "&:hover": { bgcolor: "#FFC107", color: "#1e293b" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "#FFC107",
                  bgcolor: "rgba(255, 193, 7, 0.1)",
                  "&:hover": { bgcolor: "#FFC107", color: "#1e293b" },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3, sm: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  bgcolor: "#FFC107",
                },
              }}
            >
              Dịch Vụ
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                "Chuyển nhà trọn gói",
                "Chuyển văn phòng",
                "Thuê xe tải",
                "Di dời kho xưởng",
              ].map((item) => (
                <p
                  key={item}
                  className="text-[#cbd5e1] duration-300 hover:text-[#FFC107] hover:translate-x-1.25"
                >
                  {item}
                </p>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2, sm: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  bgcolor: "#FFC107",
                },
              }}
            >
              Liên Kết
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Về chúng tôi", "Bảng giá", "Tin tức", "Tuyển dụng"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: "#cbd5e1",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#FFC107",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                ),
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  bgcolor: "#FFC107",
                },
              }}
            >
              Liên Hệ
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnIcon sx={{ color: "#FFC107", mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  123 Đường Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <PhoneIcon sx={{ color: "#FFC107" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "#cbd5e1", fontWeight: 700 }}
                >
                  0988.xxx.xxx
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon sx={{ color: "#FFC107" }} />
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  hotro@kienvang.vn
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            © {new Date().getFullYear()} Kiến Vàng. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
