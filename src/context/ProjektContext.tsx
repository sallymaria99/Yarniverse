import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProjektSchema } from "../projektData";

interface ProjektContextType {
  projekt: ProjektSchema[];
  addProjekt: (newProjekt: ProjektSchema) => void;
}

interface ProjektProviderProps {
  children: ReactNode;
}

const ProjektContext = createContext<ProjektContextType>({
  projekt: [],
  addProjekt: () => {},
});

export const ProjektProvider: React.FC<ProjektProviderProps> = ({
  children,
}) => {
  const [projekt, setProjekt] = useState<ProjektSchema[]>([]);

  const addProjekt = (newProjekt: ProjektSchema) => {
    setProjekt((currentProjekt) => [
      ...currentProjekt,
      { ...newProjekt, id: String(currentProjekt?.length + 1) },
    ]);
  };

  return (
    <ProjektContext.Provider value={{ projekt, addProjekt }}>
      {children}
    </ProjektContext.Provider>
  );
};

export const useProjekt = () => useContext(ProjektContext);
