import { privateAxiosApi } from "@/api";
import { EndpointsEnum } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const addNotice = tryCatchWrapper(async (data: FormData) => {
  await privateAxiosApi.post(EndpointsEnum.Notices, data);
});
