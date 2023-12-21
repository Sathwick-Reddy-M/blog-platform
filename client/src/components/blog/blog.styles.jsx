import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const BlogTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const AuthorInfo = styled.p`
  color: #666;
  margin-bottom: 5px;
`;

export const ContentContainer = styled.div`
  margin-top: 15px;
  line-height: 1.6;

  p {
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PublishedInfo = styled.p`
  font-style: italic;
  color: #999;
  margin-top: 10px;
`;

export const UpdatedInfo = styled.p`
  font-style: italic;
  color: #999;
  margin-top: 5px;
`;
