import { Attributes } from "../enums";
import { ConfigurationData, GameHouse } from "./configuration-data.interface";

export interface AppInformation extends ConfigurationData {
  houseData: any;
  itemData: any;
  systemData: any;
  version: string;
}

export type AttributeType = keyof typeof Attributes;

export interface Attribute {
  level: number;
  cost: number;
  description: number | string;
  totalCost?: number;
}

export type HeroAttribute =
  | "id"
  | "attack"
  | "hp"
  | "evasion"
  | "critRate"
  | "critDame"
  | "lifeSteal"
  | "reflect"
  | "hpRegen"
  | "skill"
  | "items";
export interface HeroAttributeValue {
  point: number;
  percent: number;
  percentPerTime: number;
}
export interface ChangeHouseRequest {
  house: GameHouse;
}
export type MatchType = "RANKED" | "FRIEND";

export type Hero = Record<HeroAttribute, HeroAttributeValue> & {
  skill: string;
  items: Array<any>;
};
