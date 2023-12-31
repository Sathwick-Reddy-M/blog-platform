import { Link, useParams } from "react-router-dom";
import { getDraftsByAuthor } from "../../utils/requests/requests.utils";
import { useEffect, useState } from "react";
import { DraftCard } from "../draft-card/draft-card.component";
import { LoadMoreButton } from "../home/home.styles";
import {
  Container,
  NewDraftButton,
  DraftsContainer,
  NoDraftsMessage,
  DraftListLink,
  StyledLink,
} from "./drafts.styles";

export function Drafts() {
  const { authorId } = useParams();
  const [drafts, setDrafts] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  const fetchDrafts = async () => {
    if (end) {
      alert("No more drafts to fetch");
      return;
    }
    try {
      const resDrafts = await getDraftsByAuthor(authorId, page);
      setDrafts([...drafts, ...resDrafts]);
      setPage(page + 1);
      if (resDrafts.length === 0) {
        setEnd(true);
        alert("No more drafts to fetch");
      }
    } catch (error) {
      console.error("Error fetching drafts:", error);
    }
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      await fetchDrafts();
    };
    asyncWrapper();
  }, [authorId]);

  const handleLoadMore = () => {
    fetchDrafts();
  };

  return (
    <Container>
      <div>
        <StyledLink
          to={`/editor`}
          state={{
            authorId: authorId,
            newDraft: true,
            draftIdValue: null,
            contentValue: false,
          }}
        >
          <NewDraftButton>Create a New Draft</NewDraftButton>
        </StyledLink>
      </div>
      <DraftsContainer>
        {drafts.length ? (
          drafts.map(({ id, contentHTML }) => (
            <DraftListLink
              to={"/editor"}
              state={{
                authorId: authorId,
                newDraft: false,
                draftIdValue: id,
                contentValue: contentHTML,
              }}
              key={id}
            >
              <DraftCard id={id}></DraftCard>
            </DraftListLink>
          ))
        ) : (
          <NoDraftsMessage>No Drafts !!!</NoDraftsMessage>
        )}
      </DraftsContainer>
      {drafts.length > 0 && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </Container>
  );
}
