'use client'

import axios from "axios"
import AddPost from './components/AddPost'
import Post from './components/Post';
import { useQuery } from "@tanstack/react-query"

interface User {
  name: string;
  image: string;
}

interface PostData {
  id: string;
  title: string;
  user: User;
}


const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}


export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: allPosts,
  });

  if (error) return <p>Sign in to view posts.</p>;
  if (isLoading) return <p>Loading....</p>;
  console.log(data)
  return (
    <main>
      <AddPost />
      {data?.map((post: PostData) => (
        <Post
          key={post.id}
          name={post.user?.name || 'Unknown'}
          avatar={post.user?.image || '/default-avatar.png'}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
};