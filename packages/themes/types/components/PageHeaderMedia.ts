// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'artistProfile' | 'composerProfile' | string;

// ==========================================================================
// PageHeaderMedia:
// ==========================================================================
export type PageHeaderMedia = {
  // ==========================================================================
  // Config: Hide/show content
  // ==========================================================================
  config: {
    isBackButtonVisible: boolean;
    isBackButtonLink: boolean;
    isCategoryVisible: boolean;
    isSubtitleVisible: boolean;
    isTitleVisible: boolean;
    isExcerptVisible: boolean;
    isBodyVisible: boolean;
    isCtaVisible: boolean;
  };
  OptsSharePage: {
    layoutVariant: string;
  };
  // ==========================================================================
  // StyledPageHeaderMedia (Section)
  // ==========================================================================
  StyledPageHeader: {
    position?: string;
    overflow?: string;
    background?: string;
    clipPth?: string;
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
  // StyledPageHeaderContainer
  // ==========================================================================
  StyledContainer: {
    // Props settings
    isFluid: boolean;
    position?: string;
    zIndex?: string;
    background?: string;
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
  // StyledPageHeaderGrid
  // ==========================================================================
  StyledPageHeaderGrid: {
    position?: string;
    display?: string;
    gridTemplateColumns?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    zIndex?: string;
    pointerEvents?: string;
    mobile: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      colGap?: string;
      rowGap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      margin?: string;
      padding?: string;
    };
    StyledBackButton: {
      pointerEvents?: string;
      position?: string;
      zIndex?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      gap?: string;
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
      Button: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
        iconPosition?: string;
        text?: string;
      };
    };
    StyledIconNav: {
      pointerEvents?: string;
      position?: string;
      zIndex?: string;
      display?: string;
      flexWrap?: string;
      top?: string;
      left?: string;
      bottom?: string;
      right?: string;
      gap?: string;
      mobile: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      mobileLarge: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      tablet: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      desktop: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      widescreen: {
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        gap?: string;
      };
      surpriseMeButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
    };
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    position?: string;
    zIndex?: string;
    overflow?: string;
    border?: string;
    mobile: {
      mxWidth?: string;
      margin?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    mobileLarge: {
      mxWidth?: string;
      margin?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    tablet: {
      mxWidth?: string;
      margin?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    desktop: {
      mxWidth?: string;
      margin?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    widescreen: {
      mxWidth?: string;
      margin?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
    };
    ImageTag: {
      layoutVariant: string;
      width: number;
      height: number;
      cropWidth?: number;
      cropHeight?: number;
      fit?: string;
      fill: boolean;
      priority: boolean;
      placeholder: string;
    };
  };
  // ==========================================================================
  // StyledMediaWrapper
  // ==========================================================================
  StyledMediaWrapper: {
    position?: string;
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    zIndex?: string;
    pointerEvents?: string;
    overflow?: string;
    backgroundRepeat?: string;
    backgroundAttachment?: string;
    backgroundSize?: string;
    mobile: {
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      borderTopLeftRadius?: string;
      borderTopRightRadius?: string;
      borderBottomLeftRadius?: string;
      borderBottomRightRadius?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledVideo
  // ==========================================================================
  StyledVideo: {
    width?: string;
    height?: string;
    minHeight?: string;
    minWidth?: string;
    position?: string;
    top?: string;
    left?: string;
    transform?: string;
    margin?: string;
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledCatWrap: {
    pointerEvents?: string;
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
    pointerEvents?: string;
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
    // StyledSubTitle
    // ==========================================================================
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
    pointerEvents?: string;
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
      span: {
        color?: string;
        borderBottom?: string;
      };
    };
  };
  // ==========================================================================
  // StyledExcerpt
  // ==========================================================================
  StyledExcerpt: {
    variant: string;
    color?: string;
    pointerEvents?: string;
    blockquote: {
      color?: string;
    };
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
    };
  };
  // ==========================================================================
  // StyledTextImgArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color?: string;
    zIndex?: string;
    pointerEvents?: string;
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
    pointerEvents?: string;
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
};

export type PageHeaderMediaTheme = Record<layoutVariant, PageHeaderMedia>;
