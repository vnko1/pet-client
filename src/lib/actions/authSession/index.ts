"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getIronSession } from "iron-session";

import { defaultSession, SessionData, sessionOptions, sleep } from "@/services";
import { JSONParser } from "@/utils";

// * Refresh token
// const R_TOKEN_TIME = process.env.R_TOKEN_EXP as string;
// *

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.access_token = defaultSession.access_token;
  }
  if (shouldSleep) await sleep(250);
  return session;
}

export async function getParsedSession() {
  const res = await getSession();
  return JSONParser(res);
}

export async function handleAuth(access_token: string, userName: string) {
  const session = await getSession(true);
  session.access_token = access_token;
  session.userName = userName;
  session.isLoggedIn = true;
  await session.save();
}

export async function sessionLogin(
  access_token: string,
  userName: string
  // refresh_token: string
) {
  await handleAuth(access_token, userName);
  // * Refresh token
  // cookies().set("refresh_token", refresh_token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   maxAge: +R_TOKEN_TIME,
  // });
  // *
  revalidatePath("/", "layout");
}

export async function sessionLogout() {
  const session = await getSession(false);
  // * Refresh token
  // cookies().delete("refresh_token");
  // * Refresh token
  session.destroy();
  revalidatePath("/", "layout");
}
