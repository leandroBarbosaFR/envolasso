// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// BlogSinglePage:
// ==========================================================================
export type BlogSinglePage = {
  // ==========================================================================
  // StyledSection
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
    // Props settings
    isFluid: boolean;
    // fluidContainer
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
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns: string;
    alignItems: string;
    display: string;
    mobile: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    mobileLarge: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    tablet: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    desktop: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    widescreen: {
      height: string;
      colGap: string;
      rowGap: string;
    };
  };
  // ==========================================================================
  // StyledCtaWrap
  // ==========================================================================
  StyledCtaWrap: {
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
    // StyledCtaNav
    // ==========================================================================
    Button: {
      variant: string;
      text: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledSubTitleWrap: {
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
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color: string;
      mobile: {
        margin: string;
      };
      mobileLarge: {
        margin: string;
      };
      tablet: {
        margin: string;
      };
      desktop: {
        margin: string;
      };
      widescreen: {
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
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
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color: string;
      mobile: {
        margin: string;
      };
      mobileLarge: {
        margin: string;
      };
      tablet: {
        margin: string;
      };
      desktop: {
        margin: string;
      };
      widescreen: {
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledExcerptWrap
  // ==========================================================================
  StyledExcerptWrap: {
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
    // StyledExcerpt
    // ==========================================================================
    StyledExcerpt: {
      variant: string;
      color: string;
      blockquote: {
        color: string;
      };
      mobile: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      mobileLarge: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      tablet: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      desktop: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      widescreen: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledArticleWrap
  // ==========================================================================
  StyledArticleWrap: {
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
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: string;
      color: string;
      blockquote: {
        color: string;
      };
      mobile: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      mobileLarge: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      tablet: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      desktop: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
      widescreen: {
        gridColumn: string;
        gridRow: string;
        margin: string;
      };
    };
  };
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    display: string;
    justifyContent: string;
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
    // StyledCtaNav
    // ==========================================================================
    StyledCtaNav: {
      variant: string;
      ctaTitle: string;
      color: string;
      mobile: {
        margin: string;
      };
      mobileLarge: {
        margin: string;
      };
      tablet: {
        margin: string;
      };
      desktop: {
        margin: string;
      };
      widescreen: {
        margin: string;
      };
    };
  };
};

export type BlogSinglePageTheme = Record<layoutVariant, BlogSinglePage>;
