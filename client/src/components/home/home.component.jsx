import { useEffect, useState } from "react";
import { getBlogPosts } from "../../utils/requests/requests.utils";
import { BlogCard } from "../blog-card/blog-card.component.jsx";
import { HomeContainer, HomeTitle, LoadMoreButton } from "./home.styles";

export function Home() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  const fetchBlogs = async () => {
    if (end) {
      alert("No more blogs to fetch");
      return;
    }
    try {
      const result = await getBlogPosts(page);
      setBlogs([...blogs, ...result]);
      setPage(page + 1);
      if (result.length == 0) {
        setEnd(true);
        alert("No more blogs to fetch");
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("alertShown")) {
      alert(
        "Please refresh the page if it's blank, as the backend is hosted on Render and may stop if there are no requests. Subsequent requests may require a server reinstallation (which may take up to 1 min)."
      );

      localStorage.setItem("alertShown", true);
    }
    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    fetchBlogs();
  };

  return (
    <HomeContainer>
      <HomeTitle>Home</HomeTitle>
      <BlogCard blogs={blogs} />
      <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
    </HomeContainer>
  );
}
