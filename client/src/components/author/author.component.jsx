import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorDetails } from "../../utils/requests";

export function Author() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function getAuthorsAsyncWrapper() {
      const resAuthor = await getAuthorDetails(id);
      setAuthor(resAuthor);
    }
    getAuthorsAsyncWrapper();
  }, []);

  return (
    <div>
      <p>FirstName: {author.firstName}</p>
      <p>LastName: {author.lastName}</p>
      <p>UserName: {author.username}</p>
    </div>
  );
}
