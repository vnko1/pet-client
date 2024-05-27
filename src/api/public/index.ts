import { CustomError } from "@/services";

export async function publicApi(endpoint: string, reqInit?: RequestInit) {
  const reqOpt = {
    ...reqInit,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, reqOpt);
  const data = await res.json();
  if (!res.ok)
    throw new CustomError(
      data.statusCode,
      data.path,
      data.errorMessage,
      data.errorMessage
    );
  return data;
}
