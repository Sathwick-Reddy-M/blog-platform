import styled from "styled-components";

export const DraftContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const DraftTitle = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const DraftContent = styled.div`
  white-space: pre-line;
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;
