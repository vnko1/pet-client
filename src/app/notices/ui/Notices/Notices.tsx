"use client";
import React, { FC } from "react";

import { Notice } from "..";

import { NoticesProps } from "./Notices.type";
import styles from "./Notices.module.scss";

const Notices: FC<NoticesProps> = ({ notices, userId }) => {
  return (
    <ul className={styles["notices"]}>
      {notices.map((notice) => (
        <li key={notice._id}>
          <Notice {...notice} userId={userId} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
