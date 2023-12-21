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
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: #555;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

export const DropdownLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;
