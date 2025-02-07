// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'responsive' | `responsiveClientLogo` | `responsiveLogo` | `fullScreen` | string;

// ==========================================================================
// HomeContentCarouselItem:
// ==========================================================================
export type HomeContentCarouselItem = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  // ==========================================================================
  // StyledCarouselItemx
  // ==========================================================================
  StyledCarouselItem: {
    position?: string;
    overflow?: string;
    width?: string;
    height?: string;
    objectFit?: string;
  };
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    width?: string;
  };
  ImageTag: {
    layoutVariant: string;
    objectFit?: string;
    userSelect?: string;
    pointerEvents?: string;
  };
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    display?: string;
    alignContent?: string;
    height?: string;
    flexWrap?: string;
    isFluid: boolean;
    position?: string;
    zIndex?: string;
    mobile: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      margin?: string;
      padding?: string;
    };
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
  // StyledItemInner
  // ==========================================================================
  StyledGrid: {
    display?: string;
    withRowGap: boolean;
    withColGapp: boolean;
    gridTemplateColumns?: string;
    alignItems?: string;
    zIndex?: string;
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
  // StyledContentImage
  // ==========================================================================
  StyledContentImage: {
    mobile: {
      gridColumn?: string;
      gridRow?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      gridRow?: string;
    };
    tablet: {
      gridColumn?: string;
      gridRow?: string;
    };
    desktop: {
      gridColumn?: string;
      gridRow?: string;
    };
    widescreen: {
      gridColumn?: string;
      gridRow?: string;
    };
    // ImageTag
    // ==========================================================================
    ImageTag: {
      layoutVariant: string;
      width: number;
      height: number;
      placeholder: string;
    };
  };
  // ==========================================================================
  // StyledSubTitle
  // ==========================================================================
  StyledSubTitle: {
    variant: string;
    color?: string;
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
    span: {
      color?: string;
    };
  };
  // ==========================================================================
  // StyledHeading
  // ==========================================================================
  StyledHeading: {
    variant: string;
    color?: string;
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
    span: {
      color?: string;
    };
  };
  // ==========================================================================
  // StyledExcerpt
  // ==========================================================================
  StyledExcerpt: {
    variant: string;
    color?: string;
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
  };
};

export type HomeContentCarouselItemTheme = Record<layoutVariant, HomeContentCarouselItem>;
