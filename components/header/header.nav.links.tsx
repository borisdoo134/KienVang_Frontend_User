import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
      key: "introduction",
      link: "/introduction",
      name: "Về chúng tôi",
    },
  ];

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const activeLink = links.find((item) => pathname.startsWith(item.link));
    if (activeLink) {
      const ref = document.querySelector(
        `a[data-key="${activeLink.key}"]`,
      ) as HTMLAnchorElement;
      if (ref) {
        const { width } = ref.getBoundingClientRect();
        setPosition({
          width,
          left: ref.offsetLeft,
          opacity: 1,
        });
      }
    } else {
      setPosition({
        width: 0,
        left: 0,
        opacity: 0,
      });
    }
  }, [pathname]);

  return (
    <div className="flex items-center gap-x-6 relative h-17.5">
      {links.map((item) => {
        return (
          <Link
            href={item.link}
            className={`flex items-center h-full transition-all duration-200 hover:text-yellow-500 ${pathname.startsWith(item.link) ? "text-yellow-500" : "text-white"}`}
            key={item.key}
            data-key={item.key}
          >
            {item.name}
          </Link>
        );
      })}

      <motion.div
        animate={position}
        className="absolute bottom-0 h-1 rounded-sm bg-yellow-500"
      />
    </div>
  );
};

export default HeaderNavLinks;
