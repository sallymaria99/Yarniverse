import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { ProjektSchema } from "../projektData";
import { useProjekt } from "../context/ProjektContext";

function ProjectPage() {
  const navigate = useNavigate();
  const { projekt } = useProjekt();
  const handleClick = () => {
    navigate("/StartProjekt");
  };

  return (
    <div className="relative">
      <div className="text-center text-3xl pt-8 pb-6">Projekt</div>
      <div className="flex justify-center items-center space-x-1 bg-gray-200 p-4 rounded-lg max-w-md mx-auto">
        <button className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100">
          <span>Planerade</span>
        </button>
        <button className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100">
          <span>Pågående</span>
        </button>
        <button className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100">
          <span>Pausade</span>
        </button>
        <button className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100">
          <span>Avslutade</span>
        </button>
      </div>

      {projekt.length > 0 ? (
        <div>
          <h2>Projektlista</h2>
          <ul>
            {projekt.map((projekt: ProjektSchema) => (
              <li key={projekt.id}>
                <p>{projekt.title}</p>
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
    </div>
  );
}

export default ProjectPage;
