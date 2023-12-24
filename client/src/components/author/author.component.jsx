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
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  const fetchAuthorBlogs = async () => {
    if (end) {
      alert("No more blogs to fetch");
      return;
    }
    try {
      const resAuthorBlogs = await getAuthorBlogs(authorId, page);
      setAuthorBlogs([...authorBlogs, ...resAuthorBlogs]);
      setPage(page + 1);
      if (resAuthorBlogs.length === 0) {
        alert("No more blogs to fetch");
        setEnd(true);
      }
    } catch (error) {
      console.error("Error fetching author blogs:", error);
    }
  };

  useEffect(() => {
    const getAuthorsAsyncWrapper = async () => {
      const resAuthor = await getAuthorDetails(authorId);
      setAuthor(resAuthor);
      await fetchAuthorBlogs();
    };
    getAuthorsAsyncWrapper();
  }, [authorId]);

  const handleLoadMore = () => {
    fetchAuthorBlogs();
  };

  return (
    <AuthorDetailsContainer>
      <AuthorInfo>FirstName: {author.firstName}</AuthorInfo>
      <AuthorInfo>LastName: {author.lastName}</AuthorInfo>
      <AuthorInfo>UserName: {author.username}</AuthorInfo>
      <BlogCardContainer>
        <BlogCard blogs={authorBlogs} />
      </BlogCardContainer>
      {authorBlogs.length > 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </AuthorDetailsContainer>
  );
}
