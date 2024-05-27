import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type ImageFieldProps = {
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setFile: Dispatch<SetStateAction<File | null>>;
  setPreview: Dispatch<SetStateAction<string | null>>;
  width?: number;
  height?: number;
  alt?: string;
  preview?: StaticImageData | string | null;
  setActive?: Dispatch<SetStateAction<boolean>>;
  classNames?: string;
  imageClassNames?: string;
  disabled?: boolean;
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
};
