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
