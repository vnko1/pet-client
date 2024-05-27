export type NavLinkProps = {
  label: string;
  href: string;
  isActive: boolean;
  isChecked: boolean;
};

export type NavBarProps = {
  path: string;
  category?: boolean;
  details?: boolean;
  info?: boolean;
};
