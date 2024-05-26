"use client";
import React, { FC } from "react";
import { useFormContext, useFormState } from "react-hook-form";
import cn from "classnames";
import { TextareaFieldProps } from "./TextareaField.type";
import styles from "./TextareaField.module.scss";

const TextAreaField: FC<TextareaFieldProps> = ({
  classNames,
  name,
  label,
  ...props
}) => {
  const { errors } = useFormState();
  const { register } = useFormContext();

  const textareaClassName = cn(styles["field__input"], {
    [styles["error"]]: errors[name],
  });
  return (
    <label className={`${styles["field"]} ${classNames}`}>
      {label ? <span className={styles["field__label"]}>{label}</span> : null}
      <span className={styles["field__wrapper"]}>
        <textarea
          {...props}
          {...register(name)}
          name={name}
          className={textareaClassName}
        />
        {errors[name] && (
          <span className={styles["field__error"]}>
            {errors[name]?.message as string}
          </span>
        )}
      </span>
    </label>
  );
};

export default TextAreaField;
