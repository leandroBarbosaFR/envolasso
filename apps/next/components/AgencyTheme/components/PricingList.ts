import { colors } from '../variables';

const PricingList = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      withRowGap: false,
      withColGapp: false,
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
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: `0 auto`,
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

      // StyledSubTitle: subtitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `secondaryMedium`,
        color: `${colors.transparent}`,
        backgroundClip: `text !important`,
        background: `linear-gradient(90deg, #ecf3ff, #ffe3ee)`,
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: `0 auto`,
        padding: `10px 0 10px 0`
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
      // StyledHeading: title
      // ==========================================================================
      StyledHeading: {
        variant: `secondaryMedium`,
        color: `${colors.white}`,
        mobile: {
          margin: ``,
          After: {}
        },
        mobileLarge: {
          margin: ``,
          After: {}
        },
        tablet: {
          margin: ``,
          After: {}
        },
        desktop: {
          margin: ``,
          After: {}
        },
        widescreen: {
          margin: ``,
          After: {}
        },
        span: {
          colors: `${colors.white}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: `${colors.white}`,
      textAlign: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `1/13`,
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
    // StyledExcerptWrap
    // ==========================================================================
    StyledExcerptWrap: {
      mobile: {
        gridColumn: `1/5`,
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
      },
      StyledExcerpt: {
        whiteSpace: `pre-wrap`,
        variant: `bodyCopy`,
        color: `${colors.white}`,
        truncateValue: 500,
        blockquote: {
          color: `${colors.white}`
        },
        mobile: {
          margin: `0`
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
export { PricingList };
