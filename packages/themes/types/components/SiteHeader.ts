// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type Variant = 'headerLogo' | 'footerLogo';

export type SiteHeader = {
  // ==========================================================================
  // StyledHeader
  // ==========================================================================
  zIndex: string;
  isFluid: boolean;
  position: string;
  top: string;
  width: string;
  transition: string;
  backgroud: string;
  collapsedbackground: string;
  toggledbackground: string;
  HeaderIconVariant: string;
  HeaderIconInvertVariant: string;
  BurgerIconVariant: string;
  BurgerIconInvertVariant: string;
  borderRadius?: string;
  boxShadow?: string;
  backdropFilter?: string;
  webkitBackdropFilter?: string;
  border?: string;
  borderRadiusCollapsed?: string;
  boxShadowCollapsed?: string;
  backdropFilterCollapsed?: string;
  webkitBackdropFilterCollapsed?: string;
  borderCollapsed?: string;
  toggledBorderRadius?: string;
  toggledBoxShadow?: string;
  toggledBackdropFilter?: string;
  toggledWebkitBackdropFilter?: string;
  toggledBorder?: string;
  mobile: {
    margin: string;
    padding: string;
    collapsedMargin: string;
    collapsedPadding: string;
  };
  mobileLarge: {
    margin: string;
    padding: string;
    collapsedMargin: string;
    collapsedPadding: string;
  };
  tablet: {
    margin: string;
    padding: string;
    collapsedMargin: string;
    collapsedPadding: string;
  };
  desktop: {
    margin: string;
    padding: string;
    collapsedMargin: string;
    collapsedPadding: string;
  };
  widescreen: {
    margin: string;
    padding: string;
    collapsedMargin: string;
    collapsedPadding: string;
  };

  // ==========================================================================
  // StyledHeaderContainer
  // ==========================================================================
  StyledHeaderContainer: {
    // Header spcific styles
    // ==========================================================================
    display: string;
    mobile: {
      alignItems: string;
      gap: string;
    };
    mobileLarge: {
      alignItems: string;
      gap: string;
    };
    tablet: {
      alignItems: string;
      gap: string;
    };
    desktop: {
      alignItems: string;
      gap: string;
    };
    widescreen: {
      alignItems: string;
      gap: string;
    };
    // ==========================================================================
    // StyledContainer overides
    // ==========================================================================
    isFluid: boolean;
    // Fluid Container
    fluidContainer: {
      marginLeft: string;
      marginRight: string;
      width: string;
      maxWidth: string;
      mobile: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
    // Container
    container: {
      marginLeft: string;
      marginRight: string;
      mobile: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      mobileLarge: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      tablet: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      desktop: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
      widescreen: {
        width: string;
        height: string;
        paddingLeft: string;
        paddingRight: string;
      };
    };
  };
  // ==========================================================================
  // Logo
  // ==========================================================================
  logo: {
    LogoName: string;
    LogoNameCollapsed: string;
    variant: string;
  };
  // ==========================================================================
  // StyleNavWap
  // ==========================================================================
  StyleNavWap: {
    mobile: {
      padding: string;
      margin: string;
    };
    mobileLarge: {
      padding: string;
      margin: string;
    };
    tablet: {
      padding: string;
      margin: string;
    };
    desktop: {
      padding: string;
      margin: string;
    };
    widescreen: {
      padding: string;
      margin: string;
    };
    // Custom Scroll
    // ==========================================================================
    overflowX: string;
    overflowY: string;
    pointerEvents: string;
    //scrollbar
    scrollbarWidth: string;
    scrollbarColor: string;
    collapsedScrollbarColor: string;
    webkitScrollbarWidth: string;
    webkitScrollbarHeight: string;
    //scrollbar Track
    scrollbarTrackBgColor: string;
    collapsedScrollbarTrackBgColor: string;
    webkitScrollbarTrackWidth: string;
    webkitScrollbarTrackHeight: string;
    webkitScrollbarTrackBorderRadius: string;
    //scrollbar thumb
    webkitScrollbarThumbBgColor: string;
    collapsedWebkitScrollbarThumbBgColor: string;
    webkitScrollbarThumbBorderRadius: string;
    webkitScrollbarThumbBorder: string;
    hover: {
      pointerEvents: string;
      //scrollbar
      scrollbarColor: string;
      collapsedScrollbarColor: string;
      //scrollbar thumb
      webkitScrollbarThumbBgColor: string;
      collapsedWebkitScrollbarThumbBgColor: string;
    };
  };
  // ==========================================================================
  // Nav
  // ==========================================================================
  Nav: {
    variant: string;
    variantCollapsed: string;
  };
  // ==========================================================================
  // burgerNavToggle
  // ==========================================================================
  burgerNavToggle: string;
  // ==========================================================================
  // Nav draw
  // ==========================================================================
  NavDraw: {
    layoutVariant: string;
  };
  // ==========================================================================
  // Nav draw activation breakpoints
  // ==========================================================================
  navDrawBreakpoint: number;
};

export type SiteHeaderTheme = Record<layoutVariant, SiteHeader>;
