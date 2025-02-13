// ==========================================================================
// Layout
// ==========================================================================

// Media queries (breakpoints)
const breakpoints = {
  mobile: 0,
  mobileLarge: 500,
  tablet: 740,
  desktop: 1020,
  widescreen: 1460
};

// CSS grid column gap
const gridColGap = {
  mobile: `10px`,
  mobileLarge: `12px`,
  tablet: `20px`,
  desktop: `20px`,
  widescreen: `20px`
};

// CSS grid row gap
const gridRowGap = {
  mobile: `10px`,
  mobileLarge: `12px`,
  tablet: `20px`,
  desktop: `20px`,
  widescreen: `20px`
};

// Colours
const colors = {
  transparent: 'transparent',
  white: '#F5F5F5',
  whiteOff: '#F5F5F5',
  black: '#1e1e1e',
  blackMidGrey: `#424242`,
  midBlack: '#292929',
  grey: '#808080',
  lightGrey: '#888888',
  greyLight: '#A8A8A8',
  greyLighter: '#8F8F8F',
  GreyBlue: `#757575`,
  darkGrey: '#303030',
  red: `#eb0048`,
  green: '#04c560',
  greyMid: `#27272a`,
  yellow: `#FDD023`,
  darkMid: `#292929`,
  blackMid: '#0F0F0F',
  blueLight: '#96DDFF',
  blueLightOpacity: 'rgba(150,221,255, 0.75)',
  //just test

  blackHeroGradient: 'linear-gradient(0deg, rgba(24,24,24,1) 25%, rgba(0,0,0,0) 100%)',
  whiteOpacity: `rgba(250,250,250,0.9)`,
  blackOpacity: `rgba(24,24,27,1)`
};

// Typography
const fonts = {
  // Poppins
  PoppinsRegular: `'PoppinsRegular', Helvetica, Arial, sans-serif `,
  PoppinsMedium: `'PoppinsMedium', Helvetica, Arial, sans-serif `,
  PoppinsBold: `'PoppinsBold', Helvetica, Arial, sans-serif `
};

// Default type settings
const typeDefaults = {
  family: fonts.PoppinsRegular,
  weight: 400,
  familyBold: fonts.PoppinsRegular,
  weightBold: 400,
  backgroundBody: colors.white,
  colorBody: colors.black,
  colorBodyLink: colors.grey,
  size: '14px',
  lineHeight: '18px',
  letterSpacing: '0.12px',
  userSelect: `none`,
  // multiples
  h1Multiple: 1.7,
  h2Multiple: 1.5,
  h3Multiple: 1.3,
  h4Multiple: 1.1,
  h5Multiple: 0.9,
  h6Multiple: 0.8,
  blockquoteMultiple: 1.9
};

export { breakpoints, gridColGap, gridRowGap, colors, fonts, typeDefaults };
