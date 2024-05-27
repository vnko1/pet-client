"use client";
import Image from "next/image";

import { UIButton } from "@/components";
import { IconEnum } from "@/types";

import styles from "./app.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <section className={styles["error"]}>
        <div className={`container ${styles["error__wrapper"]}`}>
          <h1>{error.message}</h1>
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
              onClick={() => reset()}
              icon={IconEnum.PET}
              variant="contained"
              color="secondary"
              alignIcon="right"
              fullWidth
            >
              Reload
            </UIButton>
          </div>
        </div>
      </section>
    </main>
  );
}
