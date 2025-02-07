import { colors } from '../variables';
// ==========================================================================
// Statement Styles
// ==========================================================================
const TextSectionAside = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `0 0 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `0 0 0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `0 0 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `0 0 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `0 0 0`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
      // Props settings
      isFluid: false,
      // fluidContainer
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
      // container
      // ==========================================================================
      container: {
        marginLeft: ``,
        marginRight: ``,
        mobile: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        mobileLarge: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        tablet: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        desktop: {
          height: ``,
          width: ``,
          paddingLeft: ``,
          paddingRight: ``
        },
        widescreen: {
          height: ``,
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
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
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `secondary`,
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: `2/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `2/7`,
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
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `2/7`,
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
    // StyledArticleAside
    // ==========================================================================
    StyledArticleAside: {
      variant: `bodyCopy`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/12`,
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
        gridColumn: `8/13`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: ``,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/10`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/7`,
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
        gridColumn: `1/5`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
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
    }
  }
};
export { TextSectionAside };
