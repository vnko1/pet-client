"use client";
import React, { FC, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, Icon, ImageField, UIButton } from "@/components";
import { imagePlaceHolder } from "@/utils";
import { IconEnum } from "@/types";

import { userSchema, UserSchemaType } from "./UserForm.schema";
import { UserFromProps } from "./UserForm.type";
import styles from "./UserForm.module.scss";
import { sessionLogout } from "@/lib";
import { useRouter } from "next/navigation";

const UserForm: FC<UserFromProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [active, setActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const methods = useForm<UserSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(userSchema),
    values: {
      ...user,
      birthday: new Date(user?.birthday || Date.now()).toLocaleDateString(
        "en-GB"
      ),
    },
  });

  const { handleSubmit, setValue } = methods;

  const buttonsClassName = cn(styles["form__buttons"], {
    [styles["edit"]]: isEditing,
  });

  const onHandleCrossClick = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = async () => {
    await sessionLogout();
    router.refresh();
  };

  const submit: SubmitHandler<UserSchemaType> = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key: string) => {
      if (data[key as keyof UserSchemaType])
        formData.append(key, data[key as keyof UserSchemaType]);
    });
    try {
      // const res = await updateUser(formData);
    } catch (error) {
      // if (isAxiosError(error))
      //   setError("root.serverError", {
      //     type: "custom",
      //     message: error.response?.data.errorMessage,
      //   });
    } finally {
      setIsLoading(false);
    }
  };

  const renderImageButtons = !active ? (
    <button
      type="button"
      className={`${styles["button"]} ${styles["button-text"]}`}
      onClick={() => {
        imageInputRef.current?.click();
      }}
    >
      <Icon icon={IconEnum.CAMERA} size={24} />
      <span>Edit photo</span>
    </button>
  ) : (
    <div className={styles["buttons"]}>
      <button
        type="button"
        onClick={() => {
          setActive(false);
          setValue("file", file);
        }}
        className={`${styles["button"]} ${styles["button-text"]}`}
      >
        <Icon icon={IconEnum.CHECK} size={24} />
        <span>Confirm</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setPreview(null);
          setFile(null);
          setActive(false);
        }}
        className={`${styles["button"]} ${styles["button-icon"]}`}
      >
        <Icon icon={IconEnum.CROSS} size={24} />
      </button>
    </div>
  );
  const image = preview || user?.avatarUrl || "";
  return (
    <FormProvider {...methods}>
      <form
        className={styles["form"]}
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <div className={styles["cross-btn-wrapper"]}>
          <UIButton
            variant="text"
            color="accent"
            iconSize={24}
            onClick={onHandleCrossClick}
            icon={!isEditing ? IconEnum.EDIT : IconEnum.CROSS}
          />
        </div>
        <div className={styles["form__image"]}>
          <div className={styles["thumb"]}>
            <ImageField
              name="file"
              inputRef={imageInputRef}
              preview={image}
              setPreview={setPreview}
              setActive={setActive}
              setFile={setFile}
              width={182}
              height={182}
              alt="user avatar"
              placeholder="blur"
              blurDataURL={imagePlaceHolder}
            />
          </div>
          {isEditing ? renderImageButtons : null}
        </div>
        <div className={styles["form__content"]}>
          <FormField
            name="name"
            variant="small"
            label="Name:"
            type="text"
            disabled={!isEditing}
          />
          <FormField
            name="email"
            variant="small"
            label="Email:"
            type="email"
            disabled={!isEditing}
          />
          <FormField
            name="birthday"
            variant="small"
            label="Birthday:"
            type="text"
            disabled={!isEditing}
            placeholder="00.00.0000"
          />
          <FormField
            name="phone"
            variant="small"
            label="Phone:"
            type="text"
            disabled={!isEditing}
            placeholder="+380000000000"
          />
          <FormField
            name="city"
            variant="small"
            label="City:"
            type="text"
            placeholder="Kyiv"
            disabled={!isEditing}
          />
          <div className={buttonsClassName}>
            {isEditing ? (
              <>
                <UIButton
                  color="secondary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  isLoading={isLoading}
                >
                  Save
                </UIButton>
                {methods.formState.errors.root?.serverError ? (
                  <p className={styles["error"]}>
                    {methods.formState.errors.root?.serverError.message}
                  </p>
                ) : null}
              </>
            ) : (
              <button
                className={styles["custom-btn"]}
                type="button"
                onClick={handleLogout}
              >
                <Icon size={24} icon={IconEnum.LOGOUT} /> <span>Log Out</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserForm;
