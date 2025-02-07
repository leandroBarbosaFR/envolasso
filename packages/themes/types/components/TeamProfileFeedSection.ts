// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// TeamProfileFeedSection:
// ==========================================================================
export type TeamProfileFeedSection = {
  // ==========================================================================
  // StyledSection
  // ==========================================================================
  StyledSection: {
    background?: string;
    position?: string;
    clipPth?: string;
    overflow?: string;
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
    color?: string;
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
  };
  // ==========================================================================
  // StyledGrid
  // ==========================================================================
  StyledGrid: {
    position?: string;
    gridTemplateColumns?: string;
    withRowGap: boolean;
    withColGapp: boolean;
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
      };
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
  // ==========================================================================
  // StyledFeedGrid
  // ==========================================================================
  StyledFeedGrid: {
    position?: string;
    gridTemplateColumns?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    display?: string;
    alignItems?: string;
    zIndex?: string;
    pointerEvents?: string;
    userSelect?: string;
    mobile: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
      height?: string;
      colGap?: string;
      rowGap?: string;
      margin?: string;
      padding?: string;
    };
  };
};

export type TeamProfileFeedSectionTheme = Record<layoutVariant, TeamProfileFeedSection>;
