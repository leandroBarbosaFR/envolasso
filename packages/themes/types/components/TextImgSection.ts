// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// TextImgSection:
// ==========================================================================
export type TextImgSection = {
  config: {
    isImageBgVisible: boolean;
  };
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
  // ImageBgTag
  // ==========================================================================
  ImageBgTag: {
    layoutVariant: string;
    fit?: string;
    width?: number;
    height?: number;
    cropWidth?: number;
    cropHeight?: number;
  };
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    position?: string;
    zIndex?: string;
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
    container: {
      marginLeft?: string;
      marginRight?: string;
      mobile: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      mobileLarge: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      tablet: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      desktop: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
      widescreen: {
        width?: string;
        height?: string;
        paddingLeft?: string;
        paddingRight?: string;
      };
    };
    after: {
      content?: string;
      position?: string;
      zIndex?: string;
      background?: string;
      mobile: {
        inset?: string;
        right?: string;
        left?: string;
        top?: string;
        bottom?: string;
        margin?: string;
      };
      mobileLarge: {
        inset?: string;
        right?: string;
        left?: string;
        top?: string;
        bottom?: string;
        margin?: string;
      };
      tablet: {
        inset?: string;
        right?: string;
        left?: string;
        top?: string;
        bottom?: string;
        margin?: string;
      };
      desktop: {
        inset?: string;
        right?: string;
        left?: string;
        top?: string;
        bottom?: string;
        margin?: string;
      };
      widescreen: {
        inset?: string;
        right?: string;
        left?: string;
        top?: string;
        bottom?: string;
        margin?: string;
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
    position?: string;
    zIndex?: string;
    alignItems?: string;
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
  // StyledImage
  // ==========================================================================
  StyledImage: {
    display?: string;
    justifyContent?: string;
    alignContent?: string;
    border?: string;
    borderRadius?: string;
    overflow?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;
      height?: string;
    };
    // ==========================================================================
    // ImageTag
    // ==========================================================================
    ImageTag: {
      layoutVariant: string;
      fit?: string;
      width: number;
      height: number;
      cropWidth?: number;
      cropHeight?: number;
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
    // StyledHeading: title
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color?: string;
      position?: string;
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
  // StyledCtaNavWrap
  // ==========================================================================
  StyledCtaNavWrap: {
    display?: string;
    justifyContent?: string;
    justifySelf?: string;
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
  // ==========================================================================
  // StyledGridNested
  // ==========================================================================
  StyledGridNested: {
    display?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;

      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;

      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;

      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;

      height?: string;
      colGap?: string;
      rowGap?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      margin?: string;
      padding?: string;

      height?: string;
      colGap?: string;
      rowGap?: string;
    };
  };
  // ==========================================================================
  // ==========================================================================
  // ==========================================================================
  // ==========================================================================
  // Styles for nested column text
  // ==========================================================================
  // ==========================================================================
  // StyledGridItem
  // ==========================================================================
  StyledGridItem: {
    display?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    overflow?: string;
    position?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    after: {
      content?: string;
      position?: string;
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
      background?: string;
      borderRadius?: string;
      overflow?: string;
      width?: string;
      height?: string;
      transform?: string;
      zIndex?: string;
    };
    before: {
      content?: string;
      position?: string;
      left?: string;
      right?: string;
      top?: string;
      bottom?: string;
      background?: string;
      borderRadius?: string;
      overflow?: string;
      width?: string;
      height?: string;
      transform?: string;
      zIndex?: string;
    };
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
      after: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
      before: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
      after: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
      before: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
      after: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
      before: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
      after: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
      before: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
      after: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
      before: {
        content?: string;
        position?: string;
        left?: string;
        right?: string;
        top?: string;
        bottom?: string;
        background?: string;
        borderRadius?: string;
        overflow?: string;
        width?: string;
        height?: string;
        transform?: string;
        zIndex?: string;
      };
    };
  };
  // ==========================================================================
  // StyledImageItem
  // ==========================================================================
  StyledImageItem: {
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
  // StyledSubTitleWrapItem
  // ==========================================================================
  StyledSubTitleWrapItem: {
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
    // StyledSubTitleItem?: subtitle
    // ==========================================================================
    StyledSubTitleItem: {
      variant: string;
      color?: string;
      textAlign?: string;
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
  // StyledHeadingWrapItem
  // ==========================================================================
  StyledHeadingWrapItem: {
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
    // StyledHeadingItem: title
    // ==========================================================================
    StyledHeadingItem: {
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
  // StyledArticleItem
  // ==========================================================================
  StyledArticleItem: {
    variant: string;
    color?: string;
    colorLink?: string;
    textDecoration?: string;
    textTransform?: string;
    colorLinkHover?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      textAlign?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // StyledCtaNavWrapItem
  // ==========================================================================
  StyledCtaNavWrapItem: {
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
    // StyledCtaNavItem
    // ==========================================================================
    StyledCtaNavItem: {
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

export type TextImgSectionTheme = Record<layoutVariant, TextImgSection>;
