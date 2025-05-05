import React from "react";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ArchiveOutlined from "@mui/icons-material/ArchiveOutlined";
import {
  DRAWER_WIDTH_OPEN,
  DRAWER_WIDTH_CLOSED,
  HEADER_HEIGHT,
} from "../utils/constant";

const DrawerComponent = ({ open }) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED,
          // transition: "width 0.3s",
          overflowX: "hidden",
          top: 64,
          boxSizing: "border-box",
          pt: 3,
        },
      }}
    >
      <Stack>
        <NavLink to="/Dashboard" className="nav-link">
          <Stack direction="row" alignItems="center" gap={1} px={1} py={1}>
            <EqualizerIcon sx={{ fontSize: 30 }} />
            <Typography display={open ? "inline" : "none"} minWidth={300}>
              DASHBOARD
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/About" className="nav-link">
          <Stack direction="row" alignItems="center" gap={1} px={1} py={1}>
            <TableRowsIcon sx={{ fontSize: 30 }} />
            <Typography display={open ? "inline" : "none"} minWidth={300}>
              TABLE
            </Typography>
          </Stack>
        </NavLink>
        <NavLink to="/Settings" className="nav-link">
          <Stack direction="row" alignItems="center" gap={1} px={1} py={1}>
            <ArchiveOutlined sx={{ fontSize: 30 }} />
            <Typography display={open ? "inline" : "none"} minWidth={300}>
              SETTINGS
            </Typography>
          </Stack>
        </NavLink>
      </Stack>
    </Drawer>
  );
};

export default DrawerComponent;
