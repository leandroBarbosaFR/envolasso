// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'postBody' | string;

// ==========================================================================
// PageHeader:
// ==========================================================================
export type PageHeader = {
  // ==========================================================================
  // Config: Hide/show content
  // ==========================================================================
  config: {
    isCategoryVisible: boolean;
    isSectionImageBgVisible: boolean;
    isImageBgVisible: boolean;
    isSubtitleVisible: boolean;
    isTitleVisible: boolean;
    isBodyVisible: boolean;
    isCtaVisible: boolean;
    isExcerptVisible: boolean;
  };
  // ==========================================================================
  // StyledPageHeaderBanner (Section)
  // ==========================================================================
  StyledSection: {
    display?: string;
    flexDirection?: string;
    flexWrap?: string;
    alignContent?: string;
    background?: string;
    alignItems?: string;
    overflow?: string;
    position?: string;
    borderRadius?: string;
    mobile: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // SectionImageBg
  // ==========================================================================
  SectionImageBg: {
    layoutVariant: string;
    fit?: string;
    width?: number;
    height?: number;
    cropWidth?: number;
    cropHeight?: number;
  };
  // ==========================================================================
  // StyledPageHeaderContainer
  // ==========================================================================
  StyledContainer: {
    // Props settings
    isFluid: boolean;
    // fluidContainer
    position?: string;
    zIndex?: string;
    color?: string;
    // fluidContainer
    // ==========================================================================
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
    // ========================================================================
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
    display?: string;
    gridTemplateColumns?: string;
    position?: string;
    mobile: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    zIndex?: string;
    overflow?: string;
    display?: string;
    position?: string;
    opacity?: string;
    background?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      maxWidth?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      padding?: string;
      background?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      maxWidth?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      padding?: string;
      background?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      maxWidth?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      padding?: string;
      background?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      maxWidth?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      padding?: string;
      background?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      maxWidth?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      padding?: string;
      background?: string;
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
    // After
    // ==========================================================================
    after: {
      content?: string;
      position?: string;
      zIndex?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      mixBlendMode?: string;
      background?: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledCatWrap: {
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
    Button: {
      variant: string;
      text?: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledSubTitleWrap: {
    zIndex?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color?: string;
      mobile: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        borderBottom?: string;
      };
    };
  };
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    zIndex?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
      alignSelf?: string;
      zIndex?: string;
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
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color?: string;
      position?: string;
      mobile: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      mobileLarge: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      tablet: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      desktop: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      widescreen: {
        margin?: string;
        writingMode?: string;
        textOrientation?: string;
        rotate?: string;
        gridRow?: string;
        padding?: string;
        zIndex?: string;
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
        After: {
          content?: string;
          display?: string;
          height?: string;
          width?: string;
          margin?: string;
          borderTop?: string;
        };
      };
      span: {
        color?: string;
        borderBottom?: string;
      };
    };
  };
  // ==========================================================================
  // StyledTextImgArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color?: string;
    zIndex?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
  };
  // ==========================================================================
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    zIndex?: string;
    justifyContent?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      display?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      display?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      display?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      display?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      display?: string;
      margin?: string;
      padding?: string;
      alignSelf?: string;
    };
    // StyledSubTitle
    // ==========================================================================
    CtaNav: {
      variant: string;
    };
  };
  // ==========================================================================
  // StyledPageHeaderGrid
  // ==========================================================================
  StyledPageHeaderGrid: {
    gridTemplateColumns?: string;
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
};

export type PageHeaderTheme = Record<layoutVariant, PageHeader>;
