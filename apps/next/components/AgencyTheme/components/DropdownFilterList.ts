
const DropdownFilterList = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledDropdownFilterList
    // ==========================================================================
    StyledDropdownFilterList: {
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
      // Button
      Button: {
        variant: `DropdownButtonLink`,
        withIcon: false,
        withText: true,
        iconPosition: '',
        iconName: ''
      }
    }
  }
};

export { DropdownFilterList };
