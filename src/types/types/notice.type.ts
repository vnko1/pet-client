import { QueryParams } from "./query.type";
import { User } from "./user.type";

export type NoticeCategory = "sell" | "lost-found" | "in-good-hands";

export type NoticesTypes = {
  _id: string;
  name: string;
  category: NoticeCategory;
  date: string;
  type: string;
  imageUrl: string;
  comment?: string;
  title: string;
  sex: "male" | "female";
  location: string;
  price?: number;
  owner: Partial<User>;
  favorites: Array<string>;
};

export type NoticeQueryParams = {
  sex?: string | null;
  age?: string | null;
  category: "sell" | "lost-found" | "in-good-hands" | "favorites" | "own";
} & QueryParams;
