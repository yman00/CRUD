import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Stack } from "@mui/material";
import DrawerComponent from "../components/Drawer";
import { Outlet } from "react-router-dom";
import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_CLOSED } from "../utils/constant";

const Layout = () => {
  const styleLayout = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    overflow: "hidden",
    transitionDuration: "500ms",
  };

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={styleLayout}>
        <Header handleDrawerOpen={handleDrawerOpen} />
        <Stack direction="row" width="100vw">
          <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
          <Box
            sx={{
              flexGrow: 1,
              mt: 8,
              width: "100%",
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
