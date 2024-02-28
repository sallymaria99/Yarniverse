import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <header>
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
      </header>
    </>
  );
}
export default Header;
