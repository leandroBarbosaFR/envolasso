// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// Accordion:
// ==========================================================================
export type LoginScreen = {
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledForm: {
    mobile: {
      margin?: string;
    };
    mobileLarge: {
      margin?: string;
    };
    tablet: {
      margin?: string;
    };
    desktop: {
      margin?: string;
    };
    widescreen: {
      margin?: string;
    };
  };
};

export type LoginScreenTheme = Record<layoutVariant, LoginScreen>;
