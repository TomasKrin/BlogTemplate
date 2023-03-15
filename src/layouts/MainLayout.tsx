import { Box, styled } from "@mui/material";

import { PropsWithChildren } from "react";
import TopBar from "../components/TopBar/TopBar";

const Root = styled("div")(({ theme }) => ({
  paddingLeft: 100,
  paddingRight: 100,
  paddingTop: 30,
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar />
      <Root>
        <Box>{children}</Box>
      </Root>
    </>
  );
};

export default MainLayout;
