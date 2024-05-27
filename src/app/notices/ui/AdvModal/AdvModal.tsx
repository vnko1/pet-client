import React, { FC } from "react";
import { IconEnum, LinksEnum } from "@/types";
import { Modal, UIButton } from "@/components";

import { AdvModalProps } from "./AdvModal.type";
import styles from "./AdvModal.module.scss";

const AdvModal: FC<AdvModalProps> = (props) => {
  return (
    <Modal classNames={styles["modal"]} {...props}>
      <div className={styles["modal__body"]}>
        <h2>Attention</h2>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={styles["buttons"]}>
          <UIButton
            variant="contained"
            size="small"
            icon={IconEnum.PET}
            alignIcon="right"
            href={LinksEnum.LOGIN}
          >
            Log IN
          </UIButton>
          <UIButton variant="outlined" size="small" href={LinksEnum.REGISTER}>
            Registration
          </UIButton>
        </div>
      </div>
    </Modal>
  );
};

export default AdvModal;
