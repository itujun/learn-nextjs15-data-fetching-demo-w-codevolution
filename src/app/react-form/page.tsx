'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateProductPage() {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/react-form/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, description }),
      });

      if (response.ok) {
        router.push('/products-db');
      }
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <label htmlFor="title" className="text-white">
        Title
      </label>
      <input
        type="text"
        name="title"
        className="block w-full p-2 bg-white text-black border rounded"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="price" className="text-white">
        Price
      </label>
      <input
        type="number"
        name="price"
        className="block w-full p-2 bg-white text-black border rounded"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <label htmlFor="description" className="text-white">
        Description
      </label>
      <input
        name="description"
        type="text"
        className="block w-full p-2 bg-white text-black border rounded"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
