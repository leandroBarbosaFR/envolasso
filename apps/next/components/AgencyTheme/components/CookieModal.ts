import { colors } from '../variables';

const CookieModal = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledCookieModal
    // ==========================================================================
    StyledCookieModal: {
      position: `fixed`,
      zIndex: `1000`,
      background: `${colors.black}`,
      border: `1px solid ${colors.greyMid}`,
      borderRadius: `6px`,
      mobile: {
        top: `unset`,
        right: `unset`,
        bottom: `20px`,
        left: `50%`,
        transform: `translate(-50%)`,
        padding: `10px 0 10px 0`,
        margin: `0 5px 0 5px`,
        width: `300px`
      },
      mobileLarge: {
        top: ``,
        right: ``,
        bottom: ``,
        padding: ``,
        margin: ``,
        width: `400px`
      },
      tablet: {
        top: `unset`,
        right: `unset`,
        bottom: `20px`,
        left: `50%`,
        transform: `translate(-50%)`,
        padding: `10px 0 10px 0`,
        margin: `0 5px 0 25px`,
        width: `450px`
      },
      desktop: {
        top: `100px`,
        right: `5px`,
        bottom: `unset`,
        transform: `unset`,
        left: `unset`,
        padding: `10px 0 10px 0`,
        margin: ``,
        width: `400px`
      },
      widescreen: {
        top: ``,
        right: ``,
        padding: ``,
        margin: ``,
        width: `475px`
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        margin: ``
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      borderBottom: `1px solid ${colors.greyMid}`,
      width: `100%`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: `15px 15px`
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
        gridColumn: `1/6`,
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
        color: `${colors.white}`,
        span: {},
        mobile: {
          margin: ``
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
      }
    },
    StyledButtonWrap: {
      mobile: {
        padding: `15px`
      },
      mobileLarge: {
        padding: ``
      },
      tablet: {
        padding: ``
      },
      desktop: {
        padding: ``
      },
      widescreen: {
        padding: ``
      },
      // ==========================================================================
      // ButtonAccept
      // ==========================================================================
      ButtonAccept: {
        variant: `buttonPrimary`,
        withIcon: false,
        withText: true
      }
    },
    // ==========================================================================
    // StyledButton
    // ==========================================================================
    StyledButton: {
      position: `absolute`,
      top: `12px`,
      right: `17px`,
      Button: {
        variant: `buttonIconPrimary`,
        withIcon: true,
        withText: false,
        iconName: `cookieIcon`
      }
    }
  }
};
export { CookieModal };
