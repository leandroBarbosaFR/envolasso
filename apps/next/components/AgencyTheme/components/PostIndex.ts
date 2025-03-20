import { colors } from '../variables';

const PostIndex = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
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
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      // Props settings
      isFluid: true,
      // fluidContainer
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
      // container
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
      gridTemplateColumns: ``,
      alignItems: `flex-start`,
      mobile: {
        gridTemplateColumns: `repeat(12,1fr)`,
        colGap: ``,
        rowGap: ``,
        margin: `0 0 30px`,
        padding: ``
      },
      mobileLarge: {
        gridTemplateColumns: `repeat(12,1fr)`,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridTemplateColumns: `repeat(12,1fr)`,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridTemplateColumns: `repeat(12,1fr)`,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridTemplateColumns: `repeat(15,1fr)`,
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledNotFound
    // ==========================================================================
    // Typeography variants
    StyledNotFound: {
      variant: `secondary`,
      color: `${colors.white}`,
      margin: `0 auto`,
      mobile: {
        gridColumn: ` 1/13`,
        margin: `0 0 10px`
      },
      mobileLarge: {
        gridColumn: ``,
        margin: ``
      },
      tablet: {
        gridColumn: ``,
        margin: `0 0 15px`
      },
      desktop: {
        gridColumn: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: ``,
        margin: `0 0 8px`
      }
    }
  }
};
export { PostIndex };
