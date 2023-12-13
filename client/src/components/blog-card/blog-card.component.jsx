import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  BlogContainer,
  BlogPost,
  BlogTitle,
  BlogAuthor,
  BlogContent,
  BlogDate,
} from "./blog-card.styles";

export function BlogCard({ blogs }) {
  return (
    <BlogContainer>
      {blogs.map((blog, index) => (
        <BlogPost key={index}>
          <Link to={`/blog/${blog.id}`}>
            <BlogTitle>{blog.name}</BlogTitle>
          </Link>
          <Link to={`/author/${blog.authorId}`}>
            <BlogAuthor>Author: {blog.author}</BlogAuthor>
          </Link>
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
