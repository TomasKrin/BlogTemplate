import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { mainLayoutRoutes } from "./consts";

// import { useContext } from "react";

// import { UserContext } from "../contexts/UserContext";

const Routes = () => {
  //   const { isLoggedIn } = useContext(UserContext);
  //   const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;

  const { Layout, routes } = mainLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
      {/* <Route
        path="*"
        element={
          <Layout>
            <Navigate to={{ pathname: "/" }} />
          </Layout>
        }
      /> */}
    </RoutesWrapper>
  );
};

export default Routes;
