'use client';

import { addProduct, FormState } from '@/actions/products';
import Form from 'next/form';
// import { SubmitButton } from '@/components/SubmitButton';
import { useActionState } from 'react';

export default function ProductDBCreatePage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    addProduct,
    initialState
  );
  return (
    <Form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label htmlFor="title" className="text-white">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="block w-full p-2 bg-white text-black border rounded"
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
        />
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Submit
      </button> */}
      {/* <SubmitButton /> */}
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
