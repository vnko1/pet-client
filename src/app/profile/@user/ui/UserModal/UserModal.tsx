"use client";
import React, { FC, useEffect, useState } from "react";

import { getDataFromLS, removeDataFromLS } from "@/utils";
import { Modal, UIButton } from "@/components";
import { IconEnum } from "@/types";

import styles from "./UserModal.module.scss";

const UserModal: FC = () => {
  const [newUser, setNewUser] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setNewUser(getDataFromLS<boolean>("newUser") || false);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      removeDataFromLS("newUser");
      setNewUser(false);
    }, 300);
  };

  return (
    <Modal
      active={newUser}
      visible={visible}
      setVisible={setVisible}
      close={close}
      classNames={styles["modal"]}
    >
      <div className={styles["modal__content"]}>
        <h2 className={styles["title"]}>Congrats!</h2>
        <p className={`modal__text ${styles["text"]}`}>
          Your registration is success
        </p>
        <div className={styles["button"]}>
          <UIButton
            icon={IconEnum.PET}
            color="secondary"
            alignIcon="right"
            fullWidth
            onClick={() => close()}
          >
            Go to profile
          </UIButton>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
