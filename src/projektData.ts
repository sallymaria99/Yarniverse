export interface Projekt {
  id: string;
  status: "planned" | "current" | "paused" | "finished";
  title: string;
  notes: string;
  startDate: Date;
  endDate?: Date;
  //lägg till
}

export const mockedProjekt: Projekt[] = [
  {
    id: "1",
    status: "planned",
    title: "Percelain Sweater",
    notes: "bka",
    startDate: new Date("2024-10-12"),
  },
];

//FormHook
