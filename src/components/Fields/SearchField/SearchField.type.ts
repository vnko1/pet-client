import { InputHTMLAttributes } from "react";

export type SearchFieldProps = {
  classNames?: string;
  label?: string;
  onHandleChange: (term: string) => void;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
