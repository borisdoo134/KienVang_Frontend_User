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
  name: string;
  setAvatarSrc: Dispatch<SetStateAction<string>>;
  sename: Dispatch<SetStateAction<string>>;
}

const UserAvatarContext = createContext<IUserAvatar | null>(null);

export const UserAvatarWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [custoname, setCustoname] = useState<string | null>(null);

  const defaultAvatar = session?.user?.avatar
    ? session.user.avatar.startsWith("http")
      ? session.user.avatar
      : `${storageUrl}/images/avatars/${session.user.avatar}`
    : "";

  const defaultName = session?.user?.name || "";

  const avatarSrc = customAvatar !== null ? customAvatar : defaultAvatar;
  const name = custoname !== null ? custoname : defaultName;

  const handleSetAvatar: Dispatch<SetStateAction<string>> = (value) => {
    setCustomAvatar(typeof value === "function" ? value(avatarSrc) : value);
  };

  const handleSename: Dispatch<SetStateAction<string>> = (value) => {
    setCustoname(typeof value === "function" ? value(name) : value);
  };

  return (
    <UserAvatarContext.Provider
      value={{
        avatarSrc,
        setAvatarSrc: handleSetAvatar,
        name,
        sename: handleSename,
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
