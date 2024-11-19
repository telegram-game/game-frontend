import { ConfigurationData } from "./configuration-data.interface";

export interface AppInformation extends ConfigurationData {
  houseData: any;
  itemData: any;
  systemData: any;
  version: string;
}
