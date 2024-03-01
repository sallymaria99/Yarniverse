import { NavLink } from "react-router-dom";
import styled from "styled-components";
import yarnImg from "../assets/yarnImg.png";

function Header() {
  return (
    <>
      <StyledHeader>
        <Title>
          <LogoImage src={yarnImg} alt="Yarn" style={{ marginRight: "10px" }} />
          <NavLink to={"/"}>Yarniverse</NavLink>
        </Title>
        <Navigation>
          <NavList>
            <NavItem>
              <StyledNavLink to={"/projekt"}>Projekt</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/tutorials"}>Tutorials</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/dagbok"}>Dagbok</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/about"}>Kontakt</StyledNavLink>
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
  font-family: "Quicksand", sans-serif;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 0.2rem;
    padding-bottom: 1rem;
  }
`;

const Title = styled.h1`
  flex-grow: 0;
  display: flex;
  align-items: center;
  flex-grow: 0;
  margin-right: 10px;
  font-size: 1.5rem;
  margin-top: 12px;
  margin-right: 12px;
  color: #235347;
  font-weight: 700;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const Navigation = styled.nav`
  flex-grow: 1;
  @media (max-width: 600px) {
    width: 100%;
  }
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
  font-weight: 500;

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

const LogoImage = styled.img`
  height: 36px;
  width: auto;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;
