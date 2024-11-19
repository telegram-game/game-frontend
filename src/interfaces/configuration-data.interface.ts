type ItemType =
  | "SWORD"
  | "SHIELD"
  | "HELMET"
  | "ARMOR"
  | "BOOTS"
  | "RING"
  | "AMULET"
  | "GLOVES"
  | "PANTS"
  | "CAPE"
  | "BELT"
  | "BRACERS"
  | "EARRINGS"
  | "NECKLACE"
  | "SHOULDER"
  | "TALISMAN"
  | "WAND"
  | "ST";

type Star = "1" | "2" | "3" | "4" | "5";

export interface Chest {
  code: string;
  name: string;
  itemTypeRates: {
    [key in ItemType]?: number;
  };
  itemTypeCodeRates: {
    [key in ItemType]?: {
      [key: string]: number;
    };
  };
  fixedItemAttributesCount: number;
  flexibleItemAttributesCount: number;
  starRates: {
    [key in Star]?: number;
  };
}

type HeroAttribute =
  | "REFLECT"
  | "LIFE_STEAL"
  | "ATTACK"
  | "HP"
  | "CRIT_RATE"
  | "CRIT_DAMAGE"
  | "EVASION"
  | "HP_REGEN";

export interface ItemAttributeData {
  attribute: HeroAttribute;
  starRate: {
    [key in Star]?: number;
  };
  value: {
    point?: {
      value?: number;
      min?: number;
      max?: number;
    };
    percent?: {
      value?: number;
      min?: number;
      max?: number;
    };
    percentPerTime?: {
      value?: number;
      min?: number;
      max?: number;
    };
  };
}
export type ItemAttribute = {
  [key in ItemType]?: {
    [key in Star]?: {
      fixedItemAttributes: ItemAttributeData[];
      flexibleItemAttributes: ItemAttributeData[];
    };
  };
};

export interface Item {
  code: string;
  name: string;
}
export interface ItemConfigData {
  chests: {
    [key: string]: Chest;
  };
  items: {
    [key: string]: Item;
  };
  itemAttributes: ItemAttribute;
}
export type GameHouse = "DOGS" | "HAMSTERS";

export interface HouseAttribute {
  attackLevel: number;
  hpLevel: number;
  luckLevel: number;
}

export interface HouseData {
  name: string;
  description: string;
  attributes: HouseAttribute;
}
export type HouseConfigData = {
  [key in GameHouse]?: HouseData;
};

type HeroSkill =
  | "DESOLATE"
  | "REFLECT"
  | "LIFE_STEAL"
  | "RISING_FURY"
  | "FATAL_BLOW";

export interface SkillData {
  code: string;
  name: string;
  description: string;
  attributes: {
    [key in HeroAttribute]?: {
      point?: number;
      percent?: number;
      percentPerTime?: number;
    };
  };
}
export type SkillConfigData = {
  [key in HeroSkill]: SkillData;
};

export interface SystemConfigData {
  baseAttackByLevel: {
    [key in Star]?: number;
  };
  baseHpByLevel: {
    [key in Star]?: number;
  };
  baseEvasionByLevel: {
    [key in Star]?: number;
  };
  baseCritRateByLevel: {
    [key in Star]?: number;
  };
  baseCritDamageByLevel: {
    [key in Star]?: number;
  };

  baseTokenInvestSpeed: {
    INGAME:{
      speed: number
      gapTime: number
      description: string
    }
  };
}

export interface ConfigurationData {
  items: ItemConfigData;
  houses: HouseConfigData;
  skills: SkillConfigData;
  system: SystemConfigData;
}
