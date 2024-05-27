import { Dispatch, SetStateAction } from "react";

export type FilterPopupProps = {
  className?: string;
  selectedGenderCheckBoxes: string[];
  setSelectedGenderCheckBoxes: Dispatch<SetStateAction<string[]>>;
};
