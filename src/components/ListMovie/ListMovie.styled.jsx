import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledItemList = styled.li`
  color: #3f51b5;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: black;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`