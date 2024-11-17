import AirdropPage from "./pages/airdrop";
import EarnPage from "./pages/earn";
import FightPage from "./pages/fight";
import FriendPage from "./pages/friend";
import HomePage from "./pages/home";
import KombatPage from "./pages/kombat";
import UpgradePage from "./pages/upgrade";

const routes = [
  {
    path: "/",
    name: "home",
    component: <HomePage />,
    isNav: false,
  },
  {
    path: "/earn",
    name: "earn",
    component: <EarnPage />,
    icon: "./assets/icons/earn.svg",
    isNav: true,
  },
  {
    path: "/upgrade",
    name: "upgrade",
    component: <UpgradePage />,
    icon: "./assets/icons/upgrade.svg",
    isNav: true,
  },
  {
    path: "/kombat",
    name: "kombat",
    component: <KombatPage />,
    icon: "./assets/icons/kombat.svg",
    isNav: true,
  },
  {
    path: "/friend",
    name: "Friend",
    component: <FriendPage />,
    icon: "./assets/icons/friend.svg",
    isNav: true,
  },
  {
    path: "/airdrop",
    name: "airdrop",
    component: <AirdropPage />,
    icon: "./assets/icons/airdrop.svg",
    isNav: true,
  },
  {
    path: "/fight",
    name: "Fight",
    component: <FightPage />,
    isNav: false,
  },
];
export default routes;
