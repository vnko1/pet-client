import { InputHTMLAttributes } from "react";

export type FormFieldProps = {
  classNames?: string;
  label?: string;
  name: string;
  variant?: "small" | "normal";
  fieldIcons?: boolean;
  fieldValidation?: boolean;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
