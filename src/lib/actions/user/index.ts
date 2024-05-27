"use server";
import { revalidateTag } from "next/cache";

import { tryCatchWrapper } from "@/utils";
import { privateApi, privateAxiosApi } from "@/api";
import { EndpointsEnum } from "@/types";

export const getUser = tryCatchWrapper(async () => {
  return await privateApi(EndpointsEnum.Profile, { next: { tags: ["user"] } });
});

export const updateUser = tryCatchWrapper(async (data: FormData) => {
  await privateAxiosApi.put(EndpointsEnum.Profile, data);
  revalidateTag("user");
});
