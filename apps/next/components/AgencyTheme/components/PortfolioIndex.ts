import { colors } from '../variables';

const PortfolioIndex = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledPortfolioFeedItem
    // ==========================================================================
    StyledPortfolioFeedItem: {
      mobile: {
        gridColumn: `span 6`
      },
      mobileLarge: {
        gridColumn: `span 6`
      },
      tablet: {
        gridColumn: `span 4`
      },
      desktop: {
        gridColumn: `span 4`
      },
      widescreen: {
        gridColumn: `span 4`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      isFluid: true,
      // Fluid Container
      fluidContainer: {
        marginLeft: ``,
        marginRight: ``,
        width: ``,
        maxWidth: ``,
        mobile: {
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
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
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          width: ``,
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
      alignItems: `center`,
      mobile: {
        gridTemplateColumns: ``,
        colGap: ``,
        rowGap: ``,
        margin: `0 0 30px`,
        padding: ``
      },
      mobileLarge: {
        gridTemplateColumns: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridTemplateColumns: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridTemplateColumns: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridTemplateColumns: ``,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledNotFound
    // ==========================================================================
    StyledNotFound: {
      variant: `secondary`,
      color: `${colors.white}`,
      margin: `0 auto`,
      mobile: {
        margin: `0 0 10px`,
        gridColumn: ` 1/13`
      },
      mobileLarge: {
        margin: ``
      },
      tablet: {
        margin: `0 0 15px`
      },
      desktop: {
        margin: ``
      },
      widescreen: {
        margin: `0 0 8px`
      }
    },
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `none`,
      mobile: {
        height: `auto`,
        margin: `0`,
        padding: `80px 0 15px`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `80px 0 20px`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `0 0 25px`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `100px 0 30px`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `150px 0 30px`
      }
    }
  }
};

export { PortfolioIndex };
