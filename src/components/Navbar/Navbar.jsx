import { StyledHeader, StyledNavLink } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
    </StyledHeader>
    )
};

export default Navbar;