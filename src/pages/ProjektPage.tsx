import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { ProjektSchema } from "../projektData";
import { useProjekt } from "../context/ProjektContext";
import styled from "styled-components";

function ProjectPage() {
  const navigate = useNavigate();
  const { projekt } = useProjekt();
  const { status } = useParams();
  console.log("Nuvarande status:", status);
  const handleClick = () => {
    navigate("/StartProjekt");
  };

  const filteredProjekt = status
    ? projekt.filter(
        (proj) => proj.status.toLowerCase() === status.toLowerCase()
      )
    : projekt;

  return (
    <ProjectContainer>
      <Title>Projekt</Title>
      <ButtonContainer>
        <StyledButton onClick={() => navigate("/projekt")}>
          <span>Alla</span>
        </StyledButton>
        <StyledButton onClick={() => navigate("/projekt/planerade")}>
          <span>Planerade</span>
        </StyledButton>
        <StyledButton onClick={() => navigate("/projekt/pågående")}>
          <span>Pågående</span>
        </StyledButton>
        <StyledButton onClick={() => navigate("/projekt/pausade")}>
          <span>Pausade</span>
        </StyledButton>
        <StyledButton onClick={() => navigate("/projekt/avslutade")}>
          <span>Avslutade</span>
        </StyledButton>
      </ButtonContainer>

      {filteredProjekt.length > 0 ? (
        <div>
          <h2>Projektlista</h2>
          <ul>
            {filteredProjekt.map((proj: ProjektSchema) => (
              <li key={proj.id}>
                <div>{proj.title}</div>
                <div>{proj.size}</div>
                <div>{proj.yarn}</div>
                <div>{proj.to}</div>
                <div>{proj.status}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p className="pt-12 text-center">
            Ser tomt ut här... testa att lägga till något
          </p>

          <div className="flex justify-center mt-10">
            <ArrowDownRightIcon className="h-24" />
          </div>
        </div>
      )}
      <div className="fixed bottom-36 right-16">
        <button className="mt-48 ml-28 text-6xl" onClick={handleClick}>
          +
        </button>
      </div>
    </ProjectContainer>
  );
}

export default ProjectPage;

const ProjectContainer = styled.div`
  position: relative;
`;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  background-color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 32rem;
  margin: auto;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #f7fafc;
  }
`;
