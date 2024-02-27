import React, { FC, createContext, useContext, useState } from "react";
import { ProjektSchema } from "../projektData";

interface ProjektContextType {
  projekt: ProjektSchema[];
  addProjekt: (newProjekt: ProjektSchema) => void;
}

const defaultContextValue: ProjektContextType = {
  projekt: [],
  addProjekt: () => {},
};

const ProjektContext = createContext<ProjektContextType>(defaultContextValue);

export const useProjekt = () => useContext(ProjektContext);

interface ProjektProviderProps {
  children: React.ReactNode;
}

export const ProjektProvider: FC<ProjektProviderProps> = ({ children }) => {
  const [projekt, setProjekt] = useState<ProjektSchema[]>([]);

  const addProjekt = (newProjekt: ProjektSchema) => {
    setProjekt((currentProjekt) => [...currentProjekt, newProjekt]);
  };

  return (
    <ProjektContext.Provider value={{ projekt, addProjekt }}>
      {children}
    </ProjektContext.Provider>
  );
};
