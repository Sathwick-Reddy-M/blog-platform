import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer } from "./editor.styles";

export function Editor() {
  const [value, setValue] = useState("");

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

  const clickHandler = () => {
    if (value === "") {
      alert("Nothing to publish");
    } else {
      console.log(value);
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
      <button onClick={clickHandler}>Publish</button>
    </EditorContainer>
  );
}
