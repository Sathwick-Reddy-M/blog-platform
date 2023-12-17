import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
