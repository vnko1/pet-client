"use client";

import React, { FC, useState } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import cn from "classnames";

import { Icon } from "@/components";
import { IconEnum } from "@/types";

import { FormFieldProps } from "./FormField.type";
import styles from "./FormField.module.scss";

const FormField: FC<FormFieldProps> = ({
  classNames,
  label,
  type,
  name,
  fieldValidation = false,
  variant = "normal",
  fieldIcons = false,
  ...props
}) => {
  const { errors } = useFormState();
  const { register, getFieldState } = useFormContext();
  const { isDirty, invalid } = getFieldState(name);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isPassword = type === "password";

  const fieldClassNames = cn(
    styles["field"],
    {
      [styles["small"]]: variant === "small",
      [styles["normal"]]: variant === "normal",
    },
    classNames
  );

  const labelTextClassNames = cn(styles["field__label"], {
    [styles["small"]]: variant === "small",
    [styles["normal"]]: variant === "normal",
  });

  const inputClassName = cn(styles["field__input"], {
    [styles["normal"]]: variant === "normal",
    [styles["small"]]: variant === "small",
    [styles["error"]]: errors[name],
    [styles["valid"]]: fieldValidation && isDirty && !invalid,
  });

  return (
    <label className={fieldClassNames}>
      {label ? <span className={labelTextClassNames}>{label}</span> : null}
      <span
        className={`${styles["field__wrapper"]} ${
          variant === "small" ? styles["small"] : ""
        }`}
      >
        <span className={styles["wrapper"]}>
          <input
            {...props}
            {...register(name)}
            type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
            className={inputClassName}
            name={name}
          />
          {fieldIcons ? (
            <span className={styles["icons"]}>
              {isPassword ? (
                <button
                  className={`${styles["icon"]} ${styles["eye"]}`}
                  type="button"
                  onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                >
                  <Icon
                    size={24}
                    icon={
                      isVisiblePassword
                        ? IconEnum.EYE_OPEN
                        : IconEnum.EYE_CLOSED
                    }
                  />
                </button>
              ) : null}
              {isDirty && !invalid && fieldValidation ? (
                <span className={`${styles["icon"]} ${styles["check"]}`}>
                  <Icon icon={IconEnum.CHECK} size={24} />
                </span>
              ) : null}
              {isDirty && invalid && fieldValidation ? (
                <span className={`${styles["icon"]} ${styles["cross"]}`}>
                  <Icon icon={IconEnum.CROSS_SMALL} size={24} />
                </span>
              ) : null}
            </span>
          ) : null}
        </span>
        {errors[name] && (
          <span className={styles["field__error"]}>
            {errors[name]?.message as string}
          </span>
        )}
      </span>
    </label>
  );
};

export default FormField;
