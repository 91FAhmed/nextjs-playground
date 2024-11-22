import React from "react";
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
        the Reviews for {productsid} is {reviewsid}
      </h1>
    </div>
  );
}
