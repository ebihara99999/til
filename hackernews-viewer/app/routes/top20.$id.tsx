import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getItem, getComment } from "~/utils/hackerNews.server";
import stylesUrl from "~/styles/article.css";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const links = () => {
  return [{rel: "stylesheet", href: stylesUrl}];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  invariant(id, 'Request with id.')
  const item = await getItem(id);
  const kidsItems: Comment[] = await Promise.all(
    item.kids.map((kidsItemId) => getComment(kidsItemId))
  );

  return json({
    item,
    kids: kidsItems,
  });
};

export default function Top20IdRoute() {
  const loaderData = useLoaderData<typeof loader>();
  const item = loaderData.item;
  const kids = loaderData.kids;

  return (
    <article>
      <h1>{item.title}</h1>
      <p>by {item.by} on {new Date(item.time * 1000).toLocaleString()}</p>
      <p><a href={item.url}>{item.url}</a></p>

      <h2>Comments</h2>
      {kids.map((kidsItem) => (
        <div key={kidsItem.id}>
          <h3>by: {kidsItem.by}</h3>
          <p>{kidsItem.text}</p>
          <p>{new Date(kidsItem.time * 1000).toLocaleString()}</p>
        </div>
      ))}
    </article>
  )
}
