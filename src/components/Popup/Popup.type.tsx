import { Dispatch, ReactNode, SetStateAction } from "react";

export type PopupProps = {
  active: boolean;
  isVisible: boolean;
  children: ReactNode;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  classNames?: string;
  customAnimationClassNames?: string;
  eventHandler?: () => void;
};
