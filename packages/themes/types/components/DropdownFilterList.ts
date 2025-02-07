// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// DropdownFilterListTheme:
// ==========================================================================
export type DropdownFilterList = {
  // ==========================================================================
  // StyledDropdownFilterList
  // ==========================================================================
  StyledDropdownFilterList: {
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
      color?: string;
      background?: string;
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
};

export type DropdownFilterListTheme = Record<layoutVariant, DropdownFilterList>;
