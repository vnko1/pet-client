"use server";
import { publicApi } from "@/api";
import { EndpointsEnum, LoginType, RegisterType } from "@/types";
import { tryCatchWrapper } from "@/utils";
import { sessionLogin } from "../authSession";

export const register = tryCatchWrapper(async (data: RegisterType) => {
  return await publicApi(EndpointsEnum.Register, {
    method: "POST",
    body: JSON.stringify(data),
  });
});

export const login = tryCatchWrapper(async (data: LoginType) => {
  const res = await publicApi(EndpointsEnum.Login, {
    method: "POST",
    body: JSON.stringify(data),
  });
  await sessionLogin(res.access_token, res.refresh_token);

  return res;
});
