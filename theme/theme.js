import { spacing, spacingPx, spacingRem, pxToRem } from "./helpers";
export { spacing, spacingPx, spacingRem, pxToRem };

const breakpoints = {
  xs: 400, // phone-portrait down
  sm: 600, // tablet-portrait up / phone-landscape up
  md: 800, //
  lg: 1000, // tablet-landscape up
  xl: 1200, // desktop up
};

export const theme = {
  palette: {
    primary: {
      main: "#383E71",
      light: "#989FDB",
    },
    grey: {
      light: "#ccc",
      main: "#666",
      dark: "#333",
    },
    text: {
      main: "#383E71",
      light: "#989FDB",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      light: "#FAF5FF",
      dark: "#130525",
    },
    error: {
      main: "#FF377F",
    },
    success: {
      main: "green",
    },
  },
  gradients: {
    default: {
      from: "#383E71",
      to: "#9D25B0",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: breakpoints,
    up: (key) => `@media (min-width:${breakpoints[key]}px)`,
    down: (key) => {
      if (breakpoints[key] > 0) {
        return `@media (max-width:${breakpoints[key] - 1}px)`;
      }
      return `@media (max-width:${breakpoints[key]}px)`;
    },
  },
  shape: {
    round: pxToRem(5),
  },
  transition: {
    default: "0.2s ease",
  },
  typography: {
    fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    h1: {
      fontSize: pxToRem(40),
      fontWeight: 600,
    },
    h2: {
      fontSize: pxToRem(35),
      fontWeight: 600,
    },
    h3: {
      fontSize: pxToRem(25),
      fontWeight: 600,
    },
    h4: {
      fontSize: pxToRem(20),
      fontWeight: 600,
    },
    h5: {
      fontSize: pxToRem(18),
      fontWeight: 600,
    },
    h6: {
      fontSize: pxToRem(16),
      fontWeight: 600,
    },
    body1: {
      fontSize: pxToRem(16),
      fontWeight: "normal",
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: "normal",
    },
    button: {
      fontSize: pxToRem(16),
      fontWeight: "bold",
    },
  },
  spacing,
  spacingPx,
  spacingRem,
  pxToRem,
};
