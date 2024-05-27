import React from "react";

import { NoticeSearchParams } from "@/types";
import { Pagination } from "@/components";
import { getOwnNotices } from "@/lib";

import { Notices } from "../ui";
import styles from "../notices.module.scss";

type PageProps = { searchParams: NoticeSearchParams };

async function OwnPage({ searchParams }: PageProps) {
  const searchParam: NoticeSearchParams = {
    ...searchParams,
    category: "own",
  };
  const res = await getOwnNotices(searchParam);

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <Notices notices={res?.data || []} />
      </div>
      <Pagination totals={res?.total || 0} limit={6} />
    </>
  );
}

export default OwnPage;
