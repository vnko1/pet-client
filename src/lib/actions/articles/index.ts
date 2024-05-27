import { publicApi } from "@/api";
import { EndpointsEnum, SearchParams } from "@/types";
import { tryCatchWrapper } from "@/utils";

export const getArticles = tryCatchWrapper(
  async (searchParams: SearchParams) =>
    await publicApi(
      EndpointsEnum.Articles + "?" + new URLSearchParams(searchParams)
    )
);
