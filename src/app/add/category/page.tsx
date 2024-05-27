import React from "react";

import { RadioField } from "@/components";

import styles from "./category.module.scss";

const inputs = [
  {
    label: "your pet",
    name: "category",
    value: "your-pet",
  },
  {
    label: "sell",
    name: "category",
    value: "sell",
  },
  {
    label: "lost/found",
    name: "category",
    value: "lost-found",
  },
  {
    label: "in good hands",
    name: "category",
    value: "in-good-hands",
  },
];

function CategoryPage() {
  return (
    <div className={styles["category"]}>
      {inputs.map((input, index) => (
        <RadioField key={index} {...input} />
      ))}
    </div>
  );
}

export default CategoryPage;
