import { colors } from '../variables';
// ==========================================================================
// StandardPageBody Styles
// ==========================================================================
const StandardPageBody = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.black}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `70px 0 20px`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `70px 0 20px`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `80px 0 30px`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `120px 0 30px`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `130px 0 30px`
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
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: ``,
      alignItems: '',
      display: `grid`,
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
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
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
        gridColumn: `5/12`,
        gridRow: ``,
        margin: ``,
        padding: `34px 0 0 0`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `secondaryXs`,
        color: `${colors.greyLighter}`,
        mobile: {
          margin: `0 0 15px`
        },
        mobileLarge: {
          margin: `0 0 20px`
        },
        tablet: {
          margin: `0 0 25px`
        },
        desktop: {
          margin: `0 0 30px`
        },
        widescreen: {
          margin: `0 0 30px`
        }
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
        gridColumn: `1/13`,
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
        gridColumn: `5/12`,
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
        variant: `tertiary`,
        color: `${colors.greyLighter}`,
        mobile: {
          margin: `0 0 15px`
        },
        mobileLarge: {
          margin: `0 0 20px`
        },
        tablet: {
          margin: `0 0 25px`
        },
        desktop: {
          margin: `0 0 30px`
        },
        widescreen: {
          margin: `0 0 30px`
        }
      }
    },
    // ==========================================================================
    // StyledArticleWrap
    // ==========================================================================
    StyledArticleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
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
        gridColumn: `5/12`,
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
      // StyledArticle
      // ==========================================================================
      StyledArticle: {
        variant: `bodyCopyPages`,
        color: `${colors.greyLighter}`,
        blockquote: {
          color: `${colors.greyLighter}`
        },
        mobile: {
          gridColumn: `1/13`,
          gridRow: ``,
          margin: ``
        },
        mobileLarge: {
          gridColumn: `1/10`,
          gridRow: ``,
          margin: ``
        },
        tablet: {
          gridColumn: ``,
          gridRow: ``,
          margin: ``
        },
        desktop: {
          gridColumn: `5/12`,
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
  }
};

export { StandardPageBody };
