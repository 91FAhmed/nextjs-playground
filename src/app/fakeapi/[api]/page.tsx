import React from "react";

type jsondata = {
  id: number;
  title: string;
};

export default async function Fetch({ params }: { params: { api: number } }) {
  let placeholder = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.api}`
  );
  let fakeJson: jsondata = await placeholder.json();

  if (!fakeJson) {
  }
  return (
    <div>
      {fakeJson.title} {fakeJson.id}
    </div>
  );
}
