export default function ProductsId({
  params,
}: {
  params: { productsid: string };
}) {
  return (
    <div>
      {" "}
      <div>
        Product information{" "}
        <h1>
          {`${params.productsid} Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ducimus sit porro deleniti?`}
        </h1>
      </div>
    </div>
  );
}
