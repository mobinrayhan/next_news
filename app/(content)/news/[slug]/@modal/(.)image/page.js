import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function FullScreenImage({ params }) {
  const newsSlug = params.slug;
  const news = await getNewsItem(newsSlug);

  if (!news) {
    notFound();
  }

  return (
    <ModalBackdrop>
      <dialog className="modal" open>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title}
          height={800}
          width={800}
        />
      </dialog>
    </ModalBackdrop>
  );
}
