import * as z from "zod";
import { emailValid, passwordValid } from "@/utils";

export const authSchema = (path: string) => {
  return z
    .object({
      email: z
        .string({ required_error: "Email field is required" })
        .email("Enter a valid Email")
        .min(10, { message: "Minimum 10 characters" })
        .max(70, { message: "Maximum 70 characters" })
        .regex(emailValid, { message: "Enter a valid Email" }),
      password: z
        .string({ required_error: "Password field is required" })
        .min(6, { message: "Enter 6 or more characters" })
        .max(16, { message: "Please enter 16 characters or less" })
        .regex(passwordValid, {
          message: "Please enter min 6 characters and max 16",
        }),
      name: z
        .string({ required_error: "Name field is required" })
        .min(2, { message: "Minimum 2 characters" })
        .max(15, { message: "Maximum 16 characters" })
        .optional(),
      confirmPassword: z
        .string({ required_error: "Confirm password field is required" })
        .optional(),
    })
    .refine((data) => path !== "register" || data.name, {
      path: ["name"],
      message: "Name field is required for registration",
    })
    .refine(
      (data) => path !== "register" || data.confirmPassword === data.password,
      {
        path: ["confirmPassword"],
        message: "Passwords do not match",
      }
    );
};
