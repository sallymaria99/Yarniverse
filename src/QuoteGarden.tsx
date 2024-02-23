import { useEffect, useState } from "react";

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
    <div>
      <p>{quote}</p>
      <p>
        <i>{author}</i>
      </p>
    </div>
  );
};

export default RandomQuote;
