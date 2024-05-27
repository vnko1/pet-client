import { publicApi } from "@/api";
import { EndpointsEnum } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const getSponsors = tryCatchWrapper(async () => {
  return await publicApi(EndpointsEnum.Sponsors);
});
