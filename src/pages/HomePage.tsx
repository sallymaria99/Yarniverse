import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); // Är detta ett state? Använder för att kunna klicka på mina cards
  return (
    <div
      className="relative h-72 cursor-pointer"
      onClick={() => navigate(path)}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
        <div className="text-center px-4">
          {title && (
            <h4 className="text-white text-lg font-bold mb-2">{title}</h4>
          )}
          {description && <p className="text-white">{description}</p>}
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center font-mono text-4xl pt-16">
        Yarniverse - ditt egna skaparuniversum
      </div>
      <div className="pt-12 font-mono text-center">
        En app där du samlar allt på ett ställe – dina mönster, projekt, dagbok
        och inspiration
      </div>
      <div className="grid grid-cols-3 gap-8 pt-36 w-full max-w-4xl font-mono">
        <ImageCard
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
          title=""
          image="https://images.unsplash.com/photo-1597736091383-2976f665d932?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description=""
          path=""
        />
      </div>
    </div>
  );
}
export default HomePage;
