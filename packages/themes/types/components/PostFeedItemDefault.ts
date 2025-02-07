// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// PostFeedItemDefault:
// ==========================================================================
export type PostFeedItemDefault = {
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
      padding?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      minHeight?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      padding?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      minHeight?: string;
    };
    tablet: {
      gridColumn?: string;
      padding?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      minHeight?: string;
    };
    desktop: {
      gridColumn?: string;
      padding?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      minHeight?: string;
    };
    widescreen: {
      gridColumn?: string;
      padding?: string;
      // isHorizontalFeed
      width?: string;
      maxWidth?: string;
      minHeight?: string;
    };
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    borderRadius?: string;
    overflow?: string;
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
  // StyledFeedInner
  // ==========================================================================
  StyledFeedInner: {
    pointerEvents?: string;
    zIndex?: string;
    position?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    mobile: {
      height?: string;
      margin?: string;
      padding?: string;
      border?: string;
      borderRadius?: string;
    };
    mobileLarge: {
      height?: string;
      margin?: string;
      padding?: string;
      border?: string;
      borderRadius?: string;
    };
    tablet: {
      height?: string;
      margin?: string;
      padding?: string;
      border?: string;
      borderRadius?: string;
    };
    desktop: {
      height?: string;
      margin?: string;
      padding?: string;
      border?: string;
      borderRadius?: string;
    };
    widescreen: {
      height?: string;
      margin?: string;
      padding?: string;
      border?: string;
      borderRadius?: string;
    };
    // verlay styles & Hover states in StyledFeedItem file
    opacity?: string;
    display?: string;
    transition?: string;
    opacityHover?: string;
    displayHover?: string;
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
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
      border?: string;
      borderTop?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRight?: string;
      borderRadius?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
      border?: string;
      borderTop?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRight?: string;
      borderRadius?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
      border?: string;
      borderTop?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRight?: string;
      borderRadius?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
      border?: string;
      borderTop?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRight?: string;
      borderRadius?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
      border?: string;
      borderTop?: string;
      borderBottom?: string;
      borderLeft?: string;
      borderRight?: string;
      borderRadius?: string;
    };
    // StyledSubTitle?: subtitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color?: string;
      mobile: {
        margin?: string;
        textAlign?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
        content?: string;
        height?: string;
        width?: string;
        position?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        pointerEvents?: string;
        background?: string;
        border?: string;
        borderTop?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRight?: string;
        borderRadius?: string;
      };
      mobileLarge: {
        margin?: string;
        textAlign?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
        content?: string;
        height?: string;
        width?: string;
        position?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        pointerEvents?: string;
        background?: string;
        border?: string;
        borderTop?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRight?: string;
        borderRadius?: string;
      };
      tablet: {
        margin?: string;
        textAlign?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
        content?: string;
        height?: string;
        width?: string;
        position?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        pointerEvents?: string;
        background?: string;
        border?: string;
        borderTop?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRight?: string;
        borderRadius?: string;
      };
      desktop: {
        margin?: string;
        textAlign?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
        content?: string;
        height?: string;
        width?: string;
        position?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        pointerEvents?: string;
        background?: string;
        border?: string;
        borderTop?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRight?: string;
        borderRadius?: string;
      };
      widescreen: {
        margin?: string;
        textAlign?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
        content?: string;
        height?: string;
        width?: string;
        position?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        pointerEvents?: string;
        background?: string;
        border?: string;
        borderTop?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRight?: string;
        borderRadius?: string;
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
    pointerEvents?: string;
    all?: string;
    cursor?: string;
    alignSelf?: string;
    display?: string;
    textDecoration?: string;
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
  // StyledArticle
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
      columnCount?: string;
      columnGap?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      columnCount?: string;
      columnGap?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      columnCount?: string;
      columnGap?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      columnCount?: string;
      columnGap?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      columnCount?: string;
      columnGap?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
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
      whiteSpace?: string;
      variant: string;
      color?: string;
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
    pointerEvents?: string;
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
    };
  };
  // ==========================================================================
  // StyledBottomWrapper
  // ==========================================================================
  StyledBottomWrapper: {
    pointerEvents?: string;
    position?: string;
    zIndex?: string;
    display?: string;
    justifyContent?: string;
    alignSelf?: string;
    flexDirection?: string;
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
  };
};

export type PostFeedItemDefaultTheme = Record<layoutVariant, PostFeedItemDefault>;
