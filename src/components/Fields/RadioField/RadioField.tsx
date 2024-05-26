"use client";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";

import { RadioFieldProps } from "./RadioField.type";
import styles from "./RadioField.module.scss";

const RadioField: FC<RadioFieldProps> = ({
  classNames,
  label,
  name,
  icon,
  alignIcon = "left",
  iconSize = 24,
  iconColors,
  ...props
}) => {
  const methods = useFormContext();

  const buttonClassNames = cn(
    styles["button"],
    {
      [styles["btn"]]: !icon,
      [styles["icon"]]: icon,
      [styles["icon--right"]]: alignIcon === "right",
    },
    iconColors
  );

  return (
    <label className={`${styles["radio"]} ${classNames}`}>
      <input
        {...props}
        {...methods?.register(name)}
        type="radio"
        className={styles["field"]}
      />
      <span className={buttonClassNames}>
        <span className={iconColors}>
          {icon ? <Icon icon={icon} size={iconSize} /> : null}
        </span>
        {label}
      </span>
    </label>
  );
};

export default RadioField;
