import { SessionOptions } from "iron-session";

const SESSION_TIME = process.env.SESSION_EXP as string;

export interface SessionData {
  access_token: string | null;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  access_token: null,
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASS as string,
  cookieName: "session_token",
  ttl: +SESSION_TIME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
