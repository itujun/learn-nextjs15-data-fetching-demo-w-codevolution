'use client';
import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-700"
      disabled={pending}
    >
      {pending ? 'Submiting...' : 'Submit'}
    </button>
  );
};
