import axios from "axios";
import { getParsedSession, getSession } from "@/lib";
import { CustomError } from "@/services";
import { JSONParser } from "@/utils";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const privateAxiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

privateAxiosApi.interceptors.request.use(
  async (config) => {
    const { access_token } = await getParsedSession();

    if (access_token)
      config.headers.Authorization = "Bearer" + " " + access_token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const res = await fetch(BASE_URL + endpoint, reqOpt);
  const data = await res.json();

  if (!res.ok) {
    if (data.statusCode === 401) return null;

    throw new CustomError(
      data.statusCode,
      data.path,
      data.errorMessage,
      data.errorMessage
    );
  }

  return JSONParser(data);
}
