import { useEffect, useState } from "react";
import { getBlogPosts } from "../../utils/requests";

export function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogPostsAsyncWrapper() {
      try {
        const result = await getBlogPosts();
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    getBlogPostsAsyncWrapper();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {blogs.map((value, index) => {
        return <p key={index}> {value.name} </p>;
      })}
    </div>
  );
}
