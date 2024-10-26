import { useGetProductsQuery } from "../slices/product";
import ProductItem from "./ProductItem";

interface IProduct {
  id: number;
  title: string;
}

function Products() {
  const { data, isError, isLoading, refetch } = useGetProductsQuery(6);

  if (isLoading)
    return <p className="text-center text-blue-500 mt-4">Fetching data...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 mt-4">Error loading products.</p>
    );

  return (
    <section className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Products
      </h2>
      <ul className="space-y-4">
        {data?.products.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} refetch={refetch} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
