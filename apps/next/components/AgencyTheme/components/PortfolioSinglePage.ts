import { colors } from '../variables';

// ==========================================================================
// PortfolioSinglePage
// ==========================================================================
const PortfolioSinglePage = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    config: {
      isTitleVisible: false,
      isExcerptVisible: false,
      isBodyVisible: false,
      isCtaVisible: false,
      isSubtitleVisible: false,
      isCategoryVisible: false
    },
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.transparent}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `30px 0 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `40px 0 0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `50px 0 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `60px 0 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `70px 0 0`
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
    // StyledCtaWrap
    // ==========================================================================
    StyledCtaWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
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
        gridColumn: `1/5`,
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
      // StyledCtaNav
      // ==========================================================================
      Button: {
        variant: `buttonPrimary`,
        text: `Read More`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: `15px 0 0 0`
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
        gridColumn: `5/13`,
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
        color: `${colors.white}`,
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
        gridColumn: `5/13`,
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
    // StyledExcerptWrap
    // ==========================================================================
    StyledExcerptWrap: {
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
        gridColumn: `5/13`,
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
      // StyledExcerpt
      // ==========================================================================
      StyledExcerpt: {
        variant: `standfirst`,
        color: `${colors.white}`,
        blockquote: {
          color: `${colors.white}`
        },
        mobile: {
          gridColumn: `1/13`,
          gridRow: ``,
          margin: ``
        },
        mobileLarge: {
          gridColumn: `2/12`,
          gridRow: ``,
          margin: ``
        },
        tablet: {
          gridColumn: ``,
          gridRow: ``,
          margin: ``
        },
        desktop: {
          gridColumn: `5/13`,
          gridRow: ``,
          margin: ``
        },
        widescreen: {
          gridColumn: ``,
          gridRow: ``,
          margin: ``
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
        gridColumn: `5/13`,
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
        variant: `bodyCopy`,
        color: `${colors.white}`,
        blockquote: {
          color: `${colors.white}`
        },
        mobile: {
          gridColumn: `1/13`,
          gridRow: ``,
          margin: ``
        },
        mobileLarge: {
          gridColumn: `2/12`,
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
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `block`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 0 15px`,
        padding: `15px 0`
      },
      mobileLarge: {
        gridColumn: `2/12`,
        gridRow: ``,
        margin: `0 0 20px`,
        padding: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0 0 25px`,
        padding: ``
      },
      desktop: {
        gridColumn: `1/5`,
        gridRow: `3/4`,
        margin: `0`,
        padding: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0`,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: `Links:`,
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
      }
    }
  }
};

export { PortfolioSinglePage };
