import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <StyledHeader>
        <Title>
          <img src="/assets/yarnImg.png" alt="" />
          <NavLink to={"/"}>Yarniverse</NavLink>
        </Title>
        <Navigation>
          <NavList>
            <NavItem>
              <StyledNavLink to={"/about"}>Om oss</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/projekt"}>Projekt</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/tutorials"}>Tutorials</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/contact"}>Kontakt</StyledNavLink>
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
  gap: 2rem;
  justify-content: flex-end;
  margin-top: 12px;
  margin-right: 12px;
`;

const NavItem = styled.li`
  position: relative;
  font-size: 1.2rem;

  a {
    color: #243d24;
    text-decoration: none;
    padding: 0.5rem 0;
    transition: color 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background-color: #7f9093;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    font-weight: 1000;
  }
`;
