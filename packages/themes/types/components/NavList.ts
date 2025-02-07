// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type NavList = {
  // ==========================================================================
  // StyledHeading
  // ==========================================================================
  StyledHeading: {
    variant: string;
    as: string;
    color: string;
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
  // ==========================================================================
  // StyledNav
  // ==========================================================================
  StyledNav: {
    height: string;
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    mobile: {
      gridColumn: string;
      padding: string;
      gap: string;
    };
    mobileLarge: {
      gridColumn: string;
      padding: string;
      gap: string;
    };
    tablet: {
      gridColumn: string;
      padding: string;
      gap: string;
    };
    desktop: {
      gridColumn: string;
      padding: string;
      gap: string;
    };
    widescreen: {
      gridColumn: string;
      padding: string;
      gap: string;
    };
    // Button
    Button: {
      variant: string;
    };
    // StyledList
    // ==========================================================================
    StyledList: {
      mobile: {
        width: string;
        height: string;
        overflow: string;
        padding: string;
        margin: string;
      };
      mobileLarge: {
        width: string;
        height: string;
        overflow: string;
        padding: string;
        margin: string;
      };
      tablet: {
        width: string;
        height: string;
        overflow: string;
        padding: string;
        margin: string;
      };
      desktop: {
        width: string;
        height: string;
        overflow: string;
        padding: string;
        margin: string;
      };
      widescreen: {
        width: string;
        height: string;
        overflow: string;
        padding: string;
        margin: string;
      };
      // Custom Scroll
      // ==========================================================================
      overflowX?: string;
      overflowY?: string;
      padding?: string;
      //scrollbar
      scrollbarWidth?: string;
      scrollbarColor?: string;
      webkitScrollbarWidth?: string;
      webkitScrollbarHeight?: string;
      //scrollbar Track
      scrollbarTrackBgColor?: string;
      webkitScrollbarTrackWidth?: string;
      webkitScrollbarTrackHeight?: string;
      webkitScrollbarTrackBorderRadius?: string;
      //scrollbar thumb
      webkitScrollbarThumbBgColor?: string;
      webkitScrollbarThumbBorderRadius?: string;
      webkitScrollbarThumbBorder?: string;
      //scrollbar Hover
      // ==========================================================================
      hover: {
        pointerEvents?: string;
        //scrollbar
        scrollbarColor?: string;
        //scrollbar thumb
        webkitScrollbarThumbBgColor?: string;
      };
    };
    // StyledListItem
    // ==========================================================================
    StyledListItem: {
      mobile: {
        padding: string;
        margin: string;
        border?: string;
        borderTop?: string;
        borderRight?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRadius?: string;
      };
      mobileLarge: {
        padding: string;
        margin: string;
        border?: string;
        borderTop?: string;
        borderRight?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRadius?: string;
      };
      tablet: {
        padding: string;
        margin: string;
        border?: string;
        borderTop?: string;
        borderRight?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRadius?: string;
      };
      desktop: {
        padding: string;
        margin: string;
        border?: string;
        borderTop?: string;
        borderRight?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRadius?: string;
      };
      widescreen: {
        padding: string;
        margin: string;
        border?: string;
        borderTop?: string;
        borderRight?: string;
        borderBottom?: string;
        borderLeft?: string;
        borderRadius?: string;
      };
    };
    //StyledListNested
    // ==========================================================================
    StyledListNested: {
      transition: string;
      mobile: {
        padding: string;
        margin: string;
        liFirstChild: {
          padding: string;
          margin: string;
        };
        liLastChild: {
          padding: string;
          margin: string;
        };
      };
      mobileLarge: {
        padding: string;
        margin: string;
        liFirstChild: {
          padding: string;
          margin: string;
        };
        liLastChild: {
          padding: string;
          margin: string;
        };
      };
      tablet: {
        padding: string;
        margin: string;
        liFirstChild: {
          padding: string;
          margin: string;
        };
        liLastChild: {
          padding: string;
          margin: string;
        };
      };
      desktop: {
        padding: string;
        margin: string;
        liFirstChild: {
          padding: string;
          margin: string;
        };
        liLastChild: {
          padding: string;
          margin: string;
        };
      };
      widescreen: {
        padding: string;
        margin: string;
        liFirstChild: {
          padding: string;
          margin: string;
        };
        liLastChild: {
          padding: string;
          margin: string;
        };
      };
    };
  };
  // ==========================================================================
  // Button - internalLinkButton
  // ==========================================================================
  internalLinkButton: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - internalAccountLink
  // ==========================================================================
  internalAccountLink: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - externalLink
  // ==========================================================================
  externalLink: {
    variant: string;
    withText: boolean;
    iconPosition: string;
    withIcon: boolean;
    iconName: string;
  };
  // ==========================================================================
  // Button - navigationDropdown
  // ==========================================================================
  navigationDropdown: {
    variant: string;
    withText: boolean;
    withIcon: boolean;
    iconName: string;
    iconNameActive: string;
    iconPosition: string;
  };
  // ==========================================================================
  // Button - arrowLeftButton
  // ==========================================================================
  arrowLeftButton: {
    variant: string;
    iconName: string;
    iconPosition: string;
    withText: boolean;
    withIcon: boolean;
  };
  // ==========================================================================
  // Button - logoutButton
  // ==========================================================================
  logoutButton: {
    variant: string;
    withText: boolean;
    withIcon: boolean;
  };
  // ==========================================================================
  // Button - arrowRightButton
  // ==========================================================================
  arrowRightButton: {
    variant: string;
    iconName: string;
    withText: boolean;
    withIcon: boolean;
  };
};

export type NavListTheme = Record<layoutVariant, NavList>;
