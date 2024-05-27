import { Dispatch, SetStateAction } from "react";
import { User } from "@/types";
import { ModalProps } from "@/components/Modal/Modal.type";

type Link = { label: string; href: string };

export interface IMenu extends Omit<ModalProps, "children"> {
  links: Link[];
  pathName: string;
  user: null | User;
  setActive: Dispatch<SetStateAction<boolean>>;
}
