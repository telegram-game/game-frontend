import { ConfigurationData } from "./configuration-data.interface";

export interface AppInformation extends ConfigurationData {
  houseData: any;
  itemData: any;
  systemData: any;
  version: string;
}

export type AttributeType = "POCKET" | "SALARY" | "HONOR";
export interface Attribute {
  level: number;
  cost: number;
  description: number;
}
