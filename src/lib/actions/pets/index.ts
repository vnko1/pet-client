"use server";
import { revalidateTag } from "next/cache";

import { privateApi, privateAxiosApi } from "@/api";
import { EndpointsEnum } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const getPets = tryCatchWrapper(
  async () => await privateApi(EndpointsEnum.Pets, { next: { tags: ["pets"] } })
);

export const addPet = tryCatchWrapper(async (data: FormData) => {
  await privateAxiosApi.post(EndpointsEnum.Pets, data);
});

export const deletePet = tryCatchWrapper(async (id: string) => {
  await privateAxiosApi.delete(EndpointsEnum.Pets + "/" + id);
  revalidateTag("pets");
});
