import { PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/sports" | "/technologies" | "/games";
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};
