import { colors } from '../variables';

const AddressList = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `0`
      }
    },
    // ==========================================================================
    // StyledFeedContainer
    // ==========================================================================
    StyledContainer: {
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: `0`,
        marginRight: `0`,
        width: ``,
        maxWidth: ``,
        mobile: {
          paddingLeft: `0`,
          paddingRight: `0`
        },
        mobileLarge: {
          paddingLeft: `0`,
          paddingRight: `0`
        },
        tablet: {
          paddingLeft: `0`,
          paddingRight: `0`
        },
        desktop: {
          paddingLeft: `0`,
          paddingRight: `0`
        },
        widescreen: {
          paddingLeft: `0`,
          paddingRight: `0`
        }
      },
      // Container
      container: {
        marginLeft: `0`,
        marginRight: `0`,
        mobile: {
          width: ``,
          paddingLeft: `0`,
          paddingRight: `0`
        },
        mobileLarge: {
          width: ``,
          paddingLeft: `0`,
          paddingRight: `0`
        },
        tablet: {
          width: ``,
          paddingLeft: `0`,
          paddingRight: `0`
        },
        desktop: {
          width: ``,
          paddingLeft: `0`,
          paddingRight: `0`
        },
        widescreen: {
          width: ``,
          paddingLeft: `0`,
          paddingRight: `0`
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
        gridRow: `1`,
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
        gridColumn: ``,
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
        color: colors.black,
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
        },
        span: {
          color: `${colors.black}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: colors.black,
      lastOfType: {
        margin: `0`,
        padding: `0`
      },
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      }
    },
    // ==========================================================================
    // StyledBodycopy
    // ==========================================================================
    StyledAddressList: {
      display: `grid`,
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        // nested grid
        colGap: ``,
        rowGap: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        // nested grid
        colGap: ``,
        rowGap: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        // nested grid
        colGap: ``,
        rowGap: ``
      },
      desktop: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        // nested grid
        colGap: ``,
        rowGap: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        // nested grid
        colGap: ``,
        rowGap: ``
      }
    },
    // ==========================================================================
    // StyledAddress
    // ==========================================================================
    StyledAddress: {
      mobile: {
        gridColumn: `span 4`,
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
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledHeading
    // ==========================================================================
    StyledAddressTitle: {
      variant: `primary`,
      color: colors.black,
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
      },
      span: {
        color: `${colors.black}`
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledAddressArticle: {
      variant: `bodyCopy`,
      color: colors.black,
      lastOfType: {
        margin: `0`,
        padding: `0`
      },
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``
      }
    }
  }
};
export { AddressList };
