import { colors } from '../variables';

const PageNotFoundIndex = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.black}`,
      mobile: {
        height: `100%`,
        margin: `0`,
        padding: `0px`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `0px`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `158px 0 0 `
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `200px 0 0`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
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
          paddingLeft: `24px`,
          paddingRight: `24px`
        },
        desktop: {
          paddingLeft: `32px`,
          paddingRight: `32px`
        },
        widescreen: {
          paddingLeft: `45px`,
          paddingRight: `45px`
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      display: `grid`,
      mobile: {
        height: `fit-content`,
        colGap: ``,
        rowGap: ``,
        padding: `57px 0 0 0`
      },
      mobileLarge: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        padding: `65px 0 0 0`
      },
      tablet: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        padding: `132px 0 0`
      },
      desktop: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        padding: `0`
      },
      widescreen: {
        height: ``,
        colGap: ``,
        rowGap: ``,
        padding: `0`
      }
    },
    // ==========================================================================
    // StyledSubTitle
    // ==========================================================================
    StyledSubTitleWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `1`,
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
        margin: `0 auto`,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `primaryXl`,
        textDecoration: ``,
        color: `${colors.white}`,
        span: {
          color: `${colors.white}`
        },
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
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/13`,
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
    // StyledBodycopy
    // ==========================================================================
    StyledBodycopyWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
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
        margin: `0 auto`,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/13`,
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
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `flex`,
      alignItems: `end`,
      justifyContent: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
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
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // CtaNav
      // ==========================================================================
      CtaNav: {
        variant: `default`
      }
    },

    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `standfirst`,
      color: `${colors.greyLight}`,
      gridColumn: `1/8`,
      gridRow: ``,
      padding: ``,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: `0`,
        padding: `0`
      },
      mobileLarge: {
        gridColumn: `1/13`,
        gridRow: `1`,
        margin: `0`,
        padding: `0`
      },
      tablet: {
        gridColumn: `1/9`,
        gridRow: ``,
        margin: `0`,
        padding: `0`
      },
      desktop: {
        gridColumn: `1/9`,
        gridRow: `span 3`,
        margin: `0`,
        padding: `0`
      },
      widescreen: {
        gridColumn: `1/9`,
        gridRow: `span 3`,
        margin: `0`,
        padding: `0`
      }
    },
    // ==========================================================================
    // StyledArticleWrap
    // ==========================================================================

    StyledArticleWrap: {
      gridColumn: ``,
      gridRow: ``,
      padding: ``,
      display: `flex`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `auto 0 0`,
        padding: ``,
        display: `block`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: `0`,
        padding: ``
      },
      tablet: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: `auto 0 0`,
        padding: ``,
        display: `flex`,
        justifyContent: `space-between`
      },
      desktop: {
        gridColumn: `10/13`,
        gridRow: `1`,
        margin: `0`,
        padding: ``,
        display: `block`
      },
      widescreen: {
        gridColumn: `11/13`,
        gridRow: `1`,
        margin: `0`,
        padding: ``,
        display: `block`
      }
    },
    // ==========================================================================
    // StyledArticleAside
    // ==========================================================================

    StyledArticleAside: {
      display: `flex`,
      variant: `aside`,
      color: `white`,
      gridColumn: `8/13`,
      gridRow: `span 1`,
      padding: ``,
      fontColor: colors.greyLight,
      textDecoration: `none`,
      mobile: {
        display: ``,
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: `0`,
        padding: `0`,
        justiftyContent: ``,
        gap: `0`
      },
      mobileLarge: {
        display: ``,
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: `0`,
        padding: `0`,
        justiftyContent: ``,
        gap: `0`
      },
      tablet: {
        display: `flex`,
        gridColumn: `1/7`,
        gridRow: `2`,
        margin: `0`,
        padding: ``,
        justifyContent: `space-between`,
        gap: `27px`
      },
      desktop: {
        display: ``,
        gridColumn: `10/13`,
        gridRow: `span 1`,
        margin: `0`,
        padding: ``,
        justiftyContent: ``,
        gap: `0`
      },
      widescreen: {
        display: ``,
        gridColumn: `10/13`,
        gridRow: `span 1`,
        margin: `0`,
        padding: ``,
        justiftyContent: ``,
        gap: `0`
      }
    },

    // ==========================================================================
    // StyledSocialNavWrap
    // ==========================================================================
    StyledSocialNavWrap: {
      mobile: {
        gridColumn: `1/13`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      mobileLarge: {
        gridColumn: `1/10`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      tablet: {
        gridColumn: `9/13`,
        gridRow: `2`,
        padding: ``,
        margin: ``
      },
      desktop: {
        gridColumn: `10/13`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: `10/13`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      CtaNav: { variant: `default` }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      mobile: {
        gridColumn: `3/11`,
        gridRow: `4`,
        padding: ``,
        margin: ``
      },
      mobileLarge: {
        gridColumn: `1/10`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      tablet: {
        gridColumn: `9/13`,
        gridRow: `2`,
        padding: ``,
        margin: ``
      },
      desktop: {
        gridColumn: `10/13`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      },
      widescreen: {
        gridColumn: `10/13`,
        gridRow: `span 1`,
        padding: ``,
        margin: ``
      }
    }
  }
};
export { PageNotFoundIndex };
