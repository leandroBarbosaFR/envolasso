import { colors } from '../variables';

const NavList = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  navDrawNavList: {
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `secondary`,
      as: `h3`,
      color: ``,
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
    // StyledNav
    // ==========================================================================
    StyledNav: {
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `start`,
      mobile: {
        gridColumn: ``,
        padding: `40px 30px 50px`,
        gap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      tablet: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      desktop: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      widescreen: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      // Button
      Button: {
        variant: `buttonLinkNav`
      },
      // StyledList
      // ==========================================================================
      StyledList: {
        mobile: {
          width: `100%`,
          height: `auto`,
          overflow: ``,
          padding: `10px 0`,
          margin: ``
        },
        mobileLarge: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        tablet: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        desktop: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        widescreen: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        // Custom Scroll
        // ==========================================================================
        overflowX: `hidden`,
        overflowY: `visible`,
        padding: ``,
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
      // StyledListItem
      // ==========================================================================
      StyledListItem: {
        mobile: {
          padding: `30px 0 0`,
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
      //StyledListNested
      // ==========================================================================
      StyledListNested: {
        transition: `0.3s ease-in-out`,
        mobile: {
          padding: `0 0 0 10px`,
          margin: `auto`,
          liFirstChild: {
            padding: `10px 0 0`,
            margin: ``
          },
          liLastChild: {
            padding: `10px 0 0`,
            margin: ``
          }
        },
        mobileLarge: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        tablet: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        desktop: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        widescreen: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        }
      }
    },
    // ==========================================================================
    // Button - internalLinkButton
    // ==========================================================================
    internalLinkButton: {
      variant: `buttonLinkNav`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - internalAccountLink
    // ==========================================================================
    internalAccountLink: {
      variant: `buttonLinkNav`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - externalLink
    // ==========================================================================
    externalLink: {
      variant: `buttonLinkNav`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - navigationDropdown
    // ==========================================================================
    navigationDropdown: {
      variant: `buttonLinkNav`,
      withText: true,
      withIcon: true,
      iconName: `reveal`,
      iconNameActive: `revealUp`,
      iconPosition: `right`
    },
    // ==========================================================================
    // Button - arrowLeftButton
    // ==========================================================================
    arrowLeftButton: {
      variant: `buttonLinkNav`,
      iconName: `arrowLeft`,
      iconPosition: `left`,
      withText: true,
      withIcon: true
    },
    // ==========================================================================
    // Button - logoutButton
    // ==========================================================================
    logoutButton: {
      variant: `buttonLinkNav`,
      withText: true,
      withIcon: false
    },
    // ==========================================================================
    // Button - arrowRightButton
    // ==========================================================================
    arrowRightButton: {
      variant: `buttonLinkNav`,
      iconName: `arrowRight`,
      withText: true,
      withIcon: true
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  footerTextColumnNavList: {
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledHeading: {
      variant: `secondary`,
      as: `h3`,
      color: colors.white,
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
    // StyledNav
    // ==========================================================================
    StyledNav: {
      height: `100%`,
      display: ``,
      flexDirection: ``,
      justifyContent: ``,
      alignItems: `start`,
      mobile: {
        gridColumn: `span 6`,
        padding: `0`,
        gap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      tablet: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      desktop: {
        gridColumn: `span 3`,
        padding: ``,
        gap: ``
      },
      widescreen: {
        gridColumn: ``,
        padding: ``,
        gap: ``
      },
      // Button
      Button: {
        variant: `buttonLinkPrimary`
      },
      // StyledList
      // ==========================================================================
      StyledList: {
        mobile: {
          width: `auto`,
          height: `auto`,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        mobileLarge: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        tablet: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        desktop: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        widescreen: {
          width: ``,
          height: ``,
          overflow: ``,
          padding: ``,
          margin: ``
        },
        // Custom Scroll
        // ==========================================================================
        // overflowX: `hidden`,
        // overflowY: `visible`,
        // pointerEvents: `none`,
        //scrollbar
        // scrollbarWidth: `thin`,
        // scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
        // webkitScrollbarWidth: `5px`,
        // webkitScrollbarHeight: `5px`,
        //scrollbar Track
        // scrollbarTrackBgColor: `rgba(0, 0, 0, 0)`,
        // webkitScrollbarTrackWidth: `5px`,
        // webkitScrollbarTrackHeight: `5px`,
        // webkitScrollbarTrackBorderRadius: `0`,
        //scrollbar thumb
        // webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0)`,
        // webkitScrollbarThumbBorderRadius: ``,
        // webkitScrollbarThumbBorder: ``,
        //scrollbar Hover
        // ==========================================================================
        hover: {
          // pointerEvents: `all`,
          //scrollbar
          // scrollbarColor: `rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.3)`,
          //scrollbar thumb
          // webkitScrollbarThumbBgColor: `rgba(0, 0, 0, 0.3)`
        }
      },
      // StyledListItem
      // ==========================================================================
      StyledListItem: {
        mobile: {
          padding: `0`,
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
      //StyledListNested
      // ==========================================================================
      StyledListNested: {
        transition: `0.3s ease-in-out`,
        mobile: {
          padding: `0 0 0 10px`,
          margin: `auto`,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        mobileLarge: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        tablet: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        desktop: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        },
        widescreen: {
          padding: ``,
          margin: ``,
          liFirstChild: {
            padding: ``,
            margin: ``
          },
          liLastChild: {
            padding: ``,
            margin: ``
          }
        }
      }
    },
    // ==========================================================================
    // Button - internalLinkButton
    // ==========================================================================
    internalLinkButton: {
      variant: `buttonLinkPrimary`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - internalAccountLink
    // ==========================================================================
    internalAccountLink: {
      variant: `buttonLinkPrimary`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - externalLink
    // ==========================================================================
    externalLink: {
      variant: `buttonLinkPrimary`,
      withText: true,
      iconPosition: ``,
      withIcon: false,
      iconName: ``
    },
    // ==========================================================================
    // Button - navigationDropdown
    // ==========================================================================
    navigationDropdown: {
      variant: `buttonLinkPrimary`,
      withText: true,
      withIcon: true,
      iconName: `reveal`,
      iconNameActive: `revealUp`,
      iconPosition: `right`
    },
    // ==========================================================================
    // Button - arrowLeftButton
    // ==========================================================================
    arrowLeftButton: {
      variant: `buttonLinkPrimary`,
      iconName: `arrowLeft`,
      iconPosition: `left`,
      withText: true,
      withIcon: true
    },
    // ==========================================================================
    // Button - logoutButton
    // ==========================================================================
    logoutButton: {
      variant: `buttonLinkPrimary`,
      withText: true,
      withIcon: false
    },
    // ==========================================================================
    // Button - arrowRightButton
    // ==========================================================================
    arrowRightButton: {
      variant: `buttonLinkPrimary`,
      iconName: `arrowRight`,
      withText: true,
      withIcon: true
    }
  }
};
export { NavList };
