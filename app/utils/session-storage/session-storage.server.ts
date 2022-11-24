import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

const SESSION_ID_KEY = "sessionId";

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

interface PersistSessionParams {
  request: Request;
  sessionId: string;
  redirectTo: string;
}

export const persistSession = async ({
  request,
  sessionId,
  redirectTo,
}: PersistSessionParams) => {
  const session = await getSession(request);
  session.set(SESSION_ID_KEY, sessionId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7 // 7 days
      }),
    },
  });
}
