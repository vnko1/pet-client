import React, { FC } from "react";
import Header from "../Header/Header";
import { getMe } from "@/lib";

const HeaderWrapper: FC = async () => {
  const user = await getMe(undefined);
  return <Header user={user} />;
};

export default HeaderWrapper;
