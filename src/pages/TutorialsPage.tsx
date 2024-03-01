import styled from "styled-components";
import YoutubeVideo from "../components/YoutubeVideo";
import { Title } from "../styles/SharedStyles";

function Tutorials() {
  return (
    <TutorialsContainer>
      <Header>
        <Title>Tutorials</Title>
        <SearchBar placeholder="Sök..." />
      </Header>
      <VideosGrid>
        <StyledYoutubeVideo videoId="7eq10nq5oQM" />

        <StyledYoutubeVideo videoId="4eRufk2tg48" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />

        <StyledYoutubeVideo videoId="ziSlsVUUmkI" />
      </VideosGrid>
    </TutorialsContainer>
  );
}

export default Tutorials;

const TutorialsContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SearchBar = styled.input.attrs({
  type: "search",
})`
  padding: 0.5rem;
  margin: 0 1rem;
  border: 1px solid black;
  border-radius: 4px;

  @media (max-width: 700px) {
    max-width: 100px;
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StyledYoutubeVideo = styled(YoutubeVideo)`
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;
