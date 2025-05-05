import { Box } from "@mui/material";
import React from "react";
import DenseTable from "../components/Table";
import BasicTable from "../components/Table";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "whitesmoke",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          width: "85%",
          m: 1,
          p: 1,
          borderRadius: 2,
        }}
      >
        <BasicTable />
      </Box>
    </Box>
  );
};

export default About;
