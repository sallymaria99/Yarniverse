import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { ProjektSchema } from "../projektData";
import { useProjekt } from "../context/ProjektContext";
import styled from "styled-components";
import { Title } from "../styles/SharedStyles";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

type StyledButtonProps = {
  $active: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ProjectPage() {
  const navigate = useNavigate();
  const { projekt } = useProjekt();
  const { status } = useParams();
  console.log("Nuvarande status:", status);
  const handleClick = () => {
    navigate("/StartProjekt");
  };
  const currentStatus = status?.toLowerCase();

  const filteredProjekt = status
    ? projekt.filter(
        (proj) => proj.status.toLowerCase() === status.toLowerCase()
      )
    : projekt;

  return (
    <ProjectContainer>
      <Title>Projekt</Title>
      <ButtonContainer>
        <StyledButton
          $active={currentStatus === "alla"}
          onClick={() => navigate("/projekt")}
        >
          <span>Alla</span>
        </StyledButton>
        <StyledButton
          $active={currentStatus === "planerade"}
          onClick={() => navigate("/projekt/planerade")}
        >
          <span>Planerade</span>
        </StyledButton>
        <StyledButton
          $active={currentStatus === "pågående"}
          onClick={() => navigate("/projekt/pågående")}
        >
          <span>Pågående</span>
        </StyledButton>
        <StyledButton
          $active={currentStatus === "pausade"}
          onClick={() => navigate("/projekt/pausade")}
        >
          <span>Pausade</span>
        </StyledButton>
        <StyledButton
          $active={currentStatus === "avslutade"}
          onClick={() => navigate("/projekt/avslutade")}
        >
          <span>Avslutade</span>
        </StyledButton>
      </ButtonContainer>

      {filteredProjekt.length > 0 ? (
        <div>
          <ProjectList>
            {filteredProjekt.map((proj: ProjektSchema) => (
              <ProjectCard key={proj.id}>
                <ProjectTitle>Namn: {proj.title}</ProjectTitle>
                <ProjectDetail>Storlek: {proj.size}</ProjectDetail>
                <ProjectDetail>Garn: {proj.yarn}</ProjectDetail>
                <ProjectDetail>Till: {proj.to}</ProjectDetail>
                <ProjectStatus>Status: {proj.status}</ProjectStatus>
              </ProjectCard>
            ))}
          </ProjectList>
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
        <button onClick={handleClick}>
          <PlusCircleIcon className="h-16 w-16" />
        </button>
      </div>
    </ProjectContainer>
  );
}

export default ProjectPage;

const ProjectContainer = styled.div`
  position: relative;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 25px;
`;

const ProjectCard = styled.li`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5rem;
`;

const ProjectDetail = styled.div`
  font-size: 1rem;
  color: #333;
`;

const ProjectStatus = styled(ProjectDetail)`
  font-weight: bold;
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #b8b3b9;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 40rem;
  margin: auto;
`;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  padding: 0.6rem;
  text-transform: ${({ $active }) => ($active ? "uppercase" : "capitalize")};
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #333;
    transform: scaleX(0);
    /*  transform-origin: right; */
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    /* transform-origin: left; */
  }

  &:active {
    color: #6d6878;

    &:after {
      transform: scaleX(1);
      /* transform-origin: left; */
    }
  }
`;
