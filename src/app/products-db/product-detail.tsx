'use client';

import { removeProduct } from '@/actions/products';
import Link from 'next/link';
import { useOptimistic } from 'react';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: ProductType[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <>
      <h1 className="text-2xl">Products</h1>
      <Link href="/product-db-create">
        <button className="text-white py-2 px-4 rounded bg-sky-500 my-2">
          Add Product
        </button>
      </Link>
      <ul className="space-y-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <Link href={`/products-db/${product.id}`}>
              <h2 className="text-xl font-semibold hover:text-amber-600 ">
                {product.title}
              </h2>
            </Link>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="text-white py-2 px-4 bg-red-500 rounded-md hover:opacity-50"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
};
