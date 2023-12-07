import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../utils/requests";
import DOMPurify from "dompurify";
import { Blog } from "../blog/blog.component";
import {
  BlogContainer,
  BlogPost,
  BlogTitle,
  BlogAuthor,
  BlogContent,
  BlogDate,
} from "./home.styles";

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
    <BlogContainer>
      <h1>Home</h1>
      {blogs.map((blog, index) => (
        <Link to={`/blog/${blog.id}`} key={index}>
          <BlogPost>
            <BlogTitle>{blog.name}</BlogTitle>
            <BlogAuthor>Author: {blog.author}</BlogAuthor>
            <BlogContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.contentHTML),
              }}
            />
            <BlogDate>Published: {blog.datePublished}</BlogDate>
            <BlogDate>Updated: {blog.dateUpdated}</BlogDate>
          </BlogPost>
        </Link>
      ))}
    </BlogContainer>
  );
}
