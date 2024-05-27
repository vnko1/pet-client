import { ButtonHTMLAttributes } from "react";

import { IconEnum } from "@/types";

export type ButtonColorType = "primary" | "secondary" | "accent";
export type ButtonVariantType = "outlined" | "contained" | "text";
export type ButtonSizeType = "small" | "medium" | "large";
export type AlignIconType = "left" | "right";

export interface IUIButton
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  className?: string;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: IconEnum;
  isCustomIcon?: boolean;
  alignIcon?: AlignIconType;
  href?: string;
  isCurrent?: boolean;
  replace?: boolean;
  iconSize?: number;
  onClick?: () => void;
}
