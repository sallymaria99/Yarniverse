import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterNavContainer>
          <FooterNav>
            <FooterLink to={"/contact"}>Kontakt</FooterLink>
            <FooterLink to={"/about"}>Om oss</FooterLink>
            <FooterLink to={"/projekt"}>Projekt</FooterLink>
          </FooterNav>
        </FooterNavContainer>
        <FooterCenter>
          <FooterTitle>Yarniverse</FooterTitle>
          <Copyright>Copyright © 2024</Copyright>
        </FooterCenter>
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: #7f9093 /* #a8a29e */;
  font-family: "Mono", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    // En media query för större skärmar
    flex-direction: row; // Återgår till radlayout på större skärmar
    justify-content: space-between;
  }
`;

const FooterNavContainer = styled.div`
  @media (min-width: 768px) {
    align-self: flex-start; // Justerar navigationslänkarna till vänster
    // Skjuter allt till höger om det här elementet mot högerkanten
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.93rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  padding: 0.25rem 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterCenter = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.4rem;
  flex: 1;
  justify-content: center;
  text-align: center;
`;

const FooterTitle = styled.h1`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const Copyright = styled.div`
  font-size: 0.875;
  padding: 0.5rem 0;
`;
