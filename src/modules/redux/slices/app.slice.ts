import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../../constants";
import {
  AppInformation,
  Attribute,
  AttributeType,
  ChangeHouseRequest,
  Hero,
  MatchType,
  SignInRequest,
} from "../../../interfaces";
import { GameHouse } from "../../../interfaces/configuration-data.interface";
import { Get, Post } from "../../http-client/http.fetch";

export interface AppState {
  appInformation?: AppInformation;
  inventories?: Array<any>;
  provider: SignInRequest["provider"];
  gameProfile?: {
    id: string;

    attributes: Record<AttributeType, Attribute>;
    houseData: {
      name: GameHouse;
      description: string;
      attributes: {
        attackLevel: number;
        hpLevel: number;
        luckLevel: number;
      };
    };
    skillData: {
      code: string;
      name: string;
      description: string;
    };
    hero?: Hero;
  };
  hero?: Hero;

  matchResult?: {
    initData: {
      leftHeroes: Array<Hero>;
      rightHeroes: Array<Hero>;
    };
  };
  me?: {
    balances: {
      INGAME: number;
      INGAME_2: number;
    };
    lastClaimedAt: {
      INGAME: number;
      INGAME_2: number;
    };
  };
  checkIn?: {
    currentStack: number;
    hasClaimed: boolean;
    data: Array<{
      id: string;
      userId: string;
      userGameProfileId: string;
      checkinCode: string;
    }>;
  };
  missions?: Array<any>;
  paymentItem?: { codeOrUrl: string; provider: string | "TELEGRAM" };
}

const initialState: AppState = {
  provider: "TELEGRAM",
  appInformation: undefined,
  inventories: undefined,
  gameProfile: undefined,
  hero: undefined,
  matchResult: undefined,
  me: undefined,
  checkIn: undefined,
  missions: undefined,
  paymentItem: undefined,
};

export const requestAppInformation = createAsyncThunk(
  "app/information",
  async (_, { dispatch }) =>
    Get<AppInformation>(API_ENDPOINTS.GLOBAL.APP_INFORMATION, {
      skipHandleError: false,
    }).then((res) => {
      return {
        appInformation: res,
      };
    })
);

export const requestGameProfile = createAsyncThunk(
  "app/profile",
  async (_, { dispatch }) =>
    Get<any>(API_ENDPOINTS.GAME.GAME_PROFILE).then((res) => {
      return {
        gameProfile: res,
      };
    })
);

export const requestChangeHouse = createAsyncThunk(
  "app/changeHouse",
  async (payload: ChangeHouseRequest, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    await Post(API_ENDPOINTS.GAME.CHANGE_HOUSE, {
      ...payload,
      gameProfileId: app.gameProfile?.id,
    });
    dispatch(requestGameProfile());
    dispatch(requestGetHero());
  }
);

export const buyChest = createAsyncThunk(
  "app/buyChest",
  async (chestCode: string, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    const rs = await Post(API_ENDPOINTS.INVENTORY.BUY.CHEST, {
      chestCode,
      gameProfileId: app.gameProfile?.id,
    })
      .then((rs: any) => {
        return {
          paymentItem: rs,
        };
      })
      .catch(() => {});
    dispatch(requestAppInformation());
    dispatch(requestGetAllInventories());
    return rs;
  }
);

export const requestGetAllInventories = createAsyncThunk(
  "app/getAllInventories",
  async (_, { dispatch, getState }) => {
    const { app } = getState() as { app: AppState };

    return Get<any>(
      API_ENDPOINTS.INVENTORY.GET_ALL + `?gameProfileId=${app.gameProfile?.id}`
    ).then((res) => {
      return {
        inventories: res,
      };
    });
  }
);

export const requestGetHero = createAsyncThunk(
  "app/getHero",
  async (_, { dispatch }) =>
    Get<any>(API_ENDPOINTS.GAME.GET_HERO).then((res) => {
      return {
        hero: res,
      };
    })
);

export const requestClaimToken = createAsyncThunk(
  "app/claimToken",
  async (payload: { token: "INGAME" | "INGAME_2" }, { dispatch }) => {
    const result = await Post(API_ENDPOINTS.BALANCE.CLAIM, payload);
    dispatch(requestGameProfile());
    dispatch(requestGetMe());
    return result;
  }
);

export const requestFight = createAsyncThunk(
  "app/fight",
  async (
    payload: { type: MatchType; username: string },
    { getState, dispatch }
  ) => {
    const { app } = getState() as { app: AppState };

    const url =
      payload.type === "FRIEND"
        ? API_ENDPOINTS.GAME.FIGHT_WITH_FRIEND
        : API_ENDPOINTS.GAME.FIGHT_RANKED;

    return await Post(url, {
      gameProfileId: app.gameProfile?.id,
      provider: app.provider,
      providerId: payload.username,
    }).then((rs: any) => ({
      matchResult: rs,
    }));
  }
);

export const requestGetMe = createAsyncThunk(
  "app/getMe",
  async (_, { dispatch }) =>
    Get<any>(API_ENDPOINTS.BALANCE.ME).then((res) => {
      return {
        me: res,
      };
    })
);

export const requestUpgradeAttribute = createAsyncThunk(
  "app/upgradeAttribute",
  async (attribute: AttributeType, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    const result = await Post(API_ENDPOINTS.GAME.UPGRADE_ATTRIBUTE, {
      gameProfileId: app.gameProfile?.id,
      attribute,
    });
    dispatch(requestGameProfile());
    dispatch(requestGetMe());
    return result;
  }
);

export const requestChangeSkill = createAsyncThunk(
  "app/requestChangeSkill",
  async (skillCode: string, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    await Post(API_ENDPOINTS.GAME.CHANGE_SKILL, {
      gameProfileId: app.gameProfile?.id,
      heroId: app.hero?.id,
      skill: skillCode,
    });

    dispatch(requestGameProfile());
    dispatch(requestGetMe());
  }
);

export const requestGetCheckIn = createAsyncThunk(
  "app/getCheckIn",
  async (_, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    return Get(
      API_ENDPOINTS.GAME.CHECK_IN + `?gameProfileId=${app.gameProfile?.id}`
    ).then((res: any) => {
      return {
        checkIn: res,
      };
    });
  }
);

export const requestCheckIn = createAsyncThunk(
  "app/checkIn",
  async (_, { getState, dispatch }) => {
    const { app } = getState() as { app: AppState };
    await Post(`${API_ENDPOINTS.GAME.CLAIM}`, {
      gameProfileId: app.gameProfile?.id,
    })
      .then(() => {
        dispatch(requestGetCheckIn());
        dispatch(requestGetMe());
      })
      .catch(() => {});
  }
);

export const requestGetMission = createAsyncThunk(
  "app/getMission",
  async (_, { getState, dispatch }) => {
    return Get(API_ENDPOINTS.GAME.MISSION).then((res: any) => ({
      missions: res,
    }));
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestAppInformation.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestGameProfile.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestGetAllInventories.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestClaimToken.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestGetHero.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestChangeHouse.fulfilled, (state) => state);
    builder.addCase(requestUpgradeAttribute.fulfilled, (state) => state);
    builder.addCase(requestChangeSkill.fulfilled, (state) => state);
    builder.addCase(requestFight.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });

    builder.addCase(requestGetMe.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestGetCheckIn.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(requestGetMission.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(buyChest.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export default appSlice.reducer;
