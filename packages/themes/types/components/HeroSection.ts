// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type HeroSection = {
  // ==========================================================================
  // Section Styles
  // ==========================================================================
  StyledSection: {
    display?: string;
    alignItems?: string;
    position?: string;
    overflow?: string;
    background?: string;
    mobile: {
      height?: string;
      minHeight?: string;
      margin?: string;
      padding?: string;
      Before: {
        height?: string;
        width?: string;
      };
      After: {
        height?: string;
        width?: string;
      };
    };
    mobileLarge: {
      height?: string;
      minHeight?: string;
      margin?: string;
      padding?: string;
      Before: {
        height?: string;
        width?: string;
      };
      After: {
        height?: string;
        width?: string;
      };
    };
    tablet: {
      height?: string;
      minHeight?: string;
      margin?: string;
      padding?: string;
      Before: {
        height?: string;
        width?: string;
      };
      After: {
        height?: string;
        width?: string;
      };
    };
    desktop: {
      height?: string;
      minHeight?: string;
      margin?: string;
      padding?: string;
      Before: {
        height?: string;
        width?: string;
      };
      After: {
        height?: string;
        width?: string;
      };
    };
    widescreen: {
      height?: string;
      minHeight?: string;
      margin?: string;
      padding?: string;
      Before: {
        height?: string;
        width?: string;
      };
      After: {
        height?: string;
        width?: string;
      };
    };
    // Before
    // ==========================================================================
    Before: {
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      left?: string;
      pointerEvents?: string;
      background?: string;
    };
    // After
    // ==========================================================================
    After: {
      zIndex?: string;
      content?: string;
      height?: string;
      width?: string;
      position?: string;
      top?: string;
      bottom?: string;
      right?: string;
      pointerEvents?: string;
      background?: string;
    };
  };
  // ==========================================================================
  // StyledArrowDown
  // ==========================================================================
  StyledArrowDown: {
    zIndex?: string;
    position?: string;
    isArrowVisible: boolean;
    mobile: {
      bottom?: string;
      left?: string;
      transform?: string;
    };
    mobileLarge: {
      bottom?: string;
      left?: string;
      transform?: string;
    };
    tablet: {
      bottom?: string;
      left?: string;
      transform?: string;
    };
    desktop: {
      bottom?: string;
      left?: string;
      transform?: string;
    };
    widescreen: {
      bottom?: string;
      left?: string;
      transform?: string;
    };
    Button: {
      variant: string;
      withText: boolean;
      withIcon: boolean;
      iconName?: string;
    };
  };
  // ==========================================================================
  // Static Carousel
  // ==========================================================================
  // ==========================================================================
  // StyledImage
  // ==========================================================================
  StyledImage: {
    position?: string;
    zIndex?: string;
    mobile: {
      height?: string;
      width?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      img: {
        objectFit?: string;
      };
    };
    mobileLarge: {
      height?: string;
      width?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      img: {
        objectFit?: string;
      };
    };
    tablet: {
      height?: string;
      width?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      img: {
        objectFit?: string;
      };
    };
    desktop: {
      height?: string;
      width?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      img: {
        objectFit?: string;
      };
    };
    widescreen: {
      height?: string;
      width?: string;
      top?: string;
      bottom?: string;
      right?: string;
      left?: string;
      img: {
        objectFit?: string;
      };
    };
  };
  // ==========================================================================
  // StyledMediaWrapper - Video
  // ==========================================================================
  StyledMediaWrapper: {
    position?: string;
    zIndex?: string;
    height?: string;
    width?: string;
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    pointerEvents?: string;
    overflow?: string;
    backgroundRepeat?: string;
    backgroundAttachment?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
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
  };
  // ==========================================================================
  // Carousel
  // ==========================================================================
  // ==========================================================================
  // FadeCarousel
  // ==========================================================================

  // ==========================================================================
  // Content overlay
  // ==========================================================================
  // ==========================================================================
  // StyledFeedContainer
  // ==========================================================================
  StyledContainer: {
    position?: string;
    zIndex?: string;
    color?: string;
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
    textAlign?: string;
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
    // StyledSubTitle?: subtitle
    // ==========================================================================
    StyledSubTitle: {
      variant: string;
      color?: string;
      backgroundClip?: string;
      background?: string;
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
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    textAlign?: string;
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
    // StyledHeading: title
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
    textAlign?: string;
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
  // StyledCtaNavWrap
  // ==========================================================================
  StyledSearchBarWrap: {
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
    // SearchBar
    // ==========================================================================
    SearchBar: {
      layoutVariant: string;
      placeholder: string;
      isPredictiveSearch: boolean;
      isCustomSearchResult: boolean;
      isSelectMenuRedirect: boolean;
      isSwitchSearchVisible?: boolean;
      isSwitchSearchPromptVisible?: boolean;
    };
    // ==========================================================================
    // SearchBarDialog
    // ==========================================================================
    SearchBarDialog: {
      layoutVariant: string;
      SearchBar: {
        layoutVariant: string;
        placeholder: string;
        isPredictiveSearch: boolean;
        isCustomSearchResult: boolean;
        isSelectMenuRedirect: boolean;
        isSwitchSearchVisible?: boolean;
        isSwitchSearchPromptVisible?: boolean;
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
export type HeroSectionTheme = Record<layoutVariant, HeroSection>;
