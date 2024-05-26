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
          <h1>{error.message.toUpperCase()}</h1>
          <Image
            alt="Not found"
            src="/images/404-desc@2x.webp"
            width={822}
            height={360}
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
