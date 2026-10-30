import React from 'react'
import { useEffect, useState } from "react";
import { type Books } from '../api/books';

const books = [
  { id: 1, title: "Чистый код", author: "Роберт Мартин" },
  { id: 2, title: "Грокаем алгоритмы", author: "Адитья Бхаргава" },
];

export function getBooksMock() {
  return new Promise<Books[]>((resolve) => {
    setTimeout(() => resolve(books), 800);
  });
}

function prom() {
  return (
    <div>prom</div>
  )
}

export default prom