import React from "react";
import Link from "next/link";
export default async function Archived() {
  const promiseLoad = await new Promise((r) => setTimeout(r, 2000));
  return (
    <div>
      Archived Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
      facilis, ad natus enim amet eum laborum dignissimos eius quidem illum quod
      unde modi laudantium.
      <Link className="underline text-green-300" href="/complex-dash">
        Unarchive
      </Link>
    </div>
  );
}
