import React, { FC } from "react";

import { IconEnum } from "@/types";
import { Icon } from "@/components";

import { CheckBoxProps } from "./CheckBox.type";
import styles from "./CheckBox.module.scss";

const CheckBox: FC<CheckBoxProps> = ({ classNames, label, ...props }) => {
  return (
    <label className={`${styles["container"]} ${classNames}`}>
      <input {...props} type="checkbox" />
      <span className={styles["checkmark"]}>
        <span className={styles["box"]}>
          <Icon
            size={20}
            icon={IconEnum.CHECK}
            className={styles["box__icon"]}
          />
        </span>
        <span className={styles["text"]}>{label}</span>
      </span>
    </label>
  );
};

export default CheckBox;
