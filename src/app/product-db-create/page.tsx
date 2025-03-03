import { createProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';

export default function ProductDBCreatePage() {
  async function creatingProduct(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    await createProduct(title, parseInt(price), description);
    redirect('/products-db');
  }
  return (
    <form action={creatingProduct} className="p-4 space-y-4 max-w-96">
      <label htmlFor="title" className="text-white">
        Title
      </label>
      <input
        type="text"
        name="title"
        className="block w-full p-2 bg-white text-black border rounded"
      />
      <label htmlFor="price" className="text-white">
        Price
      </label>
      <input
        type="number"
        name="price"
        className="block w-full p-2 bg-white text-black border rounded"
      />
      <label htmlFor="description" className="text-white">
        Description
      </label>
      <input
        name="description"
        type="text"
        className="block w-full p-2 bg-white text-black border rounded"
      />
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Submit
      </button>
    </form>
  );
}
