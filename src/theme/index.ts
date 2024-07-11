"use client";

import { createTheme } from "@mui/material";

import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "./fonts/lato-hairline.ttf",
      weight: "100",
    },
    {
      path: "./fonts/lato-thin.ttf",
      weight: "200",
    },
    {
      path: "./fonts/lato-light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/lato-regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/lato-medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/lato-semibold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/lato-heavy.ttf",
      weight: "700",
    },
    {
      path: "./fonts/lato-bold.ttf",
      weight: "800",
    },
  ],
});

export const secondaryFont = localFont({
  src: "./fonts/ethnocentric.otf",
  preload: true,
});

export const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  },
  direction: "ltr",
  components: {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: (theme) => ({
        "html, body": {
          height: "100%",
        },
        a: {
          color: "inherit",
          textDecoration: "inherit",
        },
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset !important`,
          WebkitTextFillColor: `${theme.palette.text.primary} !important`,
        },
        ".no-scrollbar": {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
        },
      }),
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#DD0033",
      light: "#FB3462",
      dark: "#C2002D",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#7F8499",
      disabled: "#596377",
    },
    grey: {
      "50": "#FFFFFF",
      "200": "#9BA0B6",
      "300": "#7F8499",
      "400": "#4F5468",
      "500": "#414557",
      "600": "#272934",
      "700": "#14151A",
      "800": "#1E2029",
    },
    background: {
      paper: "#14151A",
      default: "#000000",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: primaryFont.style.fontFamily,
    h1: {
      fontSize: 48,
      fontWeight: 800,
      lineHeight: "57px",
    },
    h2: {
      fontSize: 35,
      fontWeight: 700,
    },
    h3: {
      fontSize: 30,
      fontWeight: 600,
    },
    h4: {
      fontSize: 25,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "4%",
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "21px",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "4%",
    },
  },
  shadows: [
    "none",
    "0px 8px 15px 0px #000000", // 1
    "none", // 2
    "none", // 3
    "none", // 4
    "none", // 5
    "none", // 6
    "none", // 7
    "none", // 8
    "none", // 9
    "none", // 10
    "none", // 11
    "none", // 12
    "none", // 13
    "none", // 14
    "none", // 15
    "none", // 16
    "none", // 17
    "none", // 18
    "none", // 19
    "none", // 20
    "none", // 21
    "none", // 22
    "none", // 23
    "none", // 24
  ],
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});
