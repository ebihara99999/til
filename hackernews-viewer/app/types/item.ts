interface Item {
  id: string;
  title: string;
  by: string;
  descendants: number;
  kids: [number];
  score: number;
  time: number;
  type: string;
  url: string;
}

type Summary = Pick<Item, 'id' | 'title'>;
