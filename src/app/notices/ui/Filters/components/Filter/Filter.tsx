"use client";
import React, { FC } from "react";

import { Icon } from "@/components";
import { IconEnum } from "@/types";

import { FilterProps } from "./Filter.type";
import styles from "./Filter.module.scss";

const Filter: FC<FilterProps> = ({ label, setSelectedGenderCheckBoxes }) => {
  const onHandleClick = () => {
    setSelectedGenderCheckBoxes((state) => state.filter((el) => el !== label));
  };
  return (
    <button className={styles["filter"]} onClick={onHandleClick}>
      {label} <Icon icon={IconEnum.CROSS_SMALL} size={16} />
    </button>
  );
};

export default Filter;
