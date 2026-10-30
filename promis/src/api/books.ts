export interface Books {
    id: number;
    title: string;
    author: string
}

const books = [
  { id: 1, title: "Чистый код", author: "Роберт Мартин" },
  { id: 2, title: "Грокаем алгоритмы", author: "Адитья Бхаргава" },
];

export function getBooksMock(): Promise<Books[]> {
  return new Promise<Books[]>((resolve) => {
    setTimeout(() => resolve(books), 800);
  });
}