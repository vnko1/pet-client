import { CustomError } from "@/services";

export const JSONParser = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const tryCatchWrapper =
  <T, K>(cb: (data: T) => Promise<K>) =>
  async (data: T) => {
    try {
      return await cb(data);
    } catch (error) {
      if (error instanceof CustomError) throw new Error(error.errorMessage);
      if (error instanceof Error) throw new Error(error.message);
      throw new Error("Something went wrong! Try again later.");
    }
  };
