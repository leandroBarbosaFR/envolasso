import { colors } from '../variables';

const ToolTip = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledToolTipArrow
    // ==========================================================================
    StyledToolTipArrow: {
      fill: `${colors.grey}`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    },
    // ==========================================================================
    // StyledToolTipContent
    // ==========================================================================
    StyledToolTipContent: {
      zIndex: `99999`,
      borderRadius: `4px`,
      padding: `5px`,
      fontSize: `15px`,
      color: `white`,
      background: `${colors.grey}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      userSelect: `none`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`,
      textTransform: `capitalize`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    }
  }
};
export { ToolTip };
