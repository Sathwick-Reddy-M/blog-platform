import DOMPurify from "dompurify";
import { getDraft } from "../../utils/requests/requests.utils";
import { useEffect, useState } from "react";
import { DraftContainer, DraftTitle, DraftContent } from "./draft-card.styles";

export function DraftCard({ id }) {
  const [draft, setDraft] = useState({ contentHTML: "" });
  useEffect(() => {
    const asyncWrapper = async () => {
      const resDraft = await getDraft(id);
      setDraft(resDraft);
    };
    asyncWrapper();
  }, []);

  const displayContent = draft.contentHTML.substring(0, 100);
  const ellipsis = draft.contentHTML.length > 100 ? "<span>...</span>" : "";

  return (
    <DraftContainer>
      <DraftTitle>Draft {id}</DraftTitle>
      <DraftContent
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(displayContent + ellipsis),
        }}
      ></DraftContent>
    </DraftContainer>
  );
}
