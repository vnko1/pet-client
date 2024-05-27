import React, { FC } from "react";

import { Article } from "..";

import { ArticlesProps } from "./Articles.type";
import styles from "./Articles.module.scss";

const Articles: FC<ArticlesProps> = async ({ articles }) => {
  return (
    <ul className={styles["articles"]}>
      {articles.map((article) => (
        <li key={article._id.toString()} className={styles["article"]}>
          <Article {...article} />
        </li>
      ))}
    </ul>
  );
};

export default Articles;
