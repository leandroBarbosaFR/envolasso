// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type GlobalErrorMessage = {
  // ==========================================================================
  // StyledErrorMessage
  // ==========================================================================
  StyledErrorMessageWrapper: {
    background?: string;
    position: string;
    padding: string;
    border: string;
    margin: string;
    borderRadius: string;
    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};

    button: {
      position: string;
      top: string;
      left: string;
      transform: string;
      margin: string;
      zIndex: string;
      backdropFilter: string;
      mobile: {};
      mobileLarge: {};
      tablet: {};
      desktop: {};
      widescreen: {};
    };
  };
  // ==========================================================================
  // StyledErrorMessage
  // ==========================================================================
  StyledErrorMessage: {
    color: string;
    letterSpacing: string;

    mobile: {};
    mobileLarge: {};
    tablet: {};
    desktop: {};
    widescreen: {};

    Button: {
      variant: string;
      withIcon: boolean;
      withText: boolean;
      iconName: string;
    };
  };
};

export type GlobalErrorMessageTheme = Record<layoutVariant, GlobalErrorMessage>;
