"use server";
import { revalidatePath } from "next/cache";

import { tryCatchWrapper } from "@/utils";
import { privateApi, privateAxiosApi } from "@/api";
import { EndpointsEnum, LinksEnum } from "@/types";

export const getUser = tryCatchWrapper(async () => {
  return await privateApi(EndpointsEnum.Profile);
});

export const updateUser = tryCatchWrapper(async (data: FormData) => {
  await privateAxiosApi.put(EndpointsEnum.Profile, data);
  revalidatePath(LinksEnum.USER, "layout");
});
