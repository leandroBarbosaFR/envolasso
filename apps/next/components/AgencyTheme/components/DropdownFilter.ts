import { colors } from '../variables';

const DropdownFilter = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledMenu
    // ==========================================================================
    StyledTriggerWrap: {
      Button: {
        variant: `buttonRegWhiteBg`,
        withIcon: false,
        withText: true
      }
    },
    // ==========================================================================
    // StyledMenu
    // ==========================================================================
    StyledMenu: {
      // Portal content
      maxHeight: `50vh`,
      overflowY: `visible`,
      display: `flex`,
      zIndex: `300`,
      borderRadius: `6px`,
      background: colors.green,
      boxShadow: `0px 3px 6px 3px rgb(209 209 209 / 3%)`,
      animationDuration: `400ms`,
      mobile: {
        width: `254px`,
        padding: `15px`
      },
      mobileLarge: {
        width: ``
      },
      tablet: {
        width: ``,
        padding: `20px`
      },
      desktop: {
        width: ``,
        padding: ``
      },
      widescreen: {
        width: ``,
        padding: ``
      },
      // Portal Arrow
      StyledArrow: {
        fill: colors.green,
        mobile: {
          height: `15px`,
          width: `25px`
        },
        mobileLarge: {
          height: ``,
          width: ``
        },
        tablet: {
          height: ``,
          width: ``
        },
        desktop: {
          height: ``,
          width: ``
        },
        widescreen: {
          height: ``,
          width: ``
        }
      }
    },
    // ==========================================================================
    // StyledMenuList
    // ==========================================================================
    StyledMenuList: {
      display: `flex`,
      flexDirection: `column`,
      mobile: {
        gap: `15px`
      },
      mobileLarge: {
        gap: ``
      },
      tablet: {
        gap: ``
      },
      desktop: {
        gap: ``
      },
      widescreen: {
        gap: ``
      }
    },
    // ==========================================================================
    // StyledDropdownItem
    // ==========================================================================
    StyledDropdownItem: {
      cursor: `pointer`,
      background: ``,
      dataHighlighted: {
        // background: colors.grey
      },
      mobile: {
        borderRadius: `0`,
        margin: ``,
        padding: `0`,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      mobileLarge: {
        borderRadius: `0`,
        margin: `0`,
        padding: `0`,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      tablet: {
        borderRadius: `0`,
        margin: `0`,
        padding: `0`,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      desktop: {
        borderRadius: `0`,
        margin: `0`,
        padding: `0`,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      widescreen: {
        borderRadius: `0`,
        margin: `0`,
        padding: `0`,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      // ButtonLink
      ButtonLink: {
        variant: `DropdownButtonLink`,
        withIcon: false,
        withText: true,
        iconPosition: '',
        iconName: ''
      },
      // Button (log-out)
      Button: {
        variant: `buttonRegLightBg`,
        withIcon: false,
        withText: true,
        iconPosition: '',
        iconName: ''
      }
    }
  }
};
export { DropdownFilter };
