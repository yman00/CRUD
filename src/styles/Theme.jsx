import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#FFF",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        margin: "dense", // Apply this to all variants if needed
        fullWidth: true, // Apply this to all variants if needed
      },
    },
  },
});

export default theme;
