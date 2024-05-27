import React from "react";

import { SearchParams } from "@/types";
import { Pagination } from "@/components";
import { getArticles } from "@/lib";

import { Search } from "../ui";

import { Articles } from "./ui";
import styles from "./news.module.scss";

async function Page({ searchParams }: { searchParams: SearchParams }) {
  const res = await getArticles(searchParams);

  return (
    <main>
      <section className={`${styles["news"]} section`}>
        <div className={`${styles["news__wrapper"]} container`}>
          <h1 className="title">News</h1>
          <Search />
          <Articles articles={res.data} />
          <Pagination totals={res.total} limit={6} />
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-dynamic";

export default Page;
