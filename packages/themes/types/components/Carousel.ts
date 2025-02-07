// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'heroCarousel' | string;

// ==========================================================================
// Carousel:
// ==========================================================================
export type Carousel = {
  SlideCarousel: {
    duration: number;
  };
  FadeCarousel: {
    duration: number;
  };
  // ==========================================================================
  // StyledCarouselWrap
  // ==========================================================================
  StyledCarouselWrap: {
    position?: string;
    zIndex?: string;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    mobile: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      overflow?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      overflow?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      overflow?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      overflow?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      overflow?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // NavArrows
  // ==========================================================================
  NavArrows: {
    // StyledNav
    // ==========================================================================
    StyledNav: {
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
    };
    // StyledNavContainer
    // ==========================================================================
    StyledNavContainer: {
      color?: string;
      isFluid: boolean;
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
    // StyledNavGrid
    // ==========================================================================
    StyledNavGrid: {
      withRowGap: boolean;
      withColGapp: boolean;
      gridTemplateColumns?: string;
      alignItems?: string;
      zIndex?: string;
      display?: string;
      mobile: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      mobileLarge: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      tablet: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      desktop: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      widescreen: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
    };
    // StyledNavWrap
    // ==========================================================================
    StyledNavWrap: {
      display?: string;
      mobile: {
        gap?: string;
        gridColumn?: string;
        justifyContent?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      mobileLarge: {
        gap?: string;
        gridColumn?: string;
        justifyContent?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      tablet: {
        gap?: string;
        gridColumn?: string;
        justifyContent?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      desktop: {
        gap?: string;
        gridColumn?: string;
        justifyContent?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      widescreen: {
        gap?: string;
        gridColumn?: string;
        justifyContent?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      // Button style
      // ==========================================================================
      arrowLeftButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
      arrowRightButton: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName?: string;
      };
    };
  };
  // ==========================================================================
  // NavThumbs
  // ==========================================================================
  NavThumbs: {
    // StyledNavThumbs
    // ==========================================================================
    StyledNavThumbs: {
      display?: string;
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
    };
    // StyledNavThumbsContainer
    // ==========================================================================
    StyledNavThumbsContainer: {
      color?: string;
      isFluid: boolean;
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
      // ==========================================================================
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
    // StyledNavThumbsGrid
    // ==========================================================================
    StyledNavThumbsGrid: {
      withRowGap: boolean;
      withColGapp: boolean;
      gridTemplateColumns?: string;
      alignItems?: string;
      zIndex?: string;
      display?: string;
      mobile: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      mobileLarge: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      tablet: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      desktop: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
      widescreen: {
        colGap?: string;
        rowGap?: string;
        margin?: string;
        padding?: string;
      };
    };
    // StyledNavThumbsWrap
    // ==========================================================================
    StyledNavThumbsWrap: {
      display?: string;
      width?: string;
      mobile: {
        justifyContent?: string;
        gap?: string;
        gridColumn?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      mobileLarge: {
        justifyContent?: string;
        gap?: string;
        gridColumn?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      tablet: {
        justifyContent?: string;
        gap?: string;
        gridColumn?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      desktop: {
        justifyContent?: string;
        gap?: string;
        gridColumn?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      widescreen: {
        justifyContent?: string;
        gap?: string;
        gridColumn?: string;
        alignContent?: string;
        alignItems?: string;
        flexWrap?: string;
        flexDirection?: string;
      };
      // Button style
      Button: {
        variant: string;
      };
    };
    // ThumbsItem
    // ==========================================================================
    ThumbsItem: {
      cursor?: string;
      background?: string;
      backgroundHover?: string;
      backgroundActive?: string;
      border?: string;
      borderHover?: string;
      borderActive?: string;
      mobile: {
        height?: string;
        width?: string;
        borderRadius?: string;
        margin?: string;
        padding?: string;
      };
      mobileLarge: {
        height?: string;
        width?: string;
        borderRadius?: string;
        margin?: string;
        padding?: string;
      };
      tablet: {
        height?: string;
        width?: string;
        borderRadius?: string;
        margin?: string;
        padding?: string;
      };
      desktop: {
        height?: string;
        width?: string;
        borderRadius?: string;
        margin?: string;
        padding?: string;
      };
      widescreen: {
        height?: string;
        width?: string;
        borderRadius?: string;
        margin?: string;
        padding?: string;
      };
    };
  };
  // ==========================================================================
  // StyledSearchBarWrap
  // ==========================================================================
  StyledSearchBarWrap: {
    mobile: {
      gridColumn?: string;
      padding?: string;
    };
    mobileLarge: {
      gridColumn?: string;
      padding?: string;
    };
    tablet: {
      gridColumn?: string;
      padding?: string;
    };
    desktop: {
      gridColumn?: string;
      padding?: string;
    };
    widescreen: {
      gridColumn?: string;
      padding?: string;
    };
  };
};

export type CarouselTheme = Record<layoutVariant, Carousel>;
