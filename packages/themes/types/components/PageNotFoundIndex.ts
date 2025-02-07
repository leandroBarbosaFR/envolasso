// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// ResetPasswordIndex:
// ==========================================================================
export type PageNotFoundIndex = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    position?: string;
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
  // StyledFeedContainer
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
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    display?: string;
    mobile: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
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
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      textDecoration?: string;
      color?: string;
      span: {
        color?: string;
      };
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
      span: {
        color?: string;
      };
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
  // ==========================================================================
  // StyledBodycopy
  // ==========================================================================
  StyledBodycopyWrap: {
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
    // StyledBodycopy
    // ==========================================================================
    StyledBodycopy: {
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
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    display?: string;
    alignItems?: string;
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
    variant?: string;
    color?: string;
    gridColumn?: string;
    gridRow?: string;
    padding?: string;
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
  };

  // ==========================================================================
  // StyledArticleWrap
  // ==========================================================================

  StyledArticleWrap: {
    variant?: string;
    color?: string;
    gridColumn?: string;
    gridRow?: string;
    padding?: string;
    display?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      display?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      display?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      display?: string;
      justifyContent?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      display?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      display?: string;
    };
  };
  // ==========================================================================
  // StyledArticleAside
  // ==========================================================================

  StyledArticleAside: {
    variant?: string;
    color?: string;
    display?: string;
    gridColumn?: string;
    gridRow?: string;
    padding?: string;
    fontColor?: string;
    textDecoration?: string;
    mobile: {
      display?: string;
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      justifyContent?: string;
      gap?: string;
    };
    mobileLarge: {
      display?: string;
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      justifyContent?: string;
      gap?: string;
    };
    tablet: {
      display?: string;
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      justifyContent?: string;
      gap?: string;
    };
    desktop: {
      display?: string;
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      justifyContent?: string;
      gap?: string;
    };
    widescreen: {
      display?: string;
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      justifyContent?: string;
      gap?: string;
    };
  };

  // ==========================================================================
  // StyledImage
  // ==========================================================================

  StyledImage: {
    variant?: string;
    gridColumn?: string;
    gridRow?: string;
    padding?: string;

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
  };
  // ==========================================================================
  // StyledSocialNavWrap
  // ==========================================================================
  StyledSocialNavWrap: {
    display?: string;
    alignItems?: string;
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
    // CtaNav
    // ==========================================================================
    CtaNav: {
      variant: string;
    };
  };
};

export type PageNotFoundIndexTheme = Record<layoutVariant, PageNotFoundIndex>;
