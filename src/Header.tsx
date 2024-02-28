import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <h1 className="flex-grow-0">
          <NavLink to={"/"}>Yarniverse</NavLink>
        </h1>
        <Navigation>
          <NavigationList>
            <li>
              <StyledNavLink to={"/about"}>Om oss</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/projekt"}>Projekt</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/tutorials"}>Tutorials</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/contact"}>Kontakt</StyledNavLink>
            </li>
          </NavigationList>
        </Navigation>
      </HeaderContainer>
    </>
  );
}
export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #a0aec0;
  height: 3rem;
`;

const Navigation = styled.nav`
  flex-grow: 1;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-end;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 2px solid white;
  }
`;
