"use client";
import { FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { SearchField } from "@/components";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onHandleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    term ? params.set("query", term) : params.delete("query");
    replace(pathname + "?" + params.toString());
  }, 300);

  return (
    <SearchField
      defaultValue={searchParams.get("query")?.toString()}
      classNames={styles["search"]}
      onHandleChange={onHandleChange}
    />
  );
};

export default Search;
