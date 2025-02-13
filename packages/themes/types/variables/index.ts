// ==========================================================================
// BreakPoints:
// ==========================================================================
export type BreakPoints = {
  mobile: number;
  mobileLarge: number;
  tablet: number;
  desktop: number;
  widescreen: number;
};

// Colours
export type Colors = {
  transparent: string;
  black: string;
  white: string;
  grey: string;
  darkGrey: string;
  red: string;
  green: string;
};

// Typography
export type Fonts = {
  PoppinsRegular: string;
};

// CSS grid column gap
export type GridColGap = {
  mobile: string;
  mobileLarge: string;
  tablet: string;
  desktop: string;
  widescreen: string;
};

// // CSS grid row gap
export type GridRowGap = {
  mobile: string;
  mobileLarge: string;
  tablet: string;
  desktop: string;
  widescreen: string;
};

// ==========================================================================
// TypeDefaults:
// ==========================================================================
export type TypeDefaults = {
  family: string;
  weight: number;
  familyBold: string;
  weightBold: number;
  backgroundBody: string;
  colorBody: string;
  colorBodyLink: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  userSelect: string;
  // multiples
  h1Multiple: number;
  h2Multiple: number;
  h3Multiple: number;
  h4Multiple: number;
  h5Multiple: number;
  h6Multiple: number;
  blockquoteMultiple: number;
};
