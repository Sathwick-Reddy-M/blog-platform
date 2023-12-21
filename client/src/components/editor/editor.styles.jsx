import { styled } from "styled-components";

export const EditorContainer = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .ql-toolbar {
    border-bottom: 1px solid #ddd;
    border-radius: 8px 8px 0 0;
  }

  .ql-container {
    border-radius: 0 0 8px 8px;
    border-top: none;
  }

  .ql-editor {
    min-height: 200px;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #45a049;
    }
  }
`;
