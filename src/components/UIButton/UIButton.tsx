"use client";
import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { useFormStatus } from "react-dom";

import { Icon } from "@/components";

import { IUIButton } from "./UIButton.type";
import styles from "./UIButton.module.scss";

const UIButton: FC<IUIButton> = ({
  isLoading = false,
  className,
  children,
  fullWidth,
  color = "primary",
  variant = "contained",
  size = "small",
  type = "button",
  icon,
  iconSize = 24,
  isCustomIcon,
  alignIcon = "left",
  disabled,
  href,
  isCurrent,
  replace = false,
  onClick,
  ...props
}) => {
  const { pending } = useFormStatus();

  const variantClassName = cn({
    [styles["btn--contained"]]: variant === "contained",
    [styles["btn--outlined"]]: variant === "outlined",
    [styles["btn--text"]]: variant === "text",
  });

  const sizeClassName = cn({
    [styles["btn--small"]]: size === "small",
    [styles["btn--medium"]]: size === "medium",
    [styles["btn--large"]]: size === "large",
  });

  const colorClassName = cn({
    [styles["btn--primary"]]: color === "primary",
    [styles["btn--secondary"]]: color === "secondary",
    [styles["btn--accent"]]: color === "accent",
  });

  const alignIconClassName = cn({
    [styles["btn--with-icon"]]: icon || isCustomIcon,
    [styles["btn--icon-left"]]: alignIcon === "left",
    [styles["btn--icon-right"]]: alignIcon === "right",
  });
  const baseClassNames = cn(
    styles["btn"],
    variantClassName,
    sizeClassName,
    colorClassName,
    alignIconClassName,
    {
      [styles["btn--loading"]]: isLoading || pending,
    },
    {
      [styles["btn--fullwidth"]]: fullWidth,
    },
    { [styles["current"]]: isCurrent },
    className
  );

  if (href)
    return (
      <Link
        href={href}
        replace={replace}
        className={baseClassNames}
        onClick={onClick}
        aria-label="navigation link"
      >
        {icon ? (
          <Icon className="btn__icon" icon={icon} size={iconSize} />
        ) : null}
        {children}
      </Link>
    );
  return (
    <button
      {...props}
      type={type}
      className={baseClassNames}
      aria-label="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <Icon icon={icon} size={iconSize} /> : null}
      {children}
    </button>
  );
};

export default UIButton;
