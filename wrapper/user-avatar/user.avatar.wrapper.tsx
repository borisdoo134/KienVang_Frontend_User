"use client";
import { storageUrl } from "@/utils/url";
import { useSession } from "next-auth/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IUserAvatar {
  avatarSrc: string;
  fullname: string;
  setAvatarSrc: Dispatch<SetStateAction<string>>;
  setFullname: Dispatch<SetStateAction<string>>;
}

const UserAvatarContext = createContext<IUserAvatar | null>(null);

export const UserAvatarWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [customFullname, setCustomFullname] = useState<string | null>(null);

  const defaultAvatar = session?.user?.avatar
    ? session.user.avatar.startsWith("http")
      ? session.user.avatar
      : `${storageUrl}/avatar/${session.user.avatar}`
    : "";

  const defaultFullname = session?.user?.fullname || "";

  const avatarSrc = customAvatar !== null ? customAvatar : defaultAvatar;
  const fullname = customFullname !== null ? customFullname : defaultFullname;

  const handleSetAvatar: Dispatch<SetStateAction<string>> = (value) => {
    setCustomAvatar(typeof value === "function" ? value(avatarSrc) : value);
  };

  const handleSetFullname: Dispatch<SetStateAction<string>> = (value) => {
    setCustomFullname(typeof value === "function" ? value(fullname) : value);
  };

  return (
    <UserAvatarContext.Provider
      value={{
        avatarSrc,
        setAvatarSrc: handleSetAvatar,
        fullname,
        setFullname: handleSetFullname,
      }}
    >
      {children}
    </UserAvatarContext.Provider>
  );
};

export const useUserAvatar = () => {
  const context = useContext(UserAvatarContext);
  if (!context) {
    throw new Error("useUserAvatar must be used within a UserAvatarWrapper");
  }
  return context;
};
