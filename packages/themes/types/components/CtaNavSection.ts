// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// CtaNavSection:
// ==========================================================================
export type CtaNavSection = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    background: string;
    mobile: {
      height: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      height: string;
      margin: string;
      padding: string;
    };
    tablet: {
      height: string;
      margin: string;
      padding: string;
    };
    desktop: {
      height: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      height: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    color: string;
    isFluid: boolean;
    // fluidContainer
    // ==========================================================================
    fluidContainer: {
      marginLeft: string;
      marginRight: string;
      width: string;
      maxWidth: string;
      mobile: {
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        paddingLeft: string;
        paddingRight: string;
      };
    };
    // container
    // ==========================================================================
    container: {
      marginLeft: string;
      marginRight: string;
      mobile: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        width: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledGrid: {
    display: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns: string;
    alignItems: string;
    zIndex?: string;
    mobile: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    tablet: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    desktop: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    display: string;
    alignContent: string;
    mobile: {
      gap: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      gap: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    tablet: {
      gap: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    desktop: {
      gap: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      gap: string;
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    // CtaNav
    // ==========================================================================
    CtaNav: {
      variant: string;
    };
  };
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledArticle: {
    color: string;
    variant: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
  };
};

export type CtaNavSectionTheme = Record<layoutVariant, CtaNavSection>;
