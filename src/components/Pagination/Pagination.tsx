"use client";
import React, { ChangeEvent, FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination as MUIPagination } from "@mui/material";

import { PaginationProps } from "./Pagination.type";
import styles from "./Pagination.module.scss";

const Pagination: FC<PaginationProps> = ({ totals, classNames, limit }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onHandleChange = (_: ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (!totals) return null;

  return (
    <div className={classNames}>
      <MUIPagination
        count={Math.floor(totals / limit)}
        variant="outlined"
        page={Number(searchParams.get("page")) || 1}
        onChange={onHandleChange}
        className={styles["pagination"]}
      />
    </div>
  );
};

export default Pagination;
