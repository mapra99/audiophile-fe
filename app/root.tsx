import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Footer, Header } from '~/components'
import { allProductCategories } from '~/models/product-category'
import { getLastStartedCart } from './models/purchase-cart';
import * as SessionStorage from '~/utils/session-storage'

import tailwindStylesheetUrl from "./styles/tailwind.css";

import type { LinksFunction, MetaFunction, LoaderArgs } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Audiophile",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async ({ request }: LoaderArgs) => {
  const categories = await allProductCategories();
  const { headers, sessionId } = await SessionStorage.getOrCreateSessionId(request)
  const activeCart = await getLastStartedCart(sessionId)

  console.log({ sessionId })
  return json({ categories, activeCart }, { headers })
}

export default function App() {
  const { categories, activeCart } = useLoaderData<typeof loader>()

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="min-h-full flex flex-col data-[modal=open]:overflow-hidden"
        data-modal="closed"
      >
        <Header categories={categories} activeCart={activeCart} />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer categories={categories} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
