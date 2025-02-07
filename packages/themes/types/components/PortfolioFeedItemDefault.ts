// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// PortfolioFeedItemDefault:
// ==========================================================================
export type PortfolioFeedItemDefault = {
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
    };
    mobileLarge: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
    };
    tablet: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
    };
    desktop: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
    };
    widescreen: {
      gridColumn?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
    };
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    borderRadius?: string;
    overflow?: string;
    all?: string;
    cursor?: string;
    pointerEvent?: string;
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
  // ==========================================================================
  // StyledFeedInner
  // ==========================================================================
  StyledFeedInner: {
    zIndex?: string;
    position?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    background?: string;
    borderRadius?: string;
    pointerEvent?: string;
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
    // verlay styles & Hover states in StyledFeedItem file
    opacity?: string;
    display?: string;
    transition?: string;
    opacityHover?: string;
    displayHover?: string;
    transformHoverFirstChild?: string;
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
      whiteSpace?: string;
      truncateValue?: number;
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
    Button: {
      variant: string;
      text?: string;
      withIcon: boolean;
      iconName?: string;
      iconPosition?: string;
    };
  };
};

export type PortfolioFeedItemDefaultTheme = Record<layoutVariant, PortfolioFeedItemDefault>;
