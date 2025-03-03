import { getProduct } from '@/prisma-db';
import { ProductType } from '../page';
import ProductEditForm from './product-edit-form';
import { notFound } from 'next/navigation';

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product: ProductType | null = await getProduct(Number(productId));

  if (!product) notFound();

  return <ProductEditForm product={product} />;
}
