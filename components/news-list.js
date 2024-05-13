import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <Image
              src={`/images/news/${news.image}`}
              alt={news.title}
              width={300}
              height={300}
            />

            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
