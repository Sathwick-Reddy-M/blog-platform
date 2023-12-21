import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogCard } from "../blog-card/blog-card.component";
import {
  getAuthorDetails,
  getAuthorBlogs,
} from "../../utils/requests/requests.utils";
import {
  AuthorDetailsContainer,
  AuthorInfo,
  BlogCardContainer,
} from "./author.styles";

export function Author() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState({});
  const [authorBlogs, setAuthorBlogs] = useState([]);

  useEffect(() => {
    async function getAuthorsAsyncWrapper() {
      const resAuthor = await getAuthorDetails(authorId);
      const resAuthorBlogs = await getAuthorBlogs(authorId);
      setAuthor(resAuthor);
      setAuthorBlogs(resAuthorBlogs);
    }
    getAuthorsAsyncWrapper();
  }, []);

  return (
    <AuthorDetailsContainer>
      <AuthorInfo>FirstName: {author.firstName}</AuthorInfo>
      <AuthorInfo>LastName: {author.lastName}</AuthorInfo>
      <AuthorInfo>UserName: {author.username}</AuthorInfo>
      <BlogCardContainer>
        <BlogCard blogs={authorBlogs} />
      </BlogCardContainer>
    </AuthorDetailsContainer>
  );
}
