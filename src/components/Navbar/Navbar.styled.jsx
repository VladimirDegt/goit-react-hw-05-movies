import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const StyledNavLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  background-color: #FAFAFA;
  text-align: center;
  display: inline-block;
  color: #3f51b5;
  border: 0;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
  background-color: #3f51b5;
  color: #fff;
  border: 1px solid #fff;
  }

`