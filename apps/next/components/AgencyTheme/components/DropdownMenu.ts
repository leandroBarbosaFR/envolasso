import { colors } from '../variables';

const DropdownMenu = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledDropdownMenu
    // ==========================================================================
    StyledMenu: {
      // Portal content
      maxHeight: `50vh`,
      overflowY: `visible`,
      zIndex: `1000`,
      borderRadius: `0`,
      border: `1px solid ${colors.blueLight}`,
      background: colors.blueLight,
      boxShadow: `0px 3px 6px 3px rgb(209 209 209 / 3%)`,
      animationDuration: `400ms`,
      animationTimingFunction: `cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: `transform, opacity`,
      mobile: {
        width: `150px`,
        padding: `20px`
      },
      mobileLarge: {
        width: ``,
        padding: `30px`
      },
      tablet: {
        width: `254px`,
        padding: ``
      },
      desktop: {
        width: `254px`,
        padding: ``
      },
      widescreen: {
        width: `254px`,
        padding: ``
      },
      // Portal Arrow
      StyledArrow: {
        fill: colors.blueLight,
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
      height: `auto`,
      width: `100%`,
      padding: `3px`,
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
      },
      // Custom Scroll
      // ==========================================================================
      overflowX: `hidden`,
      overflowY: `visible`,
      // pointerEvents: `none`,
      //scrollbar
      scrollbarWidth: `thin`,
      scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
      webkitScrollbarWidth: `5px`,
      webkitScrollbarHeight: `5px`,
      //scrollbar Track
      scrollbarTrackBgColor: `rgba(0, 0, 0, 0)`,
      webkitScrollbarTrackWidth: `5px`,
      webkitScrollbarTrackHeight: `5px`,
      webkitScrollbarTrackBorderRadius: `0`,
      //scrollbar thumb
      webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0)`,
      webkitScrollbarThumbBorderRadius: `0`,
      webkitScrollbarThumbBorder: `none`,
      //scrollbar Hover
      // ==========================================================================
      hover: {
        pointerEvents: `all`,
        //scrollbar
        scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.3)`,
        //scrollbar thumb
        webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0.3)`
      }
    },
    // ==========================================================================
    // StyledDropdownItem
    // ==========================================================================
    StyledDropdownItem: {
      cursor: `pointer`,
      background: ``,
      dataHighlighted: {
        // background: colors.greenDark
      },
      mobile: {
        borderRadius: ``,
        margin: ``,
        padding: ``,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      mobileLarge: {
        borderRadius: ``,
        margin: ``,
        padding: ``,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      tablet: {
        borderRadius: ``,
        margin: ``,
        padding: ``,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      desktop: {
        borderRadius: ``,
        margin: ``,
        padding: ``,
        dataHighlighted: {
          margin: ``,
          padding: ``
        }
      },
      widescreen: {
        borderRadius: ``,
        margin: ``,
        padding: ``,
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
      // Button
      Button: {
        variant: `DropdownButtonLink`,
        withIcon: false,
        withText: true,
        iconPosition: '',
        iconName: ''
      }
    },
    StyledPortal: {
      zIndex: `10`,
      mobile: {},
      mobileLarge: {},
      tablet: {},
      desktop: {},
      widescreen: {}
    }
  }
};
export { DropdownMenu };
