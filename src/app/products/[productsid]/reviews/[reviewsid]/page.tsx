import React from "react";
import { notFound } from "next/navigation";
export default async function Reviews({
  params,
}: {
  params: { productsid: string; reviewsid: string };
}) {
  const { productsid, reviewsid } = await params;
  return (
    <div>
      <h1>
        {" "}
        the Reviews for {productsid} is{" "}
        {Number(reviewsid) > 400 ? notFound() : reviewsid}
      </h1>
    </div>
  );
}
