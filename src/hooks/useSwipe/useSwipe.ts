import { useEffect, useState } from "react";

import { UseSwipeProps } from "./useSwipe.type";
import { useGetScreenSize } from "@/hooks";

export const useSwipe = ({
  left,
  right,
  enableSwipe = false,
  axis = "clientX",
  touchDistinction = 200,
  enableSwipeUpToScreen = 769,
}: UseSwipeProps) => {
  const [touchStart, setTouchStart] = useState(0);

  const [screenSize] = useGetScreenSize();

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) =>
      setTouchStart(e.changedTouches[0][axis]);

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0][axis];

      if (touchStart - touchEnd > touchDistinction) {
        left && left();
      }

      if (touchStart - touchEnd < -touchDistinction) {
        right && right();
      }
    };

    if (enableSwipe && screenSize < enableSwipeUpToScreen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    axis,
    enableSwipe,
    enableSwipeUpToScreen,
    screenSize,
    touchDistinction,
    touchStart,
  ]);
};
