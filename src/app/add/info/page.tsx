"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { IconEnum } from "@/types";
import { FormField, ImageField, RadioField, TextAreaField } from "@/components";

import styles from "./info.module.scss";

import addImage from "@/assets/images/add.png";

const fields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Type location of pet",
    isTextArea: false,
  },
  {
    name: "comments",
    label: "Comments",
    placeholder: "Type comments",
    isTextArea: true,
  },
];

const forSellFields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Type location of pet",
    isTextArea: false,
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Type price of pet",
    isTextArea: false,
  },
  {
    name: "comments",
    label: "Comments",
    placeholder: "Type comments",
    isTextArea: true,
  },
];

function InfoPage() {
  const watch = useWatch();
  const { setValue } = useFormContext();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isYourPet = watch.category === "your-pet";
  const isForSell = watch.category === "sell";

  const filteredFields = isForSell
    ? forSellFields
    : fields.slice(isYourPet ? 1 : 0);

  useEffect(() => {
    setValue("file", file);
  }, [file, setValue]);

  return (
    <div className={styles["info"]}>
      {!isYourPet ? (
        <div className={styles["gender"]}>
          <p className={styles["gender__title"]}>The sex</p>
          <div className={styles["gender__wrapper"]}>
            <RadioField
              name="sex"
              label="Female"
              value="female"
              icon={IconEnum.FEMALE}
            />
            <RadioField
              name="sex"
              label="Male"
              value="male"
              icon={IconEnum.MALE}
            />
          </div>
        </div>
      ) : null}
      <div className={styles["image"]}>
        <p className={styles["image__title"]}>Add photo</p>

        <button
          type="button"
          className="bg-transparent"
          onClick={() => inputRef.current?.click()}
        >
          <ImageField
            name="file"
            setFile={setFile}
            setPreview={setPreview}
            preview={preview || addImage}
            inputRef={inputRef}
            width={182}
            height={182}
            alt="pet photo"
            classNames={styles["image__input"]}
          />
        </button>
      </div>
      {filteredFields.map(({ name, label, placeholder, isTextArea }) => {
        if (isTextArea)
          return (
            <TextAreaField
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
            />
          );
        return (
          <FormField
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        );
      })}
    </div>
  );
}

export default InfoPage;
