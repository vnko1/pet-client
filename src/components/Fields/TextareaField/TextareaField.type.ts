import { TextareaHTMLAttributes } from "react";

export type TextareaFieldProps = {
  classNames?: string;
  label?: string;
  name: string;
} & Partial<TextareaHTMLAttributes<HTMLTextAreaElement>>;
