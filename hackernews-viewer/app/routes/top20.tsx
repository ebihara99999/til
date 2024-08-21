import { useLoaderData, Link } from "@remix-run/react";
import { getItem, getTopStories } from "~/utils/hackerNews.server";
import stylesUrl from '../styles/top20.css';

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async () => {
  const top500Ids = await getTopStories();
  const top20Ids = top500Ids.slice(0, 20);


  const top20 = await Promise.all(top20Ids.map((id) => getItem(id)));
  const top20Summaries = top20.map((item) => ({
    id: item.id,
    title: item.title,
  }));
  return top20Summaries;
}

export default function Top20Route() {
  const top20Summaries = useLoaderData<typeof loader>();

  return (
    <div>
      <header>
        <h1>Hacker News Viewer</h1>
      </header>
      <div id="container">
        <div id="sidebar">
          <h2>Top 20</h2>
          <nav>
            <ul>
              {
                top20Summaries.map((summary) => (
                  <li key={summary.id}>
                    <Link to={`/top20/${summary.id}`}>{summary.title}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <main>
          <div>Show main contents here</div>
        </main>
      </div>
    </div>
  )
}
