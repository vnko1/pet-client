import React, { FC } from "react";

import { Notice } from "..";

import { NoticesProps } from "./Notices.type";
import styles from "./Notices.module.scss";
import { getParsedSession } from "@/lib";

const Notices: FC<NoticesProps> = async ({ notices }) => {
  const { userId } = await getParsedSession();
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
