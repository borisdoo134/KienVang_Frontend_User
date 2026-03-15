"use client";
import { archivo, inter } from "@/wrapper/theme/theme";
import { Avatar, AvatarGroup, Box, Button, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";

import Image from "next/image";
import { storageUrl } from "@/utils/url";

const HomeSlogan = ({ accountAmounts }: { accountAmounts: CustomerAmount }) => {
  return (
    <Box
      sx={{
        width: "85vw",
        minHeight: "calc(100vh - 120px)",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
        alignItems: "center",
        paddingY: "40px",
      }}
    >
      <div className="w-[50%] h-full py-4 flex flex-col gap-4">
        <Typography
          variant="h2"
          component="h1"
          fontWeight={700}
          color="text.primary"
          sx={{
            textAlign: "left",
            width: "70%",
            fontFamily: archivo.style.fontFamily,
            paddingTop: "40px",
          }}
        >
          Vận Chuyển Tổ Ấm <br />
          <span
            style={{ fontFamily: inter.style.fontFamily, color: "#636AE8" }}
          >
            Bằng Sự Tận Tâm
          </span>{" "}
          & Tỉ Mỉ
        </Typography>
        <Typography
          variant="body1"
          component="p"
          fontWeight={400}
          color="text.secondary"
          sx={{
            textAlign: "justify",
            width: "90%",
            fontStyle: "italic",
          }}
        >
          Chúng tôi không chỉ di dời tài sản, chúng tôi nâng niu những ký ức và
          giúp bạn khởi đầu hành trình mới đầy an tâm trên khắp mọi miền tổ
          quốc.
        </Typography>

        <div className="w-[70%] flex justify-between gap-4">
          <Button
            sx={{
              padding: "10px 20px",
              borderRadius: "15px",
              width: "50%",
              fontWeight: "800",
            }}
            variant="contained"
            color="primary"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Đặt Lịch Ngay
          </Button>
          <Button
            sx={{
              padding: "10px 20px",
              borderRadius: "15px",
              width: "50%",
              boxShadow: "0px 0px 0px 1px #E5E7EB",
              color: "#000000",
              fontWeight: "800",
              "&:hover": { backgroundColor: "#E5E7EB" },
            }}
            variant="outlined"
            color="secondary"
          >
            Tìm Hiểu Thêm
          </Button>
        </div>
        <Divider sx={{ width: "90%", paddingTop: "20px" }} />
        <div className="flex gap-3 text-start">
          <AvatarGroup spacing="small">
            {accountAmounts.urlAvatars.map((url, index) => (
              <Avatar
                key={index}
                alt={`Avatar ${index + 1}`}
                src={`${storageUrl}/images/${url}`}
              />
            ))}
          </AvatarGroup>
          <p className="font-bold">
            {accountAmounts.amounts} Quý khách hàng <br />{" "}
            <span className="font-thin text-sm">Đã tin tưởng và hài lòng</span>
          </p>
        </div>
      </div>

      <div className="w-[50%] flex flex-col gap-4 h-137.5 py-4">
        <div className="flex flex-7 gap-4 min-h-0 h-2/3">
          <Image
            src="/slogans/slogan1.jpg"
            alt="Skyline"
            width={300}
            height={300}
            className="object-cover w-[50%] h-full rounded-lg duration-300 hover:scale-[1.03]"
          />

          <div className="w-[50%] flex flex-col gap-4 min-h-0">
            <Image
              src="/slogans/slogan2.jpg"
              alt="Skyline"
              width={300}
              height={150}
              className="object-cover flex-1 w-full rounded-lg min-h-0 duration-300 hover:scale-[1.03]"
            />
            <Image
              src="/slogans/slogan3.jpg"
              alt="Skyline"
              width={300}
              height={150}
              className="object-cover flex-1 w-full rounded-lg min-h-0 duration-300 hover:scale-[1.03]"
            />
          </div>
        </div>

        <Image
          src="/slogans/slogan4.jpg"
          alt="Skyline"
          width={600}
          height={150}
          className="w-full flex-3 object-cover rounded-lg min-h-0 duration-300 hover:scale-[1.03]"
        />
      </div>
    </Box>
  );
};

export default HomeSlogan;
