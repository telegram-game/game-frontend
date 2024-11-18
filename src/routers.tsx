import { RouteObject } from "react-router-dom";
import AirdropPage from "./pages/airdrop";
import EarnPage from "./pages/earn";
import NotFoundPage from "./pages/errors/404";
import FightPage from "./pages/fight";
import FriendPage from "./pages/friend";
import HomePage from "./pages/home/index";
import InventoryPage from "./pages/inventory";
import KombatPage from "./pages/kombat";
import UpgradePage from "./pages/upgrade";

export const routes: Array<
  RouteObject & { name: string; isNav: boolean; icon?: string }
> = [
  {
    path: "/",
    name: "home",
    isNav: false,
    element: <HomePage />,
  },
  {
    path: "/earn",
    name: "earn",
    element: <EarnPage />,
    icon: "./assets/icons/earn.svg",
    isNav: true,
  },
  {
    path: "/upgrade",
    name: "upgrade",
    element: <UpgradePage />,
    icon: "./assets/icons/upgrade.svg",
    isNav: true,
  },
  {
    path: "/kombat",
    name: "kombat",
    element: <KombatPage />,
    icon: "./assets/icons/kombat.svg",
    isNav: true,
  },
  {
    path: "/kombat/inventory",
    name: "Inventory",
    element: <InventoryPage />,
    isNav: false,
  },
  {
    path: "/friend",
    name: "Friend",
    element: <FriendPage />,
    icon: "./assets/icons/friend.svg",
    isNav: true,
  },
  {
    path: "/airdrop",
    name: "airdrop",
    element: <AirdropPage />,
    icon: "./assets/icons/airdrop.svg",
    isNav: true,
  },
  {
    path: "/fight",
    name: "Fight",
    element: <FightPage />,
    isNav: false,
  },
  {
    path: "*",
    name: "404",
    isNav: false,
    element: <NotFoundPage />,
  },
];
