import { HTMLInputTypeAttribute } from "react";

export type AuthFormProps = {
  classNames?: string;
  path: "login" | "register";
  fields: {
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    fieldValidation: boolean;
  }[];
};
