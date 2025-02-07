import { colors } from '../variables';

const CtaNavSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: colors.transparent,
      mobile: {
        height: ``,
        margin: `20px 0 0 0`,
        padding: `0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: `30px 0 0 0`,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: `50px 0 0 0`,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      color: `inherit`,
      isFluid: true,
      // fluidContainer
      // ==========================================================================
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
      // ==========================================================================
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
      alignItems: `center`,
      mobile: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        colGap: ``,
        rowGap: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `flex`,
      alignContent: `center`,
      mobile: {
        gap: `10px`,
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gap: ``,
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gap: ``,
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gap: ``,
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gap: ``,
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // CtaNav
      // ==========================================================================
      CtaNav: {
        variant: 'default'
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      color: `${colors.black}`,
      variant: `bodyCopy`,
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
    }
  }
};
export { CtaNavSection };
