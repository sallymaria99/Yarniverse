export interface ProjektSchema {
  id: string;
  status: "planerade" | "pågående" | "pausade" | "avslutade";
  title: string;
  notes: string;
  startDate: Date;
  endDate?: Date;
  to?: string;
  yarn?: string;
  knittingNeedle?: number;
  name?: string;
  size: string;
}

//Behöver denna vara kvar?
export const mockedProjekt: ProjektSchema[] = [
  {
    id: "1",
    status: "pågående",
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
