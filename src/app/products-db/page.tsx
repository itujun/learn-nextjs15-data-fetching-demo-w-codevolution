import { getProducts } from '@/prisma-db';
import { ProductDetail } from './product-detail';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: ProductType[] = await getProducts(query);

  return <ProductDetail products={products} />;
}
