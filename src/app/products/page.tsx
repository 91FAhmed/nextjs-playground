const products = ["chair", "table", "lamp"];

export default function Products() {
  return (
    <div>
      {products.map((prod, indx) => (
        <h1 className="text-fuchsia-500 text-2xl  " key={indx}>
          <a href={`/products/${prod}`}>{prod}</a>
        </h1>
      ))}
    </div>
  );
}

//[] - dynamic route
