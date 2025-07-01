import { Suspense } from 'react';
import Loading from './loading';

const wait = async (ms: number): Promise<void> => new Promise((res) => setTimeout(() => res(), ms));
const Posts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  await wait(2000);
  return (
    <ul>
      {posts.map((post: any) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
};
export default async function Dashboard() {
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
