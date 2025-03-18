import { colors, breakpoints } from '../variables';

const SiteHeader = {
  // ============================================================================
  // layoutVariant
  // ============================================================================
  default: {
    // ==========================================================================
    // StyledHeader
    // ==========================================================================
    zIndex: `10`,
    isFluid: true,
    position: `fixed`,
    top: `0px`,
    width: `100%;`,
    transition: `0.3s ease-in-out`,
    backgroud: `${colors.transparent}`,
    // collapsedbackground: `${colors.white}`,
    borderRadius: ``,
    // boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
    // backdropFilter: `blur(10.9px)`,
    // webkitBackdropFilter: `blur(10.9px)`,
    // border: `1px solid rgba(255, 255, 255, 0.3)`,
    // toggledbackground: `${colors.white}`,
    borderRadiusCollapsed: ``,
    // boxShadowCollapsed: `0 4px 30px rgba(0, 0, 0, 0.1)`,
    // backdropFilterCollapsed: `blur(10.9px)`,
    // webkitBackdropFilterCollapsed: `blur(10.9px)`,
    // borderCollapsed: `1px solid rgba(255, 255, 255, 0.3)`,
    toggledBorderRadiusCollapsed: ``,
    // toggledBoxShadowCollapsed: `0 4px 30px rgba(0, 0, 0, 0.1)`,
    // toggledBackdropFilterCollapsed: `blur(10.9px)`,
    // toggledWebkitBackdropFilterCollapsed: `blur(10.9px)`,
    // toggledBorderCollapsed: `1px solid rgba(255, 255, 255, 0.3)`,

    mobile: {
      margin: ``,
      padding: `5px 10px`,
      collapsedMargin: ``,
      collapsedPadding: `5px 10px`
    },
    mobileLarge: {
      margin: ``,
      padding: ``,
      collapsedMargin: ``,
      collapsedPadding: ``
    },
    tablet: {
      margin: ``,
      padding: ``,
      collapsedMargin: ``,
      collapsedPadding: ``
    },
    desktop: {
      margin: ``,
      padding: `5px 25px`,
      collapsedMargin: ``,
      collapsedPadding: `5px 25px`
    },
    widescreen: {
      margin: ``,
      padding: ``,
      collapsedMargin: ``,
      collapsedPadding: ``
    },
    HeaderIconVariant: `HeaderButtonIcon`,
    HeaderIconInvertVariant: `HeaderButtonIconInvert`,
    BurgerIconVariant: `default`,
    BurgerIconInvertVariant: `alternative`,

    // ==========================================================================
    // StyledHeaderContainer
    // ==========================================================================
    StyledHeaderContainer: {
      // Header spcific styles
      // ==========================================================================
      display: 'flex',
      mobile: {
        alignItems: 'center',
        gap: '10px'
      },
      mobileLarge: {
        alignItems: 'center',
        gap: '10px'
      },
      tablet: {
        alignItems: 'center',
        gap: '20px'
      },
      desktop: {
        alignItems: 'center',
        gap: '20px'
      },
      widescreen: {
        alignItems: 'center',
        gap: '20px'
      },
      // ==========================================================================
      // StyledContainer overrides
      // ==========================================================================
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // Container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // Logo
    // ==========================================================================
    logo: {
      LogoName: `envolTextLogo`,
      LogoNameCollapsed: `envolTextLogo`,
      variant: `headerLogo`,
      variantCollapsed: `headerLogo`
    },
    // ==========================================================================
    // StyleNavWap
    // ==========================================================================
    StyleNavWap: {
      mobile: {
        padding: `0 0 5px 0`,
        margin: `0 0 -5px 0`
      },
      mobileLarge: {
        padding: ``,
        margin: ``
      },
      tablet: {
        padding: ``,
        margin: ``
      },
      desktop: {
        padding: ``,
        margin: ``
      },
      widescreen: {
        padding: ``,
        margin: ``
      },
      // Custom Scroll
      // ==========================================================================
      overflowX: `visible`,
      overflowY: `hidden`,
      pointerEvents: `none`,
      //scrollbar
      scrollbarWidth: `thin`,
      scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0)`,
      collapsedScrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0)`,
      webkitScrollbarWidth: `4px`,
      webkitScrollbarHeight: `4px`,
      //scrollbar Track
      scrollbarTrackBgColor: `rgba(26, 26, 26, 0)`,
      collapsedScrollbarTrackBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarTrackWidth: `4px`,
      webkitScrollbarTrackHeight: `4px`,
      webkitScrollbarTrackBorderRadius: `0`,
      //scrollbar thumb
      webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0)`,
      collapsedWebkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0)`,
      webkitScrollbarThumbBorderRadius: `0`,
      webkitScrollbarThumbBorder: `none`,
      hover: {
        pointerEvents: `all`,
        //scrollbar
        scrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0.1)`,
        collapsedScrollbarColor: `rgba(26, 26, 26, 0) rgba(26, 26, 26, 0.1)`,
        //scrollbar thumb
        webkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0.1)`,
        collapsedWebkitScrollbarThumbBgColor: `rgba(26, 26, 26, 0.1)`
      }
    },
    // ==========================================================================
    // Nav
    // ==========================================================================
    Nav: {
      variant: `siteNav`,
      variantCollapsed: `siteNavCollapsed`
    },
    // ==========================================================================
    // burgerNavToggle
    // ==========================================================================
    burgerNavToggle: 'default',
    // ==========================================================================
    // Nav draw
    // ==========================================================================
    NavDraw: {
      layoutVariant: `default`
    },
    // ==========================================================================
    // Nav draw activation breakpoints
    // ==========================================================================
    navDrawBreakpoint: breakpoints.desktop
  }
};
export { SiteHeader };
