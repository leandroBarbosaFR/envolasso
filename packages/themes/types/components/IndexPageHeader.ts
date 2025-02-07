// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// IndexPageHeader:
// ==========================================================================
export type IndexPageHeader = {
  // ==========================================================================
  // StyledIndexPageHeader:
  // ==========================================================================
  StyledIndexPageHeader: {};
  // ==========================================================================
  // StyledContainer
  // ==========================================================================
  StyledContainer: {
    color?: string;
    isFluid?: boolean;
    // Fluid Container
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
    // Container
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
    display?: string;
    withRowGap?: boolean;
    withColGapp?: boolean;
    gridTemplateColumns?: string;
    alignItems?: string;
    zIndex?: number;
    mobile: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    tablet: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    desktop: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      colGap: string;
      rowGap: string;
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledImageItem
  // ==========================================================================
  StyledImage: {
    display?: string;
    justifyContent?: string;
    alignContent?: string;
    zIndex?: string;
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
      fill: boolean;
      priority: boolean;
      placeholder: string;
      width: number;
      height: number;
      cropWidth: number;
      cropHeight: number;
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
      span: {
        color?: string;
      };
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
  // Carousel?: slideCarousel
  // ==========================================================================
  SlideCarousel: {
    layoutVariant: string;
    withLoop: boolean;
    withArrowButton: boolean;
    withThumbnails: boolean;
    autoSlide: boolean;
  };
  // ==========================================================================
  // Carousel: FadeCarousel
  // ==========================================================================
  FadeCarousel: {
    layoutVariant: string;
    withLoop: boolean;
    withArrowButton: boolean;
    withThumbnails: boolean;
    autoSlide: boolean;
  };
};

export type IndexPageHeaderTheme = Record<layoutVariant, IndexPageHeader>;
