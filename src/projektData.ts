export interface ProjektSchema {
  id: string;
  status: "planned" | "current" | "paused" | "finished";
  title: string;
  notes: string;
  startDate: Date;
  endDate?: Date;
  to?: string;
  yarn?: string;
  knittingNeedle?: number;
  name?: string;
  size: string;
  //lägg till
}

export const mockedProjekt: ProjektSchema[] = [
  {
    id: "1",
    status: "planned",
    title: "Percelain Sweater",
    notes: "bka",
    startDate: new Date("2024-10-12"),
    to: "sally",
    yarn: "järbro",
    knittingNeedle: 2,
    name: "sally",
    endDate: new Date("2025-01-10"),
    size: "2xl",
  },
];

//FormHook
