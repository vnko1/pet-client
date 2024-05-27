"use server";
import { revalidatePath, revalidateTag } from "next/cache";

import { privateApi, privateAxiosApi } from "@/api";
import { EndpointsEnum, NoticeSearchParams, NoticesTypes } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const addNotice = tryCatchWrapper(async (data: FormData) => {
  await privateAxiosApi.post(EndpointsEnum.Notices, data);
  revalidateTag("notices");
});

export const getNotices = tryCatchWrapper(
  async (searchParams: NoticeSearchParams) =>
    await privateApi(
      EndpointsEnum.Notices + "?" + new URLSearchParams(searchParams),
      { next: { tags: ["notices"] } }
    )
);

export const deleteNotice = tryCatchWrapper(async (id: string) => {
  await privateAxiosApi.delete(EndpointsEnum.Notice + "/" + id);
  revalidateTag("notices");
});

export const addToFavorite = tryCatchWrapper<
  { id: string; path: string },
  NoticesTypes
>(async ({ id, path }: { id: string; path: string }) => {
  const res: NoticesTypes = await privateApi(
    EndpointsEnum.Favorites + "/" + id,
    {
      method: "POST",
    }
  );
  revalidatePath(path);

  return res;
});

export const removeFromFavorite = tryCatchWrapper<
  { id: string; path: string },
  NoticesTypes
>(async ({ id, path }: { id: string; path: string }) => {
  const res: NoticesTypes = await privateApi(
    EndpointsEnum.Favorites + "/" + id,
    { method: "DELETE" }
  );
  revalidatePath(path);

  return res;
});

export const getNotice = tryCatchWrapper(
  async (id: string) => await privateApi(EndpointsEnum.Notice + "/" + id)
);

export const getOwnNotices = tryCatchWrapper(
  async (searchParams: NoticeSearchParams) =>
    await privateApi(
      EndpointsEnum.Owner + "?" + new URLSearchParams(searchParams),
      { next: { tags: ["notices"] } }
    )
);

export const getFavNotices = tryCatchWrapper(
  async (searchParams: NoticeSearchParams) =>
    await privateApi(
      EndpointsEnum.Favorites + "?" + new URLSearchParams(searchParams),
      { next: { tags: ["notices"] } }
    )
);
