// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// CookieModal:
// ==========================================================================
export type CookieModal = {
  // ==========================================================================
  // StyledCookieModal
  // ==========================================================================
  StyledCookieModal: {
    position?: string;
    zIndex?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    mobile: {
      top: string;
      right: string;
      bottom?: string;
      left?: string;
      transform?: string;
      padding: string;
      margin: string;
      width: string;
    };
    mobileLarge: {
      top: string;
      right: string;
      bottom?: string;
      left?: string;
      transform?: string;
      padding: string;
      margin: string;
      width: string;
    };
    tablet: {
      top: string;
      right: string;
      bottom?: string;
      left?: string;
      transform?: string;
      padding: string;
      margin: string;
      width: string;
    };
    desktop: {
      top: string;
      right: string;
      bottom?: string;
      left?: string;
      transform?: string;
      padding: string;
      margin: string;
      width: string;
    };
    widescreen: {
      top: string;
      right: string;
      bottom?: string;
      left?: string;
      transform?: string;
      padding: string;
      margin: string;
      width: string;
    };
  };
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
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
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
    borderBottom?: string;
    width?: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
      padding: string;
    };
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: string;
      color: string;
      span: {
        color?: string;
      };
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
  };
  StyledButtonWrap: {
    padding?: string;
    mobile: {
      padding?: string;
    };
    mobileLarge: {
      padding?: string;
    };
    tablet: {
      padding?: string;
    };
    desktop: {
      padding?: string;
    };
    widescreen: {
      padding?: string;
    };
    // ==========================================================================
    // ButtonAccept
    // ==========================================================================
    ButtonAccept: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
    };
  };
  // ==========================================================================
  // StyledButton
  // ==========================================================================
  StyledButton: {
    position: string;
    top: string;
    right: string;
    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
      iconName: string;
    };
  };
};

export type CookieModalTheme = Record<layoutVariant, CookieModal>;
