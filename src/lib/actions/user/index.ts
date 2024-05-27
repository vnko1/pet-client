"use server";

import { privateApi } from "@/api";
import { EndpointsEnum } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const getMe = tryCatchWrapper(async () => {
  return await privateApi(EndpointsEnum.Profile);
});
