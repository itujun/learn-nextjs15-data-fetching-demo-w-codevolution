import { Suspense } from 'react';
import Author from './author';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  // Kode ini akan memfilter hanya elemen-elemen di mana id-nya memiliki sisa pembagian 1 ketika dibagi dengan 10. Dengan kata lain, hanya post.id seperti 1, 11, 21, 31, ... yang akan masuk ke dalam filteredPosts.
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
            <Suspense
              fallback={<div className="text-sky-300">Loading author...</div>}
            >
              <Author userId={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
