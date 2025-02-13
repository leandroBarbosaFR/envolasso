import { colors } from '../variables';

const ContactForm = {
  // ==========================================================================
  // layoutVariant: default
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `secondary`,
      color: `${colors.black}`,
      mobile: {
        margin: `0 0 10px 0`
      },
      mobileLarge: {
        margin: ``
      },
      tablet: {
        margin: ``
      },
      desktop: {
        margin: ``
      },
      widescreen: {
        margin: ``
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: `${colors.black}`,
      mobile: {
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        margin: ``,
        padding: ``
      },
      tablet: {
        margin: ``,
        padding: ``
      },
      desktop: {
        margin: ``,
        padding: ``
      },
      widescreen: {
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFormGrid
    // ==========================================================================
    StyledFormGrid: {
      withRowGap: true,
      withColGapp: true,
      display: `grid`,
      gridTemplateColumns: ``,
      mobile: {
        height: ``,
        colGap: ``,
        rowGap: `25px`
      },
      mobileLarge: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledForm
    // ==========================================================================
    StyledForm: {
      width: `100%`
    },
    // ==========================================================================
    // StyledFormFields
    // ==========================================================================
    StyledFormFields: {
      display: ``,
      position: `relative`,
      background: colors.transparent,
      mobile: {
        gridColumn: `span 12`,
        margin: ``,
        padding: ``,
        border: ``
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      tablet: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      desktop: {
        gridColumn: `1/9`,
        margin: ``,
        padding: ``,
        border: ``
      },
      widescreen: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      // ==========================================================================
      FormInputMixed: {
        variant: `defaultInverted`
      },
      // ==========================================================================
      FormInputSelect: {
        variant: `defaultInverted`
      },
      // ==========================================================================
      FormInputTextarea: {
        variant: `defaultInverted`
      }
    },
    // ==========================================================================
    // StyledFormSubmitFields
    // ==========================================================================
    StyledFormSubmitFields: {
      display: `flex`,
      gap: `15px`,
      position: ``,
      background: colors.transparent,
      margin: `0 10px 0 auto`,
      mobile: {
        gridColumn: `span 12`,
        margin: ``,
        padding: ``,
        border: ``
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      tablet: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      desktop: {
        gridColumn: `1/9`,
        margin: ``,
        padding: ``,
        border: ``
      },
      widescreen: {
        gridColumn: ``,
        margin: ``,
        padding: ``,
        border: ``
      },
      // ==========================================================================
      // submitButton
      // ==========================================================================
      submitButton: {
        variant: `buttonBluePrimary`
      }
    }
  }
};

export { ContactForm };
