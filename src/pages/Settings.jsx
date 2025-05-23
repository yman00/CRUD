import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

const Settings = () => {
  return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          width: 350,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h1>SETTINGS</h1>
        </Box>
  );
};

export default Settings;
