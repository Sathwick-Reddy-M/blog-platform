import { useEffect, useState } from "react";
import { getBlogPost } from "../../utils/requests";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import {
  BlogContainer,
  BlogTitle,
  AuthorInfo,
  ContentContainer,
  PublishedInfo,
  UpdatedInfo,
} from "./blog.styles";

export function Blog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    async function getBlogPostAsyncWrapper() {
      try {
        const resBlog = await getBlogPost(blogId);
        setBlog(resBlog);
      } catch (error) {
        console.log(error);
      }
    }
    getBlogPostAsyncWrapper();
  }, []);
  return (
    <BlogContainer>
      <BlogTitle>{blog.name}</BlogTitle>
      <AuthorInfo>Author: {blog.author}</AuthorInfo>
      <ContentContainer
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(blog.contentHTML),
        }}
      />
      <PublishedInfo>Published: {blog.datePublished}</PublishedInfo>
      <UpdatedInfo>Updated: {blog.dateUpdated}</UpdatedInfo>
    </BlogContainer>
  );
}
