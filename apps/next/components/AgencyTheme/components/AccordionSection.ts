import { colors } from '../variables';

const AccordionSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // config
    // ==========================================================================
    config: {
      isAccordionGroupVisible: false
    },
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.black}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFeedContainer
    // ==========================================================================
    StyledContainer: {
      position: ``,
      color: ``,
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      },
      // Container
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          width: ``,
          height: ``,
          paddingLeft: ``,
          paddingRight: ``
        }
      }
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      display: `grid`,
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      mobile: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        height: ``,
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        height: ``,
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
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
        variant: `primary`,
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
    // ==========================================================================
    // StyledBodycopyWrap
    // ==========================================================================
    StyledBodycopyWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
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
      // StyledBodycopy
      // ==========================================================================
      StyledBodycopy: {
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
      }
    },
    // ==========================================================================
    // StyledAccordionGroup
    // ==========================================================================
    StyledAccordionGroup: {
      height: ` max-content`,
      display: `flex`,
      flexWrap: `wrap`,
      mobile: {
        gridColumn: `1/13`,
        margin: `0 0 10px 0`,
        gap: `5px`
      },
      mobileLarge: {
        margin: `0 0 20px 0`
      },
      tablet: {
        gridColumn: `1/4`,
        margin: `0`
      },
      desktop: {
        gridColumn: `1/5`
      },
      widescreen: {
        gridColumn: `1/4`
      },
      Button: {
        variant: `buttonPrimary`
      }
    },
    // ==========================================================================
    // StyledAccordion
    // ==========================================================================
    StyledAccordion: {
      AccordionItem: {
        variant: `default`,
        buttonVariant: `accordionTrigger`,
        withIcon: true,
        withText: true,
        iconName: `arrowRightTrigger`
      },
      mobile: {
        gridColumn: `1/13`
      },
      mobileLarge: {
        gridColumn: `1/13`
      },
      tablet: {
        gridColumn: `1/13`
      },
      desktop: {
        gridColumn: `1/13`
      },
      widescreen: {
        gridColumn: `1/8`
      }
    },
    // ==========================================================================
    // StyledAccordionItemBodyWrap
    // ==========================================================================
    StyledAccordionItemBodyWrap: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      mobile: {
        padding: ``,
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
    }
  }
};
export { AccordionSection };
