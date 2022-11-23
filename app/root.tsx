import type { LinksFunction, MetaFunction } from "@remix-run/node";
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

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  const categories = await allProductCategories();
  return json({ categories })
}

export default function App() {
  const { categories } = useLoaderData<typeof loader>()

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-full flex flex-col">
        <Header categories={categories} />
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
