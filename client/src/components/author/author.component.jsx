import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogCard } from "../blog-card/blog-card.component";
import { getAuthorDetails, getAuthorBlogs } from "../../utils/requests";

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
    <div>
      <p>FirstName: {author.firstName}</p>
      <p>LastName: {author.lastName}</p>
      <p>UserName: {author.username}</p>
      <BlogCard blogs={authorBlogs} />
    </div>
  );
}
