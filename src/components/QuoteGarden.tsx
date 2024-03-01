import { useEffect, useState } from "react";
import styled from "styled-components";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
      } catch (error) {
        console.log("Error fetching quote: ", error);
      }
    };
    fetchRandomQuote();
  }, []);
  return (
    <CenteredContainer>
      <QuoteContainer>
        <QuoteText>{quote}</QuoteText>
        <p>
          <QuoteAuthor>- {author}</QuoteAuthor>
        </p>
      </QuoteContainer>
    </CenteredContainer>
  );
};

export default RandomQuote;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuoteContainer = styled.div`
  padding: 20px;
  margin: 20px 0;
  background-color: #f0f0f0;
  border-left: 5px solid #243d24;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 400px;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  font-style: italic;
`;

const QuoteAuthor = styled.i`
  font-size: 1em;
  text-align: right;
  color: #243d24;
  margin-top: 10px;
  font-weight: bold;
`;
