// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// HeroSectionContentCarousel:
// ==========================================================================
export type HeroSectionContentCarousel = {
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
      right?: string;
      pointerEvents?: string;
      background?: string;
    };
  };
  // ==========================================================================
  // StyledHeroSection
  // ==========================================================================
  StyledHeroSection: {
    position?: string;
    height?: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
  // ==========================================================================
  // Carousel?: SlideCarousel
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

export type HeroSectionContentCarouselTheme = Record<layoutVariant, HeroSectionContentCarousel>;
