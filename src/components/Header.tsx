import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <StyledHeader>
        <Title>
          <NavLink to={"/"}>Yarniverse</NavLink>
        </Title>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink
                to={"/about"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Om oss
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/projekt"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Projekt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/tutorials"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Tutorials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to={"/contact"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Kontakt
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </StyledHeader>
    </>
  );
}
export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #a8a29e;
  height: 3rem;
`;

const Title = styled.h1`
  flex-grow: 0;
`;

const Navigation = styled.nav`
  flex-grow: 1;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-end;
`;

const NavItem = styled.li`
  position: relative;

  a {
    color: #333;
    text-decoration: none;
    padding: 0%.5rem 0;

    a:hover {
      border-bottom: 2px solid #333;
    }
  }
`;

const activeStyle = {
  borderBottom: "1.5px solid #333",
};
