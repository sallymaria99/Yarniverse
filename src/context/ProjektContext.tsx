import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProjektSchema } from "../projektData";

interface ProjektContextType {
  projekt: ProjektSchema[];
  addProjekt: (newProjekt: ProjektSchema) => void;
}

interface ProjektProviderProps {
  children: ReactNode;
}

const ProjektContext = createContext<ProjektContextType | undefined>(undefined);

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

export const useProjekt = () => {
  const context = useContext(ProjektContext);
  if (context === undefined) {
    throw new Error("useProjekt must be used with a projektprovider");
  }
  return context;
};
