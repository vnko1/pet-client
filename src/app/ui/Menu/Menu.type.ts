import { Dispatch, SetStateAction } from "react";

import { ModalProps } from "@/components/Modal/Modal.type";

type Link = { label: string; href: string };

export interface IMenu extends Omit<ModalProps, "children"> {
  links: Link[];
  pathName: string;
  userName: null | string;
  isLoggedIn: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
