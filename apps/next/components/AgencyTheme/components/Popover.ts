import { colors } from '../variables';

const Popover = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledContent
    // ==========================================================================
    StyledContent: {
      zIndex: `12`,
      borderRadius: `4px 4px 4px 4px`,
      background: `${colors.grey}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      transform: `rotate(0deg)`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`,
      opacity: `0.95`,
      position: `relative`,
      right: `10px`,
      sideOffset: 0,
      after: {
        content: `''`,
        position: `absolute`,
        top: `100%`,
        left: `10px`,
        borderWidth: `7px`,
        borderStyle: `solid`,
        borderColor: ` ${colors.grey} transparent transparent transparent`,
        opacity: `0.95`
      },
      mobile: {
        padding: `24px 24px 10px 24px`,
        margin: ``
      },
      mobileLarge: {},
      tablet: {
        padding: `5px 0px 5px 0px`
      },
      desktop: {
        padding: `10px 0px 10px 0px`
      },
      widescreen: {
        padding: `20px 0px 20px 0px`
      }
    },
    // ==========================================================================
    // StyledPopoverItem
    // ==========================================================================
    StyledPopoverItem: {
      cursor: `pointer`,
      textAlign: `center`,
      mobile: {},
      mobileLarge: {},
      tablet: {
        padding: `5px 15px`
      },
      desktop: {
        padding: `5px 25px`
      },
      widescreen: {
        padding: `6px 35px`
      }
    },
    // ==========================================================================
    // StyledPopoverOption
    // ==========================================================================
    StyledPopoverOption: {
      color: `white`,
      textTransform: `uppercase`,
      mobile: {},
      mobileLarge: {},
      tablet: {
        fontSize: `9px`,
        lineHeight: `9px`,
        letterSpacing: `-0.04px`
      },
      desktop: {
        fontSize: `12px`,
        lineHeight: `12px`,
        letterSpacing: `-0.05px`
      },
      widescreen: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      }
    },
    // ==========================================================================
    // StyledTriggerWrap
    // ==========================================================================
    StyledTriggerWrap: {
      width: `fit-content`
    }
  }
};

export { Popover };
