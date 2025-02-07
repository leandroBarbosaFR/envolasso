const DropdownMenuList = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledDropdownItem
    // ==========================================================================
    StyledDropdownItem: {
      cursor: `pointer`,
      background: ``,
      dataHighlighted: {
        color: ``,
        backgroundColor: ``
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
    // ==========================================================================
    // StyledDropdownMenuList
    // ==========================================================================
    StyledDropdownMenuList: {
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
    }
  }
};

export { DropdownMenuList };
