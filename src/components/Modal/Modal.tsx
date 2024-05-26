"use client";
import React, { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import { useSwipe } from "@/hooks";
import { IconEnum } from "@/types";
import { UIButton } from "@/components";

import { ModalProps } from "./Modal.type";
import styles from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({
  children,
  active,
  visible,
  classNames,
  backdropClassNames,
  transitionClassNames,
  swipe = "right",
  renderCrossButton = false,
  setVisible,
  close,
  ...props
}) => {
  useSwipe({ [swipe]: close, ...props });

  useEffect(() => {
    if (active) setVisible(true);
  }, [active, setVisible]);

  useEffect(() => {
    const handlePressESC = (event: { code: string }) => {
      if (event.code === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
  }, [close]);

  const onHandleBackDropClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const backDropClassNames = cn(
    styles["backdrop"],
    {
      [styles["active"]]: visible,
      [transitionClassNames || ""]: visible,
    },
    backdropClassNames
  );

  const modalClassNames = cn(styles["modal"], classNames);

  const markup = (
    <div className={backDropClassNames} onClick={onHandleBackDropClick}>
      <div className={modalClassNames}>
        {renderCrossButton && (
          <div className={styles["button-wrapper"]}>
            <UIButton
              onClick={close}
              variant="text"
              icon={IconEnum.CROSS}
              color="accent"
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );

  if (!active) return null;

  return createPortal(markup, document.body);
};

export default Modal;
