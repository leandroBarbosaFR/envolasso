import { colors } from '../variables';

// ==========================================================================
const NewsletterForm = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `secondary`,
        color: colors.black,
        mobile: {
          margin: `0 0 10px`
        },
        mobileLarge: {
          margin: `0 0 15px`
        },
        tablet: {
          margin: `0 0 20px`
        },
        desktop: {
          margin: `0 0 30px`
        },
        widescreen: {
          margin: `0 0 35px`
        }
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
        gridColumn: ``,
        gridRow: ``
      },
      mobileLarge: {
        margin: ``,
        gridColumn: ``,
        gridRow: ``
      },
      tablet: {
        margin: ``,
        gridColumn: ``,
        gridRow: ``
      },
      desktop: {
        margin: ``,
        gridColumn: ``,
        gridRow: ``
      },
      widescreen: {
        margin: ``,
        gridColumn: ``,
        gridRow: ``
      }
    },
    // ==========================================================================
    // StyledForm
    // ==========================================================================
    StyledForm: {
      display: `flex`,
      flexDirection: `column`,
      gap: `10px`,
      mobile: {},
      mobileLarge: {},
      tablet: {
        flexDirection: `row`
      },
      desktop: {
        flexDirection: ``
      },
      widescreen: {
        flexDirection: ``
      },
      buttton: {
        variant: `buttonWhitePrimary`
      }
    },
    // ==========================================================================
    // StyledInput
    // ==========================================================================
    StyledInput: {
      /* Default input styles */
      color: `${colors.black}`,
      fontFamily: ``,
      fontWeight: ``,
      textTransform: `uppercase`,
      border: `1px solid ${colors.white}`,
      borderRadius: `4px`,
      background: `${colors.white}`,
      webkitAppearance: `none`,
      mozAppearance: `textfield`,
      width: `100%`,
      webBoxShadow: ``,
      boxShadow: ``,
      backgroundColor: ``,

      focus: {
        background: `white`,
        outline: `0`
      },
      /*  Placeholder Colour */
      placeholder: {
        color: `${colors.black}`,
        textTransform: `capitalize`,
        fontFamily: ``,
        fontWeight: ``
      },
      /* Change Autocomplete styles in Chrome*/
      autofill: {
        fillColor: `${colors.black}`,
        webBoxShadow: `rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset`,
        boxShadow: `rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset`,
        transition: {
          backgroundColor: `5000s ease-in-out 0s`
        }
      },
      mobile: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        padding: `4px 15px`
      },
      mobileLarge: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        padding: ``
      },
      tablet: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        padding: `8px 20px`
      },
      desktop: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        padding: ``
      },
      widescreen: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``,
        padding: `10px 25px`
      },
      buttton: {
        variant: `buttonWhitePrimary`
      }
    }
  }
};

export { NewsletterForm };
