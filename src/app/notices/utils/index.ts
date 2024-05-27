import { NoticeCategory } from "@/types";

export function getCategory(category: NoticeCategory) {
  switch (category) {
    case "sell":
      return "Sell";
    case "in-good-hands":
      return "In good hands";
    case "lost-found":
      return "lost/found";
  }
}
