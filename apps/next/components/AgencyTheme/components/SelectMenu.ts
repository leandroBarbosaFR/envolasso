import { colors } from '../variables';

const SelectMenu = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // AgencyIcons
    // ==========================================================================
    AgencyIcons: {
      layoutVariant: `default`
    },
    // ==========================================================================
    // StyledTrigger
    // ==========================================================================
    StyledTrigger: {
      all: `unset`
    },
    // ==========================================================================
    // StyledTriggerWrap
    // ==========================================================================
    StyledTriggerWrap: {
      textTransform: `capitalize`,
      cursor: `pointer`,
      display: `flex`,
      alignItems: `center`,
      width: `max-content`,
      mobile: {
        gap: `6px`,
        fontSize: `13px`,
        lineHeight: `13px`,
        letterSpacing: `-0.05px`,
        borderRadius: ``,
        border: ``,
        padding: `10px`,
        margin: ``,
        background: `${colors.white}`,
        colorActive: `${colors.white}`,
        color: `${colors.grey}`,
        borderHover: ``,
        colorHover: ``,
        backgroundHover: ``
      },
      mobileLarge: {
        gap: ``,
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      tablet: {
        gap: ``,
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      desktop: {
        gap: ``,
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      widescreen: {
        gap: ``,
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      }
    },
    // ==========================================================================
    // StyledSelectIcon
    // ==========================================================================
    StyledSelectIcon: {
      height: `12px`,
      width: `14px`,
      display: `flex`,
      mobile: {
        svg: {
          fill: `${colors.grey}`,
          height: `100%`,
          width: `100%`,
          display: `block`
        }
      },
      mobileLarge: {
        svg: {
          fill: ``,
          height: ``,
          width: ``
        }
      },
      tablet: {
        svg: {
          fill: ``,
          height: ``,
          width: ``
        }
      },
      desktop: {
        svg: {
          fill: ``,
          height: ``,
          width: ``
        }
      },
      widescreen: {
        svg: {
          fill: ``,
          height: ``,
          width: ``
        }
      }
    },
    // ==========================================================================
    // styledContent
    // ==========================================================================
    StyledContent: {
      overflow: `hidden`,
      background: `${colors.grey}`,
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`,
      open: {
        animation: ``
      },
      mobile: {
        border: ``,
        borderTop: ``,
        borderRight: ``,
        borderBottom: ``,
        borderLeft: ``,
        borderRadius: ``,
        padding: `10px 5px`,
        margin: ``
      },
      mobileLarge: {
        padding: ``,
        margin: ``
      },
      tablet: {
        padding: ``,
        margin: ``
      },
      desktop: {
        padding: ``,
        margin: ``
      },
      widescreen: {
        padding: ``,
        margin: ``
      }
    },
    // ==========================================================================
    // StyledItem
    // ==========================================================================
    StyledItem: {
      textTransform: `capitalize`,
      cursor: `pointer`,
      color: `${colors.white}`,
      colorActive: `${colors.white}`,

      mobile: {
        fontSize: `13px`,
        lineHeight: `13px`,
        letterSpacing: ``
      },
      mobileLarge: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      tablet: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      desktop: {
        fontSize: ``,
        lineHeight: ``,
        letterSpacing: ``
      },
      widescreen: {
        fontSize: `14px`,
        lineHeight: `14px`,
        letterSpacing: ``
      },

      dataDisabled: {
        color: `${colors.red}`,
        pointerEvents: `none`
      },
      dataHighlighted: {
        color: `${colors.grey}`
      }
    },
    // ==========================================================================
    // StyledPortal
    // ==========================================================================
    StyledPortal: {
      zIndex: 11
    },
    // ==========================================================================
    // StyledSelectMenu
    // ==========================================================================
    StyledSelectMenu: {},
    // ==========================================================================
    // styleSelectValue
    // ==========================================================================
    StyleSelectValue: {},
    // ==========================================================================
    // StyledSelectViewport
    // ==========================================================================
    StyledSelectViewport: {
      display: `flex`,
      flexDirection: `column`,

      mobile: {
        padding: `5px 15px 10px 15px`,
        gap: `6px`
      },
      mobileLarge: {
        padding: ``,
        gap: ``
      },
      tablet: {
        padding: ``,
        gap: `8px`
      },
      desktop: {
        padding: ``,
        gap: `10px`
      },
      widescreen: {
        padding: ``,
        gap: ``
      }
    }
  }
};

export { SelectMenu };
