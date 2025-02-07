// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// CtaNav:
// ==========================================================================
export type CtaNav = {
  // ==========================================================================
  // StyledCtaNav
  // ==========================================================================
  StyledCtaNav: {
    display?: string;
    flexWrap?: string;
    gridTemplateColumns?: string;
    withColGapp?: boolean;
    withRowGap?: boolean;
    mobile: {
      flexDirection?: string;
      justifyContent?: string;
      gap?: string;
      padding?: string;
      flexWrap?: string;
      width?: string;
      columnGap?: string;
      margin?: string;
      alignSelf?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      flexDirection?: string;
      gap?: string;
      padding?: string;
      flexWrap?: string;
      width?: string;
      columnGap?: string;
      justifyContent?: string;
      margin?: string;
      alignSelf?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      flexDirection?: string;
      gap?: string;
      padding?: string;
      flexWrap?: string;
      width?: string;
      columnGap?: string;
      justifyContent?: string;
      margin?: string;
      alignSelf?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      flexDirection?: string;
      gap?: string;
      padding?: string;
      flexWrap?: string;
      width?: string;
      columnGap?: string;
      justifyContent?: string;
      margin?: string;
      alignSelf?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      flexDirection?: string;
      gap?: string;
      padding?: string;
      flexWrap?: string;
      width?: string;
      columnGap?: string;
      justifyContent?: string;
      margin?: string;
      alignSelf?: string;
      colGap?: string;
      rowGap?: string;
    };
  };
  // ==========================================================================
  // StyledHeading
  // ==========================================================================
  StyledHeading: {
    variant: string;
    color?: string;
    display?: string;
    width?: string;
    mobile: {
      margin?: string;
    };
    mobileLarge: {
      margin?: string;
    };
    tablet: {
      margin?: string;
    };
    desktop: {
      margin?: string;
    };
    widescreen: {
      margin?: string;
    };
  };
  // ==========================================================================
  // Button
  // ==========================================================================
  Button: {
    buttonVariant: string;
    withIcon: boolean;
    withText: boolean;
    iconName: string;
    iconPosition: string;
  };

  StyledButtonLink: {
    mobile: { gridColumn?: string };
    mobileLarge: { gridColumn?: string };
    tablet: { gridColumn?: string };
    desktop: { gridColumn?: string };
    widescreen: { gridColumn?: string };
  };
};

export type CtaNavTheme = Record<layoutVariant, CtaNav>;
