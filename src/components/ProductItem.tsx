import { useDeleteProductMutation } from "../slices/product";

interface IProduct {
  id: number;
  title: string;
}

interface Props {
  product: IProduct;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: any;
}

function ProductItem({ product, refetch }: Props) {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async (productId: number) => {
    try {
      await deleteProduct(productId);
      refetch();
      console.log(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <li className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center">
      <p className="text-lg font-medium text-gray-700">{product.title}</p>
      <button
        onClick={() => handleDelete(product.id)}
        disabled={isLoading}
        className={`flex items-center text-red-500 hover:text-red-700 transition-colors ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? <span>Deleting...</span> : <span>Delete</span>}
      </button>
    </li>
  );
}

export default ProductItem;
