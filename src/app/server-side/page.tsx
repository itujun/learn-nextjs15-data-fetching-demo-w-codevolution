type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function ServerSidePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserType[] = await res.json();
  return (
    <>
      <h1>Server Side Fetching</h1>
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
