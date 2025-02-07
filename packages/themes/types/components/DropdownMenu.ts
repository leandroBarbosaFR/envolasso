// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | 'postBody' | string;

// ==========================================================================
// DropdownMenu:
// ==========================================================================
export type DropdownMenu = {
  // ==========================================================================
  // StyledDropdownMenu
  // ==========================================================================
  StyledMenu: {
    // Portal content
    maxHeight: string;
    overflowY: string;
    zIndex: string;
    borderRadius: string;
    border: string;
    background: string;
    boxShadow: string;
    animationDuration: string;
    animationTimingFunction: string;
    willChange: string;
    mobile: {
      width: string;
      padding: string;
    };
    mobileLarge: {
      width: string;
      padding: string;
    };
    tablet: {
      width: string;
      padding: string;
    };
    desktop: {
      width: string;
      padding: string;
    };
    widescreen: {
      width: string;
      padding: string;
    };
    // Portal Arrow
    StyledArrow: {
      fill: string;
      mobile: {
        height: string;
        width: string;
      };
      mobileLarge: {
        height: string;
        width: string;
      };
      tablet: {
        height: string;
        width: string;
      };
      desktop: {
        height: string;
        width: string;
      };
      widescreen: {
        height: string;
        width: string;
      };
    };
  };
  // ==========================================================================
  // StyledMenuList
  // ==========================================================================
  StyledMenuList: {
    display: string;
    flexDirection: string;
    height: string;
    width: string;
    padding: string;
    mobile: {
      gap: string;
    };
    mobileLarge: {
      gap: string;
    };
    tablet: {
      gap: string;
    };
    desktop: {
      gap: string;
    };
    widescreen: {
      gap: string;
    };
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
  // ==========================================================================
  // StyledDropdownItem
  // ==========================================================================
  StyledDropdownItem: {
    cursor: string;
    background: string;
    dataHighlighted: {
      // background: colors.greenDark
    };
    mobile: {
      borderRadius: string;
      margin: string;
      padding: string;
      dataHighlighted: {
        margin: string;
        padding: string;
      };
    };
    mobileLarge: {
      borderRadius: string;
      margin: string;
      padding: string;
      dataHighlighted: {
        margin: string;
        padding: string;
      };
    };
    tablet: {
      borderRadius: string;
      margin: string;
      padding: string;
      dataHighlighted: {
        margin: string;
        padding: string;
      };
    };
    desktop: {
      borderRadius: string;
      margin: string;
      padding: string;
      dataHighlighted: {
        margin: string;
        padding: string;
      };
    };
    widescreen: {
      borderRadius: string;
      margin: string;
      padding: string;
      dataHighlighted: {
        margin: string;
        padding: string;
      };
    };
    // ButtonLink
    ButtonLink: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
      iconPosition: string;
      iconName: string;
    };
    // Button
    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
      iconPosition: string;
      iconName: string;
    };
  };
  StyledPortal: {
    zIndex: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};
  };
};

export type DropdownMenuTheme = Record<layoutVariant, DropdownMenu>;
