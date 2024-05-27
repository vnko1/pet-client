"use client";
import React, { FC } from "react";
import Image from "next/image";

import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import { deletePet } from "@/lib";

import { PetProps } from "./Pet.type";
import styles from "./Pet.module.scss";

const Pet: FC<PetProps> = ({ imageUrl, name, date, comments, type, _id }) => {
  const onHandleDeleteClick = async () => {
    try {
      await deletePet(_id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles["pet"]}>
      <div className={styles["pet__top-wrapper"]}>
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt="Pet"
          className={styles["image"]}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
        />
      </div>
      <div className={styles["pet__bottom-wrapper"]}>
        <div className={styles["trash-button"]}>
          <UIButton
            variant="text"
            icon={IconEnum.TRASH}
            color="accent"
            onClick={onHandleDeleteClick}
          />
        </div>
        <p className={styles["label"]}>
          <span>Name:</span> {name}
        </p>
        <p className={styles["label"]}>
          <span>Date of birth: </span>
          {date}
        </p>
        <p className={styles["label"]}>
          <span>Type: </span>
          {type}
        </p>
        {comments ? (
          <p className={styles["label"]}>
            <span>Comments: </span>
            {comments}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Pet;
