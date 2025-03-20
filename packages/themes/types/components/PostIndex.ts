// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// PostIndex:
// ==========================================================================
export type PostIndex = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    background?: string;
    mobile: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    color?: string;
    // Props settings
    isFluid: boolean;
    // fluidContainer
    fluidContainer: {
      marginLeft?: string;
      marginRight?: string;
      width?: string;
      maxWidth?: string;
      mobile: {
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
    // container
    container: {
      marginLeft?: string;
      marginRight?: string;
      mobile: {
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledGrid: {
    zIndex?: string;
    display?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    alignItems?: string;
    mobile: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridTemplateColumns?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledNotFound
  // ==========================================================================
  // Typeography variants
  StyledNotFound: {
    variant: string;
    color?: string;
    margin?: string;
    mobile: {
      gridColumn?: string;
      margin?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      margin?: string;
    };
    tablet: {
      gridColumn?: string;
      margin?: string;
    };
    desktop: {
      gridColumn?: string;
      margin?: string;
    };
    widescreen: {
      gridColumn?: string;
      margin?: string;
    };
  };
};

export type PostIndexTheme = Record<layoutVariant, PostIndex>;
