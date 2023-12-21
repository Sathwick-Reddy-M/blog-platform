import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const NewDraftButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;

export const DraftsContainer = styled.div`
  margin-top: 20px;
`;

export const NoDraftsMessage = styled.h1`
  color: #777;
`;

export const DraftListLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
