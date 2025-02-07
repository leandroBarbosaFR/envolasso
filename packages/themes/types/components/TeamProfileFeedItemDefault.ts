// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// TeamProfileFeedItemDefault:
// ==========================================================================
export type TeamProfileFeedItemDefault = {
  // ==========================================================================
  // StyledFeedItem
  // ==========================================================================
  StyledFeedItem: {
    scrollSnapAlign?: string;
    position?: string;
    color?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    overflow?: string;
    mobile: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // ImageTag
  // ==========================================================================
  StyledImage: {
    height?: string;
    overflow?: string;
    borderRadius?: string;
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
    // ==========================================================================
    // ImageTag
    // ==========================================================================
    ImageTag: {
      layoutVariant: string;
      fit?: string;
      width: number;
      height: number;
      cropWidth: number;
      cropHeight: number;
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
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    alignSelf?: string;
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
  // StyledSubTitleWrap
  // ==========================================================================
  StyledSubTitleWrap: {
    alignSelf?: string;
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
    StyledSubTitle: {
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
  // StyledExcerptWrap
  // ==========================================================================
  StyledExcerptWrap: {
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
    StyledExcerpt: {
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
  // Button
  // ==========================================================================
  Button: {
    variant: string;
    withIcon: boolean;
    withText: boolean;
  };
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    position?: string;
    zIndex?: string;
    display?: string;
    justifyContent?: string;
    alignSelf?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
    };
    // StyledCtaNav
    // ==========================================================================
    StyledCtaNav: {
      variant: string;
      ctaTitle?: string;
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
    // ==========================================================================
    // StyledCtaWrapper
    // ==========================================================================
    StyledCtaWrapper: {
      display?: string;
      justifyContent?: string;
      alignItems?: string;
    };
  };
};

export type TeamProfileFeedItemDefaultTheme = Record<layoutVariant, TeamProfileFeedItemDefault>;
