import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { nextAuthOptions } from '@/config';
import Loading from './loading';

const Posts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <ul>
      {posts.map((post: { title: string; id: number }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default async function Dashboard() {
  const res = await getServerSession(nextAuthOptions);
  console.log(res);
  if (!res) redirect('/login');
  return (
    <div>
      <div>Hello World</div>
      <div>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}
