import "styled-components";
import { CSSProp } from "styled-components";
import type {} from "styled-components/cssprop";

interface PaletteProps {
  main?: string;
  light?: string;
  dark?: string;
}

interface TypographyProps {
  fontSize?: string;
  fontWeight?: string | number;
  lineHeight?: string | number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: PaletteProps;
      grey: PaletteProps;
      text: PaletteProps;
      common: {
        black: string;
        white: string;
      };
      background: PaletteProps;
      error: PaletteProps;
      success: PaletteProps;
    };
    gradients: {
      default: {
        from: string;
        to: string;
      };
    };
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"];
      values: { [string]: number };
      up: (key: string) => string;
      down: (key: string) => string;
    };
    shape: {
      round: string;
    };
    transition: {
      default: string;
    };
    typography: {
      fontFamily: string;
      h1: TypographyProps;
      h2: TypographyProps;
      h3: TypographyProps;
      h4: TypographyProps;
      h5: TypographyProps;
      h6: TypographyProps;
      body1: TypographyProps;
      body2: TypographyProps;
      button: TypographyProps;
    };
    spacing: (multiplier: number) => number;
    spacingPx: (...multiplier: number[]) => string;
    spacingRem: (...multiplier: number[]) => string;
    pxToRem: (...multiplier: number[]) => string;
  }
}

declare module "react" {
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
