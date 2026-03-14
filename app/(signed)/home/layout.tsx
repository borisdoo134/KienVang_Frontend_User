import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col pb-10">{children}</div>;
};

export default HomeLayout;
