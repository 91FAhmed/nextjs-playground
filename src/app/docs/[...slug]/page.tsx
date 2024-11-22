import React from "react";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 0) {
    return <h1>Route not found</h1>;
  } else if (params.slug.length === 1) {
    return <h1>v</h1>;
  }

  return <div>Docs Home page</div>;
}
