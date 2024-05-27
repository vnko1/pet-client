import React, { FC } from "react";
import Image from "next/image";

import { ArticleProps } from "./Article.type";
import styles from "./Article.module.scss";

const Article: FC<ArticleProps> = ({
  classNames,
  url,
  title,
  imgUrl,
  text,
  date,
}) => {
  const timeStamp = new Date(date).toLocaleDateString("en-GB");

  return (
    <div className={`${styles["article"]} ${classNames}`}>
      <Image
        src={imgUrl}
        alt="article's image"
        width={727}
        height={252}
        className={styles["article__image"]}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
      />
      <div className={styles["article__content"]}>
        <div className={styles["article__text"]}>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["text"]}>{text}</p>
        </div>
        <div className={styles["article__info"]}>
          <p className={styles["date"]}>{timeStamp}</p>
          <a
            className={styles["link"]}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
