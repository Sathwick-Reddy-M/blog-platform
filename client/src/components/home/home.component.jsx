import { useEffect, useState } from "react";
import { getBlogPosts } from "../../utils/requests/requests.utils";
import { BlogCard } from "../blog-card/blog-card.component.jsx";
import { HomeContainer, HomeTitle } from "./home.styles";

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
    <HomeContainer>
      <HomeTitle>Home</HomeTitle>
      <BlogCard blogs={blogs} />
    </HomeContainer>
  );
}
