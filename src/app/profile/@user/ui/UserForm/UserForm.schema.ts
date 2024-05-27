import { z } from "zod";
import {
  cityRegex,
  emailValid,
  phoneRegex,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
} from "@/utils";

export const userSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must contain min 2 symbols")
      .max(15, "Name must contain max 15 symbols")
      .optional(),
    email: z
      .string()
      .email("Email is not valid")
      .min(10, { message: "Minimum 10 characters" })
      .max(70, { message: "Maximum 70 characters" })
      .regex(emailValid, "Email is not valid")
      .optional(),
    birthday: z.string().optional(),
    city: z
      .string()
      .min(2, "City must contain min 2 symbols")
      .max(30, "City must contain max 30 symbols")
      .regex(cityRegex, "Invalid city")
      .optional(),
    phone: z
      .string()
      .min(13, "Phone must contain min 13 symbols")
      .regex(phoneRegex, "Invalid phone")
      .optional(),
    file: z
      .any()
      .refine((file) => {
        return file || file?.size <= MAX_FILE_SIZE;
      }, `Max image size is 3MB.`)
      .refine((file) => {
        return file || ACCEPTED_IMAGE_TYPES.includes(file?.type);
      }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
      .optional(),
  })
  .refine(
    (data) => {
      return Object.keys(data).some(
        (key: string) => (data as never)[key] !== undefined
      );
    },
    {
      message: "At least one field must be provided.",
      path: [],
    }
  );

export type UserSchemaType = z.infer<typeof userSchema>;
