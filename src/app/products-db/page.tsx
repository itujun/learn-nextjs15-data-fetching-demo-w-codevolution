import { getProducts } from '@/prisma-db';
import { ProductDetail } from './product-detail';

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: ProductType[] = await getProducts();

  return <ProductDetail products={products} />;
}
