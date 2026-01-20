import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const createPost = async (newPost: { title: string; body: string }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  return res.json();
};

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ title, body: "This is a new post" });
  };

  return (
    <div>
      Lets create a post
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
