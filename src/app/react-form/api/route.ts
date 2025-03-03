import { createProduct } from '@/prisma-db';

export async function POST(request: Request) {
  const body = await request.json();
  const { title, price, description } = body;
  const product = await createProduct(title, price, description);
  return new Response(JSON.stringify(product), {
    headers: { 'Content-Type': 'application/json' },
  });
}
