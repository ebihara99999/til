/** Hacker Newsの人気・最新の記事500件の記事IDを取得する */
export async function getTopStories(): Promise<number[]> {
  return fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
    (res) => res.json()
  );
}
/** 記事の詳細データを取得する */
export async function getItem(id: Item["id"]): Promise<Item> {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}

/** 記事のコメントデータを取得する */
export async function getComment(id: Comment["id"]): Promise<Comment> {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (res) => res.json()
  );
}
