import { RouteObject } from "react-router-dom";
import { images } from "./constants";
import AirdropPage from "./pages/airdrop";
import EarnPage from "./pages/earn";
import NotFoundPage from "./pages/errors/404";
import FightPage from "./pages/fight";
import FriendPage from "./pages/friend";
import HomePage from "./pages/home/index";
import HousePage from "./pages/house";
import InventoryPage from "./pages/inventory";
import KombatPage from "./pages/kombat";
import ShopPage from "./pages/shop";
import TierPage from "./pages/tier";
import UpgradePage from "./pages/upgrade";
import Footer from "./components/footer";

export const routes: Array<
  RouteObject & { name: string; isNav: boolean; icon?: string }
> = [
  {
    path: "/",
    name: "home",
    isNav: false,
    element: (
      <>
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/earn",
    name: "earn",
    element: (
      <>
        <EarnPage />
        <Footer />
      </>
    ),
    icon: images.earn,
    isNav: true,
  },
  {
    path: "/upgrade",
    name: "upgrade",
    element: (
      <>
        <UpgradePage />
        <Footer />
      </>
    ),
    icon: images.upgrade,
    isNav: true,
  },
  {
    path: "/kombat",
    name: "kombat",
    element: (
      <>
        <KombatPage />
        <Footer />
      </>
    ),
    icon: images.kombat,
    isNav: true,
  },
  {
    path: "/kombat/inventory",
    name: "Inventory",
    element: (
      <>
        <InventoryPage />
        <Footer />
      </>
    ),
    isNav: false,
  },
  {
    path: "/friend",
    name: "Friend",
    element: (
      <>
        <FriendPage />
        <Footer />
      </>
    ),
    icon: images.friend,
    isNav: true,
  },
  {
    path: "/airdrop",
    name: "airdrop",
    element: (
      <>
        <AirdropPage />
        <Footer />
      </>
    ),
    icon: images.airdrop,
    isNav: true,
  },
  {
    path: "/fight",
    name: "Fight",
    element: (
      <>
        <FightPage />
        <Footer />
      </>
    ),
    isNav: false,
  },
  {
    path: "*",
    name: "404",
    isNav: false,
    element: <NotFoundPage />,
  },
  {
    path: "shop",
    name: "Shop",
    isNav: false,
    element: (
      <>
        <ShopPage />
        <Footer />
      </>
    ),
  },
  {
    path: "house",
    name: "House",
    isNav: false,
    element: (
      <>
        <HousePage />
        <Footer />
      </>
    ),
  },
  {
    path: "tier",
    name: "Tier",
    isNav: false,
    element: (
      <>
        <TierPage />
        <Footer />
      </>
    ),
  },
];
