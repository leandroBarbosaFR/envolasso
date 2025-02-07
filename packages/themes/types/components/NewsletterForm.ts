// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// NewsletterForm:
// ==========================================================================
export type NewsletterForm = {
  // ==========================================================================
  // StyledHeadingWrap
  // ==========================================================================
  StyledHeadingWrap: {
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
  // ==========================================================================
  // StyledTextImgArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color: string;
    mobile: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    mobileLarge: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    tablet: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    desktop: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
    widescreen: {
      gridColumn: string;
      gridRow: string;
      margin: string;
    };
  };
  // ==========================================================================
  // StyledForm
  // ==========================================================================
  StyledForm: {
    display: string;
    flexDirection: string;
    gap: string;
    mobile: {};
    mobileLarge: {};
    tablet: {
      flexDirection: string;
    };
    desktop: {
      flexDirection: string;
    };
    widescreen: {
      flexDirection: string;
    };
    buttton: {
      variant: string;
    };
  };
  // ==========================================================================
  // StyledInput
  // ==========================================================================
  StyledInput: {
    /* Default input styles */
    color: string;
    fontFamily: string;
    fontWeight: string;
    textTransform: string;
    border: string;
    borderRadius: string;
    background: string;
    webkitAppearance: string;
    mozAppearance: string;
    width: string;
    webBoxShadow: string;
    boxShadow: string;
    backgroundColor: string;

    focus: {
      background: string;
      outline: string;
    };
    /*  Placeholder Colour */
    placeholder: {
      color: string;
      textTransform: string;
      fontFamily: string;
      fontWeight: string;
    };
    /* Change Autocomplete styles in Chrome*/
    autofill: {
      fillColor: string;
      webBoxShadow: string;
      boxShadow: string;
      transition: {
        backgroundColor: string;
      };
    };
    mobile: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    mobileLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    tablet: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    desktop: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    widescreen: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    buttton: {
      variant: string;
    };
  };
};

export type NewsletterFormTheme = Record<layoutVariant, NewsletterForm>;
