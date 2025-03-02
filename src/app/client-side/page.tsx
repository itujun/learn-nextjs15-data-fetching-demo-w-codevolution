'use client';

import { useEffect, useState } from 'react';

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function ClientSidePage() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('failed to fething users');
        const result = await res.json();
        setUsers(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('an unknown error occured');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <h1>Client Side Fetching</h1>
      <ul className="space-y-4 p-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
