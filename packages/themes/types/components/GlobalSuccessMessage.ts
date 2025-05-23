// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

export type GlobalSuccessMessage = {
  // ==========================================================================
  // StyledErrorMessage
  // ==========================================================================
  StyledSuccessMessageWrapper: {
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
  StyledSuccessMessage: {
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

export type GlobalSuccessMessageTheme = Record<layoutVariant, GlobalSuccessMessage>;
