import { Link, useParams } from "react-router-dom";
import { getDraftsByAuthor } from "../../utils/requests/requests.utils";
import { useEffect, useState } from "react";
import { DraftCard } from "../draft-card/draft-card.component";
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

  useEffect(() => {
    const asyncWrapper = async () => {
      const resDrafts = await getDraftsByAuthor(authorId);
      setDrafts(resDrafts);
    };
    asyncWrapper();
  }, [authorId]);

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
    </Container>
  );
}
