"use client";

import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "10px 10px 10px 0",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    common: {
      black: "#4C4C4D",
    },
    primary: {
      contrastText: "rgba(30, 30, 30, 0.60)",
      light: "rgba(255, 255, 255, 0.7)",
      main: "#07A4FC",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
});

export default theme;
