"use client";

import { useEffect, useState } from "react";

export const useModal = (timeout = 300, disableScroll = false) => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active && disableScroll) document.body.classList.add("no-scroll");
  }, [active, disableScroll]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setActive(false), timeout);
    document.body.classList.remove("no-scroll");
  };

  return { close, setActive, setVisible, visible, active };
};
