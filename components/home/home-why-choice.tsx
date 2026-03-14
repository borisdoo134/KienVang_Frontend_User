import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const data = [
  {
    id: 1,
    title: "Bảo hiểm 100%",
    desc: "Cam kết bồi thường hoàn toàn giá trị tài sản nếu xảy ra hư hỏng hoặc thất lạc trong quá trình vận chuyển.",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    id: 2,
    title: "Đúng giờ giấc",
    desc: "Quy trình chuyên nghiệp đảm bảo nhân viên có mặt đúng giờ và hoàn thành công việc theo tiến độ đã thỏa thuận.",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    id: 3,
    title: "Đội xe đa dạng",
    desc: "Sở hữu dàn xe tải hiện đại với nhiều tải trọng khác nhau, phù hợp với mọi nhu cầu vận chuyển lớn nhỏ.",
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    id: 4,
    title: "Tận tâm phục vụ",
    desc: "Đội ngũ nhân viên được đào tạo bài bản, lịch sự và luôn đặt lợi ích của khách hàng lên hàng đầu.",
    icon: <HandshakeOutlinedIcon />,
  },
];

const WhyChoiceUs = () => {
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
          GIÁ TRỊ CỐT LÕI
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          fontWeight={900}
          color="text.primary"
        >
          Tại sao chọn Kiến Vàng?
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
          Uy tín, Tận tâm và Chuyên nghiệp. Chúng tôi cam kết bảo vệ an toàn
          tuyệt đối cho tài sản và mang đến sự an tâm trọn vẹn cho gia đình bạn
        </Typography>
      </div>

      <div className="flex justify-between min-h-150 items-start px-10">
        {data.map((step) => {
          return (
            <Card
              key={step.id}
              sx={{
                maxWidth: 300,
                height: 360,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 0px 16px rgba(0,0,0,0.2)",
              }}
            >
              <div className="bg-[#f8eecf] p-2 rounded-4xl text-[#FFC103]">
                {step.icon}
              </div>

              <CardContent sx={{ textAlign: "center", py: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    p: 2,
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

export default WhyChoiceUs;
