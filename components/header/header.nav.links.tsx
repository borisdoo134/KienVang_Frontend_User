import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderNavLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      key: "home",
      link: "/home",
      name: "Trang chủ",
    },
    {
      key: "booking",
      link: "/booking",
      name: "Đặt lịch",
    },
    {
      key: "price",
      link: "/price",
      name: "Bảng giá",
    },
    {
      key: "introduction",
      link: "/introduction",
      name: "Về chúng tôi",
    },
  ];

  return (
    <div className="flex items-center gap-x-6 relative h-17.5">
      {links.map((item) => {
        const isActive = pathname.startsWith(item.link);

        return (
          <Link
            href={item.link}
            className={`relative flex items-center h-full transition-all duration-200 hover:text-[#FFC103] ${
              isActive ? "text-[#FFC103]" : "text-white"
            }`}
            key={item.key}
          >
            {item.name}

            {isActive && (
              <motion.div
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-1 rounded-sm bg-[#FFC103]"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNavLinks;
