import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  BlogContainer,
  BlogPost,
  BlogTitle,
  BlogAuthor,
  BlogContent,
  BlogDate,
  BlogLink,
} from "./blog-card.styles";

export function BlogCard({ blogs }) {
  return (
    <BlogContainer>
      {blogs.map((blog, index) => (
        <BlogPost key={index}>
          <BlogLink to={`/blog/${blog.id}`}>
            <BlogTitle>{blog.name}</BlogTitle>
          </BlogLink>
          <BlogLink to={`/author/${blog.authorId}`}>
            <BlogAuthor>Author: {blog.author}</BlogAuthor>
          </BlogLink>
          <BlogContent
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.contentHTML),
            }}
          />
          <BlogDate>Published: {blog.datePublished}</BlogDate>
          <BlogDate>Updated: {blog.dateUpdated}</BlogDate>
        </BlogPost>
      ))}
    </BlogContainer>
  );
}
