import { createCookieSessionStorage } from "@remix-run/node";
import invariant from "tiny-invariant";
import type { PersistSessionParams } from './types'
import { createSession } from '~/models/session'

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

const ACCESS_TOKEN_KEY = "accessToken";
const EXPIRATION_TIME = 60 * 60 * 24 * 7 // 1 week
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__auth_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const getSession = async (request: Request) => {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export const getAccessToken = async ( request: Request ): Promise<string | undefined> => {
  const session = await getSession(request);
  const accessToken = session.get(ACCESS_TOKEN_KEY);
  return accessToken;
}

export const persistAccessToken = async ({
  request,
  accessToken
}: PersistSessionParams) => {
  const session = await getSession(request);
  session.set(ACCESS_TOKEN_KEY, accessToken);
  const commitHeader = await sessionStorage.commitSession(
    session, {
      maxAge: EXPIRATION_TIME
    }
  )

  return {
    "Set-Cookie": commitHeader,
  };
}
