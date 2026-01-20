import { useQuery } from "@tanstack/react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPost = async (id: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Error fetching Posts");
  return res.json();
};

export default function PostById({ id }: { id: number }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
    staleTime: 20000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return <div>{data.title}</div>;
}
