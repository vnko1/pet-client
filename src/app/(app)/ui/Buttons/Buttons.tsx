// "use client";
import React, { FC } from "react";
// import { useRouter } from "next/navigation";

import { IconEnum, LinksEnum } from "@/types";
import { sessionLogout } from "@/lib";
import { UIButton } from "@/components";

import { ButtonsProps } from "./Buttons.type";

const Buttons: FC<ButtonsProps> = ({ user }) => {
  // const router = useRouter();

  // const navigate = (url: string) => {
  //   router.push(url);
  //   router.refresh();
  // };

  const handleLogout = async () => {
    await sessionLogout();
  };
  const renderButtons = user ? (
    <>
      <UIButton
        variant="contained"
        size="small"
        color="secondary"
        icon={IconEnum.LOGOUT}
        alignIcon="right"
        onClick={handleLogout}
      >
        Log out
      </UIButton>
      <UIButton
        variant="text"
        size="small"
        color="secondary"
        icon={IconEnum.USER}
        alignIcon="left"
        href={LinksEnum.USER}
        // onClick={() => navigate(LinksEnum.USER)}
      >
        {user.name}
      </UIButton>
    </>
  ) : (
    <>
      <UIButton
        variant="contained"
        size="small"
        icon={IconEnum.PET}
        alignIcon="right"
        href={LinksEnum.LOGIN}
      >
        Log IN
      </UIButton>
      <UIButton variant="outlined" size="small" href={LinksEnum.REGISTER}>
        Registration
      </UIButton>
    </>
  );

  return renderButtons;
};

export default Buttons;
