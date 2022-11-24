import { createCookieSessionStorage } from "@remix-run/node";
import invariant from "tiny-invariant";
import type { PersistSessionParams } from './types'
import { createSession } from '~/models/session'

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

const SESSION_ID_KEY = "sessionId";
const EXPIRATION_TIME = 60 * 60 // 1 hour
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
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

export const getSessionId = async ( request: Request ): Promise<string | undefined> => {
  const session = await getSession(request);
  const sessionId = session.get(SESSION_ID_KEY);
  return sessionId;
}

export const persistSession = async ({
  request,
  sessionId
}: PersistSessionParams) => {
  const session = await getSession(request);
  session.set(SESSION_ID_KEY, sessionId);
  const commitHeader = await sessionStorage.commitSession(
    session, {
      maxAge: EXPIRATION_TIME
    }
  )

  return {
    "Set-Cookie": commitHeader,
  };
}

export const getOrCreateSessionId = async (request: Request) => {
  const sessionId = await getSessionId(request)
  if (sessionId) return { sessionId }

  const newSession = await createSession()
  const headers = await persistSession({ request, sessionId: newSession.uuid})

  return {
    sessionId: newSession.uuid,
    headers
  }
}
