import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../../constants";
import { AppInformation, Attribute, AttributeType } from "../../../interfaces";
import { GameHouse } from "../../../interfaces/configuration-data.interface";
import { Get, Post } from "../../http-client/http.fetch";

export interface AppState {
  appInformation?: AppInformation;
  inventories?: Array<any>;
  gameProfile?: {
    id: string;
    balances: {
      INGAME: number;
      INGAME_2: number;
    };
    attributes: {
      [key in AttributeType]: Attribute;
      // POCKET: Attribute;
      // SALARY: Attribute;
    };
    // [key: string]: any;
  };
  hero?: Record<string, any>;
}

const initialState: AppState = {
  appInformation: undefined,
  inventories: undefined,
  gameProfile: undefined,
  hero: undefined,
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
  async (
    payload: {
      gameProfileId: string;
      house: GameHouse;
    },
    { dispatch }
  ) =>
    Post(API_ENDPOINTS.GAME.CHANGE_HOUSE, payload).then((res) => {
      return {
        gameProfile: res,
      };
    })
);

export const requestGetAllInventories = createAsyncThunk(
  "app/getAllInventories",
  async (_, { dispatch, getState }) => {
    const { app } = getState() as { app: AppState };

    return Get<any>(
      API_ENDPOINTS.INVENTORY.GET_ALL + `?gameProfileId=${app.gameProfile!.id}`
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
    return result;
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
  },
});

export default appSlice.reducer;
