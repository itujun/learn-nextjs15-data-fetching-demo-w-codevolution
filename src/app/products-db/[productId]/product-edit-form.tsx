'use client';

import { editProduct, FormState } from '@/actions/products';
import { useActionState } from 'react';
import { ProductType } from '../page';
import Form from 'next/form';

export default function ProductEditForm({ product }: { product: ProductType }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <Form action={formAction} className="p-4 space-y-4 max-w-96">
      <input type="hidden" name="id" value={product.id} />
      <div>
        <label htmlFor="title" className="text-white">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="block w-full p-2 bg-white text-black border rounded"
          defaultValue={product.title}
        />
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label htmlFor="price" className="text-white">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="block w-full p-2 bg-white text-black border rounded"
          defaultValue={product.price}
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label htmlFor="description" className="text-white">
          Description
        </label>
        <input
          name="description"
          type="text"
          className="block w-full p-2 bg-white text-black border rounded"
          defaultValue={product.description ?? ''}
        />
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? 'Submiting...' : 'Submit'}
      </button>
    </Form>
  );
}
