import { colors } from '../variables';

const TextSection = {
  // ==========================================================================
  // variant
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
        color: ``,
        variant: `primary`,
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
          color: `${colors.red}`
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
          color: `${colors.red}`
        }
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      color: ``,
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
  },
  // ==========================================================================
  // variant
  // ==========================================================================
  alternative: {
    // ==========================================================================
    // StyledSection
    // ==========================================================================
    StyledSection: {
      background: `${colors.midBlack}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `50px 0 40px`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `60px 0 50px`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `90px 0 60px`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `105px  0 70px`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `115px 0 80px`
      }
    },
    // ==========================================================================
    // StyledContainer
    // ==========================================================================
    StyledContainer: {
      position: `relative`,
      zIndex: `1`,
      color: `inherit`,
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
        rowGap: `30px`
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
        rowGap: `55px`
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
        color: `${colors.white}`,
        variant: `primary`,
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
          color: `${colors.white}`
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
          color: `${colors.red}`
        }
      }
    },
    // ==========================================================================
    // StyledTextImgArticle
    // ==========================================================================
    StyledArticle: {
      color: ``,
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

export { TextSection };
