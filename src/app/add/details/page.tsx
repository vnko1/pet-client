"use client";
import React from "react";
import { useWatch } from "react-hook-form";
import { FormField } from "@/components";

import styles from "./details.module.scss";

const fields = [
  { name: "title", label: "Title of add", placeholder: "Title of add" },
  { name: "name", label: "Pet`s name", placeholder: "Type name pet" },
  { name: "date", label: "Date of birth", placeholder: "Type date of birth" },
  { name: "type", label: "Type", placeholder: "Type of pet" },
];

function Details() {
  const watch = useWatch();

  return (
    <div className={styles["details"]}>
      {fields.slice(watch.category === "your-pet" ? 1 : 0).map((field) => (
        <FormField key={field.name} {...field} />
      ))}
    </div>
  );
}

export default Details;
