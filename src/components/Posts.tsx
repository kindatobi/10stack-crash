import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Error fetching Posts");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 20000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  return (
    <div>
      {data.map((post) => (
        <p> {post.title} </p>
      ))}
    </div>
  );
}
