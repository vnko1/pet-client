"use client";
import React, { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";

import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { addNotice, addPet } from "@/lib";

import { NavBar } from "./ui";
import { getUrl } from "./utils";
import { addPetSchema, AddPetType } from "./addPet.schema";
import styles from "./add.module.scss";

function AddPetLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<AddPetType>({
    resolver: zodResolver(addPetSchema),
    defaultValues: { category: "your-pet" },
    mode: "all",
  });

  const onHandleNextClick = () => {
    const next = getUrl(pathName).next;

    if (next) return router.replace(next);
  };

  const onHandleBackClick = () => {
    const prev = getUrl(pathName).prev;
    if (prev) return router.replace(prev);

    router.back();
  };

  const onHandleSubmit: SubmitHandler<AddPetType> = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key: string) => {
      if (data[key as keyof AddPetType])
        formData.append(key, data[key as keyof AddPetType]);
    });

    try {
      data.category === "your-pet"
        ? await addPet(formData)
        : await addNotice(formData);

      if (data.category === "your-pet") router.push(LinksEnum.USER);
      else if (data.category === "sell") router.push(LinksEnum.NOTICES);
      else if (data.category === "lost-found")
        router.push(LinksEnum.NOTICES_LOST_FOUND);
      else if (data.category === "in-good-hands")
        router.push(LinksEnum.NOTICES_IN_GOOD_HANDS);
    } catch (error) {
      if (error instanceof Error)
        methods.setError("root.serverError", {
          message: error.message,
          type: "custom",
        });
    } finally {
      setIsLoading(false);
    }
  };

  const baseClassNames = cn("wrapper", styles["add-pet"]);

  return (
    <div className={baseClassNames}>
      <div className={styles["head"]}>
        <h1 className={styles["title"]}>Add pet</h1>
        <NavBar path={pathName} />
      </div>
      <FormProvider {...methods}>
        <form
          className={styles["form"]}
          onSubmit={methods.handleSubmit(onHandleSubmit)}
        >
          <div className={styles["fields"]}>{children}</div>
          <div className={styles["buttons"]}>
            <UIButton
              type={pathName === LinksEnum.ADD_PET_INFO ? "submit" : "button"}
              color="secondary"
              icon={IconEnum.PET}
              alignIcon="right"
              onClick={onHandleNextClick}
              fullWidth
              isLoading={isLoading}
            >
              {pathName === LinksEnum.ADD_PET_INFO ? "Done" : "Next"}
            </UIButton>
            <UIButton
              variant="text"
              color="accent"
              icon={IconEnum.ARROW}
              onClick={onHandleBackClick}
              fullWidth
            >
              {pathName === LinksEnum.ADD_PET_CATEGORY ? "Cancel" : "Back"}
            </UIButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddPetLayout;
