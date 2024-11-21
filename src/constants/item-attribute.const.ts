import { AttributeType } from "../interfaces";

type ItemData = {
  img?: string;
  title?: string;
  description?: string;
  cost?: number;
};

export const ItemAttributes: Record<AttributeType, ItemData | null> = {
  POCKET: {
    img: "https://staggering.tonkombat.com/assets/upgrade_pocket-BtH4fVg7.webp",
    title: "Pocket Level 1",
    description: "Increase time between claims",
    cost: 100,
  },
  SALARY: {
    img: "https://staggering.tonkombat.com/assets/upgrade_salary-Ceuq_SYu.webp",
    title: "Salary Level 2",
    description: "Increase time between claims",
    cost: 200,
  },
  HONOR: {
    img: "https://staggering.tonkombat.com/assets/upgrade_honor-QRisifTp.webp",
    title: "Honor Level 3",
    description: "Super booster income x2",
    cost: 300,
  },
  GAME_PROFILE_LEVEL: null,
};
