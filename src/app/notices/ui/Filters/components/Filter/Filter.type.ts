import { Dispatch, SetStateAction } from "react";

export type FilterProps = {
  classNames?: string;
  label: string;
  setSelectedGenderCheckBoxes: Dispatch<SetStateAction<string[]>>;
};
