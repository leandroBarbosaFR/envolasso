import { colors } from '../variables';

const Toast = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  success: {
    // ==========================================================================
    // StyledButton
    // ==========================================================================
    StyledButton: {
      all: `unset`,
      position: `absolute`,
      top: `50%`,
      left: `-10px`,
      transform: `translateY(-50%)`,
      background: `${colors.white}`,
      border: `4px solid ${colors.green}`,
      borderRadius: `100%`,
      width: `25px`,
      height: `25px`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      mobile: {
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        borderRadius: `100%`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},
      buttonSvg: {
        fill: ``,
        height: ``,
        width: ``
      }
    },
    // ==========================================================================
    // StyledContent
    // ==========================================================================
    StyledContent: {
      overflow: `hidden`,
      width: `190px`,
      height: `60px`,
      position: `absolute`,
      padding: `0px 10px 0px 30px`,
      background: `${colors.green}`,
      borderRadius: `10px`,
      mobile: {
        position: ``
      },
      mobileLarge: {
        position: ``
      },
      tablet: {
        position: ``
      },
      desktop: {
        position: ``
      },
      widescreen: {
        position: ``
      }
    },
    // ==========================================================================
    // StyledRoot
    // ==========================================================================
    StyledRoot: {
      background: `${colors.green}`,
      margin: `0 0 10px 0`,
      width: `190px`,
      position: `relative`,
      height: `60px`,
      dataStateOpen: {
        animation: `150ms cubic-bezier(0.16, 1, 0.3, 1)`
      },
      dataStateClosed: {
        animation: `100ms ease-in`
      },
      dataSwipeMove: {
        transform: `translateX(var(--radix-toast-swipe-move-x))`
      },
      dataSwipeCancel: {
        transform: `translateX(0)`,
        transition: `transform 200ms ease-out`
      },
      dataSwipeEnd: {
        animation: `swipeOut 100ms ease-out`
      },
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // StyledToastDescription
    // ==========================================================================
    StyledToastDescription: {
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      StyledDescription: {
        textTransform: ``,
        color: `${colors.white}`,
        fontSize: `13px`,
        lineHeight: `15px`,
        letterSpacing: `-0.05px`,
        fontWeight: `700`
      }
    },
    // ==========================================================================
    // StyledToastList
    // ==========================================================================
    StyledToastList: {
      zIndex: `999999`,
      position: `fixed`,
      bottom: `0`,
      right: `0`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    }
  },
  error: {
    // ==========================================================================
    // StyledButton
    // ==========================================================================
    StyledButton: {
      all: `unset`,
      position: `absolute`,
      top: `50%`,
      left: `-10px`,
      transform: `translateY(-50%)`,
      background: `${colors.white}`,
      border: `4px solid ${colors.green}`,
      borderRadius: `100%`,
      width: `25px`,
      height: `25px`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      mobile: {
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        borderRadius: `100%`
      },
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {},
      buttonSvg: {
        fill: ``,
        height: ``,
        width: ``
      }
    },
    // ==========================================================================
    // StyledContent
    // ==========================================================================
    StyledContent: {
      overflow: `hidden`,
      width: `190px`,
      height: `60px`,
      position: `absolute`,
      padding: `0px 10px 0px 30px`,
      background: `${colors.red}`,
      borderRadius: `10px`,
      mobile: {
        position: ``
      },
      mobileLarge: {
        position: ``
      },
      tablet: {
        position: ``
      },
      desktop: {
        position: ``
      },
      widescreen: {
        position: ``
      }
    },
    // ==========================================================================
    // StyledRoot
    // ==========================================================================
    StyledRoot: {
      background: `${colors.red}`,
      width: `190px`,
      height: `60px`,
      position: `relative`,
      margin: `0 0 10px 0`,
      dataStateOpen: {
        animation: `150ms cubic-bezier(0.16, 1, 0.3, 1)`
      },
      dataStateClosed: {
        animation: `100ms ease-in`
      },
      dataSwipeMove: {
        transform: `translateX(var(--radix-toast-swipe-move-x))`
      },
      dataSwipeCancel: {
        transform: `translateX(0)`,
        transition: `transform 200ms ease-out`
      },
      dataSwipeEnd: {
        animation: `swipeOut 100ms ease-out`
      },

      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // StyledToastDescription
    // ==========================================================================
    StyledToastDescription: {
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      StyledDescription: {
        textTransform: ``,
        color: `${colors.white}`,
        fontSize: `13px`,
        lineHeight: `15px`,
        letterSpacing: `-0.05px`,
        fontWeight: `700`
      }
    },
    // ==========================================================================
    // StyledToastList
    // ==========================================================================
    StyledToastList: {
      zIndex: `999999`,
      position: `fixed`,
      bottom: `0`,
      right: `0`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    }
  }
};
export { Toast };
