import { Attribute } from "../interfaces";
export type TierMapper = {
  name: string;
  tier: string;
};
export const tierMapper: Record<number, TierMapper> = {
  1: {
    name: "Pawn",
    tier: "I",
  },
  2: {
    name: "Knight",
    tier: "II",
  },
  3: {
    name: "Bishop",
    tier: "III",
  },
  4: {
    name: "Rook",
    tier: "IV",
  },
  5: {
    name: "King",
    tier: "V",
  },
  6: {
    name: "Queen",
    tier: "VI",
  },
};
export const getTier = (
  tier?: Attribute
): (Attribute & TierMapper) | undefined => {
  if (!tier) return;
  if (tierMapper[tier.level]) {
    return {
      ...tier,
      ...tierMapper[tier.level],
    };
  }

  return {
    ...tier,
    ...tierMapper[1],
  };
};
