import { NoticesTypes } from "@/types";

export type NoticeProps = {
  classNames?: string;
  userId: string | null;
} & NoticesTypes;
