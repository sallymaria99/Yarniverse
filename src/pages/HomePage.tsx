import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface ImageCard {
  title: string;
  image: string;
  description: string;
  path: string;
}

const ImageCard: React.FC<ImageCard> = ({
  title,
  image,
  description,
  path,
}) => {
  const navigate = useNavigate(); // Använder för att kunna klicka på mina cards
  return (
    <ImageCardContainer onClick={() => navigate(path)}>
      <CardImage src={image} alt={title} />
      <Overlay className="overlay">
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Overlay>
    </ImageCardContainer>
  );
};

function HomePage() {
  return (
    <HomePageContainer>
      <MainTitle>Yarniverse - ditt egna skaparuniversum</MainTitle>
      <Subtitle>
        En app där du samlar allt på ett ställe – dina mönster, projekt, dagbok
        och inspiration
      </Subtitle>
      <CardGrid>
        <ImageCard
          key="1"
          title="TUTORIAL"
          image="https://images.unsplash.com/photo-1585829365343-ea8ed0b1cb5b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Här kan du hitta en video, eller förklaring på hur du genomför olika sticktekniker eller maskor!"
          path="/tutorials"
        />
        <ImageCard
          title="PROJEKT"
          image="https://images.unsplash.com/photo-1470049384172-927891aad5e9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description=""
          path="/projekt"
        />
        <ImageCard
          title="STICKDAGBOK"
          image="https://images.unsplash.com/photo-1597736091383-2976f665d932?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Denna sida är under konstruktion!"
          path=""
        />
      </CardGrid>
    </HomePageContainer>
  );
}
export default HomePage;

const ImageCardContainer = styled.div`
  position: relative;
  height: 18rem;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover .overlay {
    opacity: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: opacity 300ms ease-in-out;
  text-align: center;
  padding: 1rem;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h4`
  color: #b8b3b9;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const Description = styled.p`
  color: #b8b3b9;
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff /* #d9dcd6 */;
  font-family: "Quicksand", sans-serif;
`;

const MainTitle = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 550;
  padding-top: 3rem;
  color: #243d24;

  @media (max-width: 768px) {
    padding-top: 5.5rem;
  }
`;

const Subtitle = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  color: #243d24;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 7rem;
  width: 100%;
  max-width: 64rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 3rem;
  }
`;
