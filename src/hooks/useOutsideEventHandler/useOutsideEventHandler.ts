import { RefObject, useEffect } from "react";

export const useOutsideEventHandler = (
  ref: RefObject<HTMLDivElement>,
  eventHandler?: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        eventHandler && eventHandler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [eventHandler, ref]);
};
