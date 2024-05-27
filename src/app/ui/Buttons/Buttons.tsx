"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { IconEnum, LinksEnum } from "@/types";
import { sessionLogout } from "@/lib";
import { UIButton } from "@/components";

import { ButtonsProps } from "./Buttons.type";

const Buttons: FC<ButtonsProps> = ({ userName, isLoggedIn }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await sessionLogout();
    router.refresh();
  };
  const renderButtons = isLoggedIn ? (
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
      >
        {userName}
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
