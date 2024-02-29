import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterNav>
          <div>
            <FooterLink to={"/contact"}>Kontakt</FooterLink>
          </div>
          <div>
            <FooterLink to={"/about"}>Om oss</FooterLink>
          </div>
          <div>
            <FooterLink to={"/projekt"}>Projekt</FooterLink>
          </div>
        </FooterNav>
        <FooterTitle>Yarniverse</FooterTitle>
        <Copyright>Copyright © 2024</Copyright>
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: white;
  font-family: "mono", sans-serif;
  display: flex;
  flex-direction: row;
`;

const FooterNav = styled.div`
  font-size: 0.875rem;
  padding: 1rem 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #fff;
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterTitle = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.div`
  font-size: 0.875;
  text-align: center;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: center;
`;
