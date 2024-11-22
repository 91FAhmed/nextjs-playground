export default async function ProductsId({
  params,
}: {
  params: { productsid: string };
}) {
  const { productsid } = await params;

  return (
    <div>
      {" "}
      <div>
        Product information{" "}
        <h1>
          {`${productsid} Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ducimus sit porro deleniti?`}
        </h1>
      </div>
    </div>
  );
}
