import { Link, useParams } from "react-router-dom";
import { getDraftsByAuthor } from "../../utils/requests/requests.utils";
import { useEffect, useState } from "react";
import { DraftCard } from "../draft-card/draft-card.component";

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
    <div>
      <div>
        <Link
          to={`/editor`}
          state={{
            authorId: authorId,
            newDraft: true,
            draftIdValue: null,
            contentValue: false,
          }}
        >
          <button>Create a New Draft</button>
        </Link>
      </div>

      {drafts.length ? (
        drafts.map(({ id, contentHTML }) => (
          <Link
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
          </Link>
        ))
      ) : (
        <h1>No Drafts !!!</h1>
      )}
    </div>
  );
}
