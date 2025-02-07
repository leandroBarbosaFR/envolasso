// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// DropdownFilter:
// ==========================================================================
export type DropdownFilter = {
  // ==========================================================================
  // StyledMenu
  // ==========================================================================
  StyledTriggerWrap: {
    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
    };
  };
  // ==========================================================================
  // StyledMenu
  // ==========================================================================
  StyledMenu: {
    // Portal content
    maxHeight: string;
    overflowY: string;
    display: string;
    zIndex: string;
    border?: string;
    borderRadius: string;
    background: string;
    boxShadow: string;
    animationDuration: string;
    mobile: {
      width: string;
      padding?: string;
    };
    mobileLarge: {
      width: string;
      padding?: string;
    };
    tablet: {
      width: string;
      padding?: string;
    };
    desktop: {
      width: string;
      padding?: string;
    };
    widescreen: {
      width: string;
      padding?: string;
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
  };
  // ==========================================================================
  // StyledDropdownItem
  // ==========================================================================
  StyledDropdownItem: {
    cursor: string;
    background: string;
    dataHighlighted: {
      // background: colors.grey
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
    // Button (log-out)
    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
      iconPosition: string;
      iconName: string;
    };
  };
};

export type DropdownFilterTheme = Record<layoutVariant, DropdownFilter>;
