const products = ["chair", "table", "lamp"];
import Link from "next/link";

export default function Products() {
  return (
    <div>
      {products.map((prod, indx) => (
        <h1 className="text-fuchsia-500 text-2xl  " key={indx}>
          <Link href={`/products/${prod}`}>{prod}</Link>
        </h1>
      ))}
    </div>
  );
}

//[] - dynamic route
