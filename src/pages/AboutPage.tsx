import styled from "styled-components";
import RandomQuote from "../components/QuoteGarden";
import { Title } from "../styles/SharedStyles";

function AboutPage() {
  return (
    <div>
      <Title>Kontakt</Title>
      <p></p>
      <Text>
        Även denna sida är under uppbyggnad, men så länge kan du njuta av lite
        härliga quotes. Refresha sidan om du vill byta quote!
      </Text>
      <RandomQuote />
    </div>
  );
}

export default AboutPage;

const Text = styled.h1`
  padding: 1rem;
  text-align: center;
`;
