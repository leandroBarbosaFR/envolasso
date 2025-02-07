// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type Dialog = {
  // ==========================================================================
  // StyledContent
  // ==========================================================================
  StyledContent: {
    justifyContent: string;
    alignItems: string;
    zIndex: string;
    borderRadius: string;
    background: string;
    boxShadow: string;
    animationDuration: string;
    position: string;
    top: string;
    left: string;
    bottom: string;
    right: string;
    transform: string;
    overflow: string;

    mobile: {
      width: string;
      minWidth: string;
      height: string;
      maxHeight: string;
      padding: string;
      margin: string;
      display: string;
    };
    mobileLarge: {
      width: string;
      minWidth: string;
      height: string;
      maxHeight: string;
      padding: string;
      margin: string;
      display?: string;
    };
    tablet: {
      width: string;
      minWidth: string;
      height: string;
      maxHeight: string;
      padding: string;
      margin: string;
      display?: string;
    };
    desktop: {
      width: string;
      minWidth: string;
      height: string;
      maxHeight: string;
      padding: string;
      margin: string;
      display?: string;
    };
    widescreen: {
      width: string;
      minWidth: string;
      height: string;
      maxHeight: string;
      padding: string;
      margin: string;
      display?: string;
    };
    // Cloase button styles
    StyledClose: {
      position: string;
      zIndex: number;
      mobile: {
        top: string;
        right: string;
        left: string;
        bottom: string;
      };
      mobileLarge: {
        top: string;
        right: string;
        left: string;
        bottom: string;
      };
      tablet: {
        top: string;
        right: string;
        left: string;
        bottom: string;
      };
      desktop: {
        top: string;
        right: string;
        left: string;
        bottom: string;
      };
      widescreen: {
        top: string;
        right: string;
        left: string;
        bottom: string;
      };
      // Close button Variant
      Button: {
        variant: string;
        withIcon: boolean;
        withText: boolean;
        iconName: string;
      };
    };
  };
  // ==========================================================================
  // StyledContentInner
  // ==========================================================================
  StyledContentInner: {
    borderRadius: string;
    background: string;
    boxShadow: string;
    position: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    transform: string;

    mobile: {
      width: string;
      minWidth: string;
      maxWidth: string;
      maxHeight: string;
      height: string;
      padding: string;
    };
    mobileLarge: {
      width: string;
      minWidth: string;
      maxWidth: string;
      maxHeight: string;
      height: string;
      padding: string;
    };
    tablet: {
      width: string;
      minWidth: string;
      maxWidth: string;
      maxHeight: string;
      height: string;
      padding: string;
    };
    desktop: {
      width: string;
      minWidth: string;
      maxWidth: string;
      maxHeight: string;
      height: string;
      padding: string;
    };
    widescreen: {
      width: string;
      minWidth: string;
      maxWidth: string;
      maxHeight: string;
      height: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledOverlay
  // ==========================================================================
  StyledOverlay: {
    zIndex: number;
    background: string;
    backdropFilter: string;
    position: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
  };
  // ==========================================================================
  // StyledVerticalScroll
  // ==========================================================================
  StyledVerticalScroll: {
    width: string;
    maxHeight: string;
    height: string;
    padding: string;
    // Custom Scroll
    // ==========================================================================
    overflowX: string;
    overflowY: string;
    // pointerEvents: `none`,
    //scrollbar
    scrollbarWidth: string;
    scrollbarColor: string;
    webkitScrollbarWidth: string;
    webkitScrollbarHeight: string;
    //scrollbar Track
    scrollbarTrackBgColor: string;
    webkitScrollbarTrackWidth: string;
    webkitScrollbarTrackHeight: string;
    webkitScrollbarTrackBorderRadius: string;
    //scrollbar thumb
    webkitScrollbarThumbBgColor: string;
    webkitScrollbarThumbBorderRadius: string;
    webkitScrollbarThumbBorder: string;
    //scrollbar Hover
    // ==========================================================================
    hover: {
      pointerEvents: string;
      //scrollbar
      scrollbarColor: string;
      //scrollbar thumb
      webkitScrollbarThumbBgColor: string;
    };
  };
};

export type DialogTheme = Record<layoutVariant, Dialog>;
