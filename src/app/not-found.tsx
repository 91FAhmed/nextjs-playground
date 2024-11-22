import React from "react";

export default function CustomNotFound({
  params,
}: {
  params: { input: string };
}) {
  return (
    <div>
      <h1>Custom 404 not found {params.input}</h1>
    </div>
  );
}
