import React from "react";

import { NoticeSearchParams } from "@/types";
import { Pagination } from "@/components";
import { getNotices } from "@/lib";

import { Notices } from "../ui";
import styles from "../notices.module.scss";

type PageProps = { searchParams: NoticeSearchParams };

async function SellPage({ searchParams }: PageProps) {
  const searchParam: NoticeSearchParams = {
    ...searchParams,
    category: "sell",
  };
  const res = await getNotices(searchParam);

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <Notices notices={res.data} />
      </div>
      <Pagination totals={res.total} limit={6} />
    </>
  );
}

export default SellPage;
