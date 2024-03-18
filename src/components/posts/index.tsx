import { FC } from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Post } from '../../types';
import { fetchPosts } from '../../api/post';

interface IProps {}

const PostsComponent: FC<IProps> = () => {
  const { data, error, isLoading, isError }: UseQueryResult<Post[], Error> = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError && error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {data && (
        <ul>
          {(data as Post[])?.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsComponent;
