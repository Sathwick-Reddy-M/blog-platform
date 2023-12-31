import { styled } from "styled-components";

export const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

export const HomeTitle = styled.h1`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const LoadMoreButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;
