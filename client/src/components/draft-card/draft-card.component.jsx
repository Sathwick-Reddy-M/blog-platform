import DOMPurify from "dompurify";
import { getDraft } from "../../utils/requests/requests.utils";
import { useEffect, useState } from "react";

export function DraftCard({ id }) {
  const [draft, setDraft] = useState({ contentHTML: "" });
  useEffect(() => {
    const asyncWrapper = async () => {
      const resDraft = await getDraft(id);
      setDraft(resDraft);
    };
    asyncWrapper();
  }, []);

  return (
    <div>
      <h1>Draft {id}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(draft.contentHTML),
        }}
      ></div>
    </div>
  );
}
