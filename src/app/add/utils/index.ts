import { LinksEnum } from "@/types";

export const getUrl = (currentPath: string) => {
  let next: string | null;
  let prev: string | null;
  switch (currentPath) {
    case LinksEnum.ADD_PET_CATEGORY:
      next = LinksEnum.ADD_PET_DETAILS;
      prev = null;
      break;
    case LinksEnum.ADD_PET_DETAILS:
      next = LinksEnum.ADD_PET_INFO;
      prev = LinksEnum.ADD_PET_CATEGORY;
      break;
    case LinksEnum.ADD_PET_INFO:
      prev = LinksEnum.ADD_PET_DETAILS;
      next = null;
      break;
    default:
      next = "/";
      prev = "/";
  }

  return { next, prev };
};
