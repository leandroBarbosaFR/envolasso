// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'postBody' | string;

// ==========================================================================
// TextSection:
// ==========================================================================
export type TextSection = {
  // ==========================================================================
  // StyledSection
  // ==========================================================================
  StyledSection: {
    background?: string;
    position?: string;
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
    position?: string;
    zIndex?: string;
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
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
    // container
    // ==========================================================================
    container: {
      marginLeft?: string;
      marginRight?: string;
      mobile: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        height?: string;
        width?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        height?: string;
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
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    display?: string;
    mobile: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      height?: string;
      colGap?: string;
      rowGap?: string;
    };
  };

  // ==========================================================================
  // StyledSubTitleWrap
  // ==========================================================================
  StyledSubTitleWrap: {
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    // StyledTextImgSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color?: string;
      mobile: {
        margin?: string;
        textAlign?: string;
      };
      mobileLarge: {
        margin?: string;
        textAlign?: string;
      };
      tablet: {
        margin?: string;
        textAlign?: string;
      };
      desktop: {
        margin?: string;
        textAlign?: string;
      };
      widescreen: {
        margin?: string;
        textAlign?: string;
      };
      span: {
        color?: string;
      };
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color?: string;
      mobile: {
        margin?: string;
        textAlign?: string;
      };
      mobileLarge: {
        margin?: string;
        textAlign?: string;
      };
      tablet: {
        margin?: string;
        textAlign?: string;
      };
      desktop: {
        margin?: string;
        textAlign?: string;
      };
      widescreen: {
        margin?: string;
        textAlign?: string;
      };
      span: {
        color?: string;
      };
    };
  };
  // ==========================================================================
  // StyledTextImgArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color?: string;
    colorLink?: string;
    textDecoration?: string;
    textTransform?: string;
    colorLinkHover?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      textAlign?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      textAlign?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      textAlign?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      textAlign?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      textAlign?: string;
    };
  };
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    display?: string;
    justifyContent?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
    };
    // StyledCtaNav
    // ==========================================================================
    StyledCtaNav: {
      variant: string;
      color?: string;
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
  };
};

export type TextSectionTheme = Record<layoutVariant, TextSection>;
