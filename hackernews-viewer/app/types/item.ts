interface Item {
  id: string;
  title: string;
  by: string;
  descendants: number;
  kids: Comment['id'][];
  score: number;
  time: number;
  type: string;
  url: string;
}

type Summary = Pick<Item, 'id' | 'title'>;

interface Comment {
  by: string;
  id: string;
  kids: string[];
  parent: string;
  text: string;
  time: number;
  type: string;
}
