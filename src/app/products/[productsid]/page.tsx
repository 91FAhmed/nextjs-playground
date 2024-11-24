import { Metadata } from "next";
type props = {
  params: {
    productid: string;
  };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`acme`);
    }, 100);
  });
  return {
    title: `product ${title}`,
  };
};

export default async function ProductsId({
  params,
}: {
  params: { productsid: props };
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
