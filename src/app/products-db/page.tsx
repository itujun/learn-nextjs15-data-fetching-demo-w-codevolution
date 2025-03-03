import { getProducts } from '@/prisma-db';
import Link from 'next/link';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: ProductType[] = await getProducts();
  return (
    <>
      <h1 className="text-2xl">Products</h1>
      <Link
        href="/product-db-create"
        className="text-white py-2 px-4 rounded bg-sky-500 my-2"
      >
        Add Product
      </Link>
      <ul className="space-y-4">
        {products.map((product) => (
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
          </li>
        ))}
      </ul>
    </>
  );
}
