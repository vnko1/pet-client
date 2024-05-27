import { Dispatch, ReactNode, SetStateAction } from "react";
import { UseSwipeProps } from "@/hooks/useSwipe/useSwipe.type";

export type ModalProps = {
  active: boolean;
  visible: boolean;
  close: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  backdropClassNames?: string;
  classNames?: string;
  transitionClassNames?: string;
  swipe?: "left" | "right";
  renderCrossButton?: boolean;
} & Partial<UseSwipeProps>;
