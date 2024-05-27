"use client";
import React from "react";
import Image from "next/image";

import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import styles from "./app.module.scss";

function NotFound() {
  return (
    <main>
      <section className={styles["error"]}>
        <div className={`container ${styles["error__wrapper"]}`}>
          <h1>Ooops! This page not found :(</h1>
          <Image
            alt="Not found"
            src="/images/404-desc@2x.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[822px] h-[360px]"
          />
          <div className={styles["error__link"]}>
            <UIButton
              href="/"
              icon={IconEnum.PET}
              variant="contained"
              color="secondary"
              alignIcon="right"
              fullWidth
            >
              To main page
            </UIButton>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
