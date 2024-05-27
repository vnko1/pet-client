import { getSession } from "@/lib";
import { CustomError } from "@/services";

export async function privateApi(
  endpoint: string,
  reqInit?: RequestInit,
  contentType = "application/json;charset=utf-8"
) {
  const { access_token } = await getSession();

  const reqOpt = {
    ...reqInit,
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": contentType,
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
