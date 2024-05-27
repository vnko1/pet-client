import React, { FC } from "react";

import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";

const NavButton: FC = () => {
  return (
    <UIButton
      color="secondary"
      variant="contained"
      href={LinksEnum.ADD_PET_CATEGORY}
      icon={IconEnum.PLUS}
      alignIcon="right"
      size="small"
    >
      Add pet
    </UIButton>
  );
};

export default NavButton;
