import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PieActiveArc from "../components/PieGraph/Graph";
import TickPlacementBars from "../components/BarGraph/Graph";
import { desktopOS, platforms } from "../components/PieGraph/Datasets";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "whitesmoke",
        width: "88vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 2,
          width: "50%",
          height: "70%",
          mr: 1,
        }}
      >
        <TickPlacementBars />
      </Box>
      <Stack spacing={1} sx={{ width: "50%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 2,
            p: 2,
            width: "100%",
          }}
        >
          <PieActiveArc data={platforms} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 2,
            p: 2,
            width: "100%",
          }}
        >
          <PieActiveArc data={desktopOS} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;
