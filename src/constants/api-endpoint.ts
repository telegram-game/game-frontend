export const API_ENDPOINTS = {
  BASE_URL:
    process.env.REACT_APP_API_ENDPOINT ||
    "https://game-backend-n47q.onrender.com",
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
    FIGHT_WITH_FRIEND: "/api/v1.0/games/game-matchs/fight/by-friend",
    FIGHT_RANKED: "/api/v1.0/games/game-matchs/fight/random",
    UPGRADE_ATTRIBUTE: "/api/v1.0/games/game-profiles/upgrade-attribute",
    CHANGE_SKILL: "/api/v1.0/games/heroes/change-skill",
    CHECK_IN: "/api/v1.0/checkins",
    CLAIM: "/api/v1.0/checkins/claim",
    MISSION: "/api/v1.0/missions"
  },
  INVENTORY: {
    GET_ALL: "/api/v1.0/games/inventories",
  },
  BALANCE: {
    CLAIM: "/api/v1.0/balances/claim",
    ME: "/api/v1.0/balances/me",
  },
};
