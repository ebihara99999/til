import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getItem } from "~/utils/hackerNews.server";
import stylesUrl from "~/styles/article.css";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const links = () => {
  return [{rel: "stylesheet", href: stylesUrl}];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  invariant(id, 'Request with id.')
  const item = await getItem(id);

  return json({
    item,
  });
};

export default function Top20IdRoute() {
  const loaderData = useLoaderData<typeof loader>();
  const item = loaderData.item;

  return (
    <article>
      <h1>{item.title}</h1>
    </article>
  )
}
