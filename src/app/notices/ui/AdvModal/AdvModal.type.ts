import { Dispatch, SetStateAction } from "react";

export type AdvModalProps = {
  visible: boolean;
  active: boolean;
  close: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
