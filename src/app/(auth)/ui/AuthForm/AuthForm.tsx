"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, UIButton } from "@/components";
import { LinksEnum, LoginType, RegisterType } from "@/types";

import { setDataToLS } from "@/utils";
import { login, register } from "@/lib";

import { authSchema } from "./AuthForm.schema";
import { AuthFormProps } from "./AuthForm.type";
import styles from "./AuthForm.module.scss";

const SignUp: FC<AuthFormProps> = ({
  classNames,
  fields = [],
  path = "register",
}) => {
  const isRegister = path === "register";
  const schema = authSchema(path);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  type AuthSchemaType = z.infer<typeof schema>;

  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleRegister = async (data: RegisterType) => {
    try {
      await register(data);
      setDataToLS({ newUser: true });
      router.push(LinksEnum.LOGIN);
    } catch (error) {
      if (error instanceof Error)
        methods.setError("root.serverError", {
          message: error.message,
          type: "custom",
        });
    }
  };

  const handleLogin = async (data: LoginType) => {
    try {
      await login(data);
      router.push(LinksEnum.USER);
      router.refresh();
    } catch (error) {
      if (error instanceof Error)
        methods.setError("root.serverError", {
          message:
            error.message === "Unauthorized"
              ? "Wrong email or password!"
              : error.message,
          type: "custom",
        });
    }
  };

  const handleSubmit: SubmitHandler<AuthSchemaType> = async (data) => {
    setIsLoading(true);
    methods.reset(data, { keepValues: true });
    try {
      if (isRegister) return await handleRegister(data as RegisterType);
      await handleLogin(data as LoginType);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={`${styles["form"]} ${classNames}`}
        noValidate
      >
        {fields.map((field, index) => (
          <FormField key={index} {...field} fieldIcons />
        ))}
        <div className={styles["form__button"]}>
          <UIButton
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            fullWidth
            color="secondary"
          >
            {isRegister ? "Registration" : "Login"}
          </UIButton>
          {methods.formState.errors.root?.serverError ? (
            <p className={styles["form__error"]}>
              {methods.formState.errors.root?.serverError.message}
            </p>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUp;
