import { InputHTMLAttributes } from "react";

export type CheckBoxProps = {
  classNames?: string;
  label: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
