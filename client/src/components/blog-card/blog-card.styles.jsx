import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BlogPost = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const BlogTitle = styled.h2`
  color: #333;
  margin: 0;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const BlogAuthor = styled.p`
  color: #666;
  padding: 10px 20px;
  margin: 0;
`;

export const BlogContent = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const BlogDate = styled.p`
  font-style: italic;
  color: #999;
  padding: 10px 20px;
  margin: 0;
  border-top: 1px solid #e1e1e1;
`;

export const BlogLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
