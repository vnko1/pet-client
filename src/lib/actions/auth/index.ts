"use server";

import { publicApi } from "@/api";
import { EndpointsEnum, RegisterType } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const register = tryCatchWrapper(async (data: RegisterType) => {
  return await publicApi(EndpointsEnum.Register, {
    method: "POST",
    body: JSON.stringify(data),
  });
});
