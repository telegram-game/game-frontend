export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_ENDPOINT,
  AUTH: {
    SIGN_IN: "/api/v1.0/auth/login/by-provider",
    REFRESH_TOKEN: "/api/v1.0/auth/refresh-token",
  },
  GLOBAL: {
    APP_INFORMATION: "/api/v1.0/app/information",
  },
  GAME: {
    GAME_PROFILE: "/api/v1.0/games/game-profiles",
    CHANGE_HOUSE: "/api/v1.0/games/game-profiles/change-house",
    GET_HERO: "/api/v1.0/games/heroes",
  },
  INVENTORY: {
    GET_ALL: "v1.0/games/inventories",
  },
  BALANCE: {
    CLAIM: "/api/v1.0/balances/claim",
  },
};
