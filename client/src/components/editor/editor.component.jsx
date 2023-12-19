import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer } from "./editor.styles";
import {
  createOrUpdateDraft,
  getDraft,
  getNewDraftId,
} from "../../utils/requests/requests.utils";
import { useParams, useLocation } from "react-router-dom";

export function Editor() {
  const [value, setValue] = useState("");
  const { state } = useLocation();
  const { authorId, newDraft } = state;
  const [newDraftValue, setNewDraftValue] = useState(newDraft || false);
  const [draftId, setDraftId] = useState(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      //   ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    // "image",
    // "video",
  ];

  const publishClickHandler = () => {
    if (value === "") {
      alert("Nothing to publish");
    } else {
      console.log(value);
    }
  };

  const saveClickHandler = async () => {
    if (value === "") {
      alert("Nothing to save");
    } else {
      if (newDraftValue) {
        const newDraftId = await getNewDraftId();
        const draftObj = {
          id: newDraftId.id,
          contentHTML: value,
          authorId: authorId,
          dateCreated: new Date(),
          dateUpdated: new Date(),
        };
        await createOrUpdateDraft(draftObj);
        setDraftId(newDraftId.id);
        setNewDraftValue(false);
      } else {
        const previousDraftObj = getDraft(draftId);
        const draftObj = {
          id: draftId,
          contentHTML: value,
          authorId: authorId,
          dateCreated: previousDraftObj.dateCreated,
          dateUpdated: new Date(),
        };
        await createOrUpdateDraft(draftObj);
      }
    }
  };

  return (
    <EditorContainer>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <button onClick={saveClickHandler}>Save Draft</button>
      <button onClick={publishClickHandler}>Publish</button>
    </EditorContainer>
  );
}
