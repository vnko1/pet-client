"use client";
import React, { FC, useEffect, useRef } from "react";
import cn from "classnames";

import { useOutsideEventHandler } from "@/hooks";

import { PopupProps } from "./Popup.type";
import styles from "./Popup.module.scss";

const Popup: FC<PopupProps> = ({
  children,
  active,
  classNames,
  customAnimationClassNames,
  isVisible,
  setIsVisible,
  eventHandler,
}) => {
  const nodeRef = useRef(null);

  useOutsideEventHandler(nodeRef, eventHandler);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active, setIsVisible]);

  const popupClassNames = cn(
    styles["popup"],
    {
      [styles["active"]]: isVisible,
    },
    classNames,
    isVisible ? customAnimationClassNames : ""
  );

  if (!active) return null;
  return (
    <div ref={nodeRef} className={popupClassNames}>
      {children}
    </div>
  );
};

export default Popup;
