import { CustomError } from "@/services";

export async function publicApi(endpoint: string, reqInit?: RequestInit) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, reqInit);
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
