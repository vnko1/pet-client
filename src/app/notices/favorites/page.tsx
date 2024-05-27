import React from "react";

import { NoticeSearchParams } from "@/types";
import { Pagination } from "@/components";
import { getFavNotices } from "@/lib";

import { Notices } from "../ui";
import styles from "../notices.module.scss";

type PageProps = { searchParams: NoticeSearchParams };

async function FavoritesPage({ searchParams }: PageProps) {
  const searchParam: NoticeSearchParams = {
    ...searchParams,
    category: "favorites",
  };
  const res = await getFavNotices(searchParam);

  return (
    <>
      <div className={styles["content-wrapper"]}>
        <Notices notices={res.data} />
      </div>
      <Pagination totals={res.total} limit={6} />
    </>
  );
}

export default FavoritesPage;
