import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function NewsDetails({ params }) {
  const newsDetail = await getNewsItem(params.slug);

  if (!newsDetail) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsDetail.slug}/image`}>
          <Image
            src={`/images/news/${newsDetail.image}`}
            alt={newsDetail.title}
            width={100}
            height={100}
          />
        </Link>

        <h1>{newsDetail.title}</h1>
        <time dateTime={newsDetail.date}>{newsDetail.date}</time>
      </header>
      <p>{newsDetail.content}</p>
    </article>
  );
}
