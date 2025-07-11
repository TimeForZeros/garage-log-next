import { Suspense } from 'react';
import Loading from './loading';
import AddVehicle from '@/components/modals/add-vehicle';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/config';

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
  return (
    <>
      <div>Hello World</div>
      <AddVehicle />
      <div>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
    </>
  );
}
