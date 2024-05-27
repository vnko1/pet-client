import { InputHTMLAttributes } from "react";
import { IconEnum } from "@/types";
import { AlignIconType } from "@/components/UIButton/UIButton.type";

export type RadioFieldProps = {
  name: string;
  label: string;
  classNames?: string;
  icon?: IconEnum;
  alignIcon?: AlignIconType;
  iconSize?: number;
  iconColors?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
