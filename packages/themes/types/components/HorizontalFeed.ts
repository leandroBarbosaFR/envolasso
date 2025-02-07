// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'responsive' | `responsiveClientLogo` | `responsiveLogo` | `fullScreen` | string;

// ==========================================================================
// HorizontalFeed:
// ==========================================================================
export type HorizontalFeed = {
  // ==========================================================================
  // StyledFeedGrid
  // ==========================================================================
  StyledFeedGrid: {
    scrollBehaviour?: string;
    overflowStyle?: string;
    scrollbarWidth?: string;
    overflowYStyle?: string;
    scrollbarDisplay?: string;
    display?: string;
    justifyContent?: string;
    gridTemplateColumns?: string;
    gridAutoFlow?: string;
    overflowX?: string;
    overflowY?: string;
    overscrollBehaviorX?: string;
    scrollSnapType?: string;
    pointerEvents?: string;
    userSelect?: string;
    mobile: {
      gap?: string;
      margin?: string;
      padding?: string;
    };
    mobileLarge: {
      gap?: string;
      margin?: string;
      padding?: string;
    };
    tablet: {
      gap?: string;
      margin?: string;
      padding?: string;
    };
    desktop: {
      gap?: string;
      margin?: string;
      padding?: string;
    };
    widescreen: {
      gap?: string;
      margin?: string;
      padding?: string;
    };
  };
  // ==========================================================================
  // HorizontalScrollBtn
  // ==========================================================================
  HorizontalScrollBtn: {
    StyledBtnWrap: {
      display?: string;
      justifyContent?: string;
      alignItems?: string;
      zIndex?: string;
      pointerEvents?: string;
      mobile: {
        position?: string;
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        justifyContent?: string;
        alignItems?: string;
        gap?: string;
        margin?: string;
        padding?: string;
      };
      mobileLarge: {
        position?: string;
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        justifyContent?: string;
        alignItems?: string;
        gap?: string;
        margin?: string;
        padding?: string;
      };
      tablet: {
        position?: string;
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        justifyContent?: string;
        alignItems?: string;
        gap?: string;
        margin?: string;
        padding?: string;
      };
      desktop: {
        position?: string;
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        justifyContent?: string;
        alignItems?: string;
        gap?: string;
        margin?: string;
        padding?: string;
      };
      widescreen: {
        position?: string;
        top?: string;
        left?: string;
        bottom?: string;
        right?: string;
        justifyContent?: string;
        alignItems?: string;
        gap?: string;
        margin?: string;
        padding?: string;
      };
      // Buttons pointers event needed for click
      arrowButton: {
        pointerEvents?: string;
      };
      // Buttons Variants Left
      arrowLeftButton: {
        variant: string;
        iconName?: string;
        withIcon: boolean;
        withText: boolean;
      };
      // Buttons Variants Right
      arrowRightButton: {
        variant: string;
        iconName?: string;
        withIcon: boolean;
        withText: boolean;
      };
    };
  };
  // ==========================================================================
  // StyledFeedWrap
  // ==========================================================================
  StyledFeedWrap: {
    gridColumn?: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
  // ==========================================================================
  // StyledButtonPrevious
  // ==========================================================================
  PlaylistFeedItem: {
    layoutVariant: string;
  };
};

export type HorizontalFeedTheme = Record<layoutVariant, HorizontalFeed>;
