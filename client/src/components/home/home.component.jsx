import { useEffect, useState } from "react";
import { getBlogPosts } from "../../utils/requests";
import { BlogCard } from "../blog-card/blog-card.component.jsx";

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
      <BlogCard blogs={blogs} />
    </div>
  );
}
