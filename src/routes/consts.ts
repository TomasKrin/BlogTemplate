import Games from "../pages/Games/Games";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import { MainLayoutRoutes } from "./routeTypes";
import Sports from "../pages/Sports/Sports";
import Technologies from "../pages/Technologies/Technologies";

export const HOME_PATH = "/";
export const SPORTS_PATH = "/sports";
export const TECHNOLOGIES_PATH = "/technologies";
export const GAMES_PATH = "/games";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: SPORTS_PATH, Component: Sports },
    { path: TECHNOLOGIES_PATH, Component: Technologies },
    { path: GAMES_PATH, Component: Games },
  ],
};
