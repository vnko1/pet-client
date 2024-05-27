"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { IconEnum, NoticesTypes } from "@/types";
import { Icon, Modal, UIButton } from "@/components";
import { useModal } from "@/hooks";

import { getCategory } from "../../utils";
import { AdvModal, Pet } from "..";

import { NoticeProps } from "./Notice.type";
import styles from "./Notice.module.scss";

const Notice: FC<NoticeProps> = ({
  _id,
  imageUrl,
  title,
  userId,
  category,
  location,
  favorites,
  sex,
  owner,
}) => {
  const advModal = useModal(undefined, true);
  const petModal = useModal(undefined, true);
  const deleteModal = useModal(undefined, true);

  const [petIsLoading, setPetIsLoading] = useState(false);
  const [petCard] = useState<NoticesTypes | null>(null);

  const [isFavorite] = useState(
    favorites.some((item) => item.toString() === userId)
  );

  const openPetModal = async () => {
    try {
      setPetIsLoading(true);
      _id;
      // const res = await getNotice(_id);

      // petModal.setActive(true);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    } finally {
      setPetIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      // await deleteNotice(_id);
    } catch (error) {
      console.log(error);
    }
  };
  const onTrashClick = () => {
    deleteModal.setActive(true);
  };
  const onCancel = () => {
    deleteModal.setActive(false);
  };

  const onHandleFavoriteClick = async () => {
    if (!userId) return advModal.setActive(true);

    try {
      // const res = isFavorite
      //   ? await removeFromFavorite(_id)
      //   : await addToFavorite(_id);
    } catch (error) {
      console.log(error);
    }
  };

  const favoriteClassNames = cn(
    styles["label"],
    styles["label__btn"],
    styles["favorite"],
    { [styles["active"]]: isFavorite }
  );
  return (
    <div className={styles["notice"]}>
      <div className={styles["notice__thumb"]}>
        <Image
          src={imageUrl}
          alt="pet"
          sizes="(min-width:320px) 100%"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
        />
        <p className={`${styles["label"]} ${styles["category"]}`}>
          {getCategory(category)}
        </p>
        <p
          className={`${styles["label"]} ${styles["label__info"]} ${styles["location"]}`}
        >
          <Icon size={24} icon={IconEnum.LOCATION} />
          <span>{location}</span>
        </p>
        <p
          className={`${styles["label"]} ${styles["label__info"]} ${styles["sex"]}`}
        >
          <Icon
            size={24}
            icon={sex === "female" ? IconEnum.FEMALE : IconEnum.MALE}
          />
          <span>{sex}</span>
        </p>
        {userId === owner ? (
          <button
            onClick={onTrashClick}
            className={`${styles["label"]} ${styles["label__btn"]} ${styles["trash"]}`}
          >
            <Icon size={24} icon={IconEnum.TRASH} />
          </button>
        ) : null}
        <button className={favoriteClassNames} onClick={onHandleFavoriteClick}>
          <Icon size={24} icon={IconEnum.HEART} />
        </button>
      </div>
      <div className={styles["notice__content"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <UIButton
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={openPetModal}
          isLoading={petIsLoading}
        >
          Learn more
        </UIButton>
      </div>
      <Modal classNames={styles["modal"]} {...deleteModal}>
        <h2 className={styles["modal__title"]}>Delete advertisement?</h2>
        <p className={styles["modal__text"]}>
          Are you sure you want to delete <b>&quot;{`${title}`}&quot;?</b> You
          can&apos;t undo this action.
        </p>
        <div className={styles["modal__buttons"]}>
          <UIButton variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </UIButton>
          <UIButton
            variant="contained"
            color="secondary"
            icon={IconEnum.TRASH}
            alignIcon="right"
            onClick={onDelete}
          >
            Yes
          </UIButton>
        </div>
      </Modal>
      <Modal classNames={styles["pet-modal"]} {...petModal}>
        <Pet pet={petCard as NoticesTypes} userId={userId} />
      </Modal>
      <AdvModal {...advModal} />
    </div>
  );
};

export default Notice;
