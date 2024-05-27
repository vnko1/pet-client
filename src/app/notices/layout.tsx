import React from "react";

import { getParsedSession } from "@/lib";

import { Search } from "../ui";

import { Categories, Filters } from "./ui";
import styles from "./notices.module.scss";

async function NoticesLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = await getParsedSession();
  return (
    <main>
      <section className={`${styles["notices"]} section`}>
        <div className={`${styles["notices__wrapper"]} container`}>
          <h1 className={styles["notices__title"]}>Find your favorite pet</h1>
          <Search />
          <div className={styles["notices__nav-bar"]}>
            <div className={styles["categories"]}>
              <Categories isLoggedIn={isLoggedIn} />
            </div>
            <div className={styles["filters"]}>
              <Filters isLoggedIn={isLoggedIn} />
            </div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}

export default NoticesLayout;
