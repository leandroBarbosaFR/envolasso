// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// ContactForm:
// ==========================================================================
export type ContactForm = {
  // ==========================================================================
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
  // ==========================================================================
  // StyledArticle
  // ==========================================================================
  StyledArticle: {
    variant: string;
    color: string;
    mobile: {
      margin: string;
      padding: string;
    };
    mobileLarge: {
      margin: string;
      padding: string;
    };
    tablet: {
      margin: string;
      padding: string;
    };
    desktop: {
      margin: string;
      padding: string;
    };
    widescreen: {
      margin: string;
      padding: string;
    };
  };
  // ==========================================================================
  // StyledFormGrid
  // ==========================================================================
  StyledFormGrid: {
    withRowGap: boolean;
    withColGapp: boolean;
    display: string;
    gridTemplateColumns: string;
    mobile: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    mobileLarge: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    tablet: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    desktop: {
      height: string;
      colGap: string;
      rowGap: string;
    };
    widescreen: {
      height: string;
      colGap: string;
      rowGap: string;
    };
  };
  // ==========================================================================
  // StyledForm
  // ==========================================================================
  StyledForm: {
    width: string;
  };
  // ==========================================================================
  // StyledFormFields
  // ==========================================================================
  StyledFormFields: {
    display: string;
    position: string;
    background: string;
    mobile: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    mobileLarge: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    tablet: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    desktop: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    widescreen: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    // ==========================================================================
    FormInputMixed: {
      variant: string;
    };
    // ==========================================================================
    FormInputSelect: {
      variant: string;
    };
    // ==========================================================================
    FormInputTextarea: {
      variant: string;
    };
  };
  // ==========================================================================
  // StyledFormSubmitFields
  // ==========================================================================
  StyledFormSubmitFields: {
    display: string;
    gap: string;
    position: string;
    background: string;
    margin: string;
    mobile: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    mobileLarge: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    tablet: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    desktop: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    widescreen: {
      gridColumn: string;
      margin: string;
      padding: string;
      border: string;
    };
    // ==========================================================================
    // submitButton
    // ==========================================================================
    submitButton: {
      variant: string;
    };
  };
};

export type ContactFormTheme = Record<layoutVariant, ContactForm>;
