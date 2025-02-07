import { colors } from '../variables/';

const PortfolioFeedSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // config
    // ==========================================================================
    config: {
      isCategoryTitleVisible: true,
      isCategorySubtitleVisible: true
    },
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.blackMid}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `64px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `104px 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFeedContainer
    // ==========================================================================
    StyledContainer: {
      position: `relative`,
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      display: `grid`,
      position: ``,
      alignItems: `end`,
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
        gridColumn: `1/9`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/9`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `tertiary`,
        color: colors.greyLighter,
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
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: `1/9`,
        gridRow: `3`,
        margin: ``,
        padding: `25px 0 0 0`
      },
      mobileLarge: {
        gridColumn: `1/9`,
        gridRow: `3`,
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
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/9`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `tertiarySmall`,
        color: colors.greyLighter,
        position: `relative`,
        overflow: `hidden`,
        mobile: {
          margin: ``,
          span: {},
          After: {}
        },
        mobileLarge: {
          margin: ``,
          span: {},
          After: {}
        },
        tablet: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        desktop: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        widescreen: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        span: {
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopySm`,
      color: `${colors.greyLighter}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/11`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `1/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        gridColumn: `10/13`,
        gridRow: `1`,
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
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `5`,
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
        gridColumn: ``,
        gridRow: `4`,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: `0 auto`,
        padding: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `defaultIcon`,
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
    // StyledFeedWrap
    // ==========================================================================
    StyledFeedWrap: {
      overflow: `hidden`,
      position: `relative`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `4`,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: `4`,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      desktop: {
        gridColumn: ``,
        gridRow: `3`,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      // ==========================================================================
      // HorizontalFeed
      // ==========================================================================
      DefaultFeed: {
        layoutVariant: `default`,
        feedItemComponent: `PortfolioFeedItemDefault`
      },
      // ==========================================================================
      // HorizontalFeed
      // ==========================================================================
      HorizontalFeed: {
        layoutVariant: `default`,
        withArrowButton: true,
        feedItemComponent: `PortfolioFeedItemDefault`
      },
      // Before
      // ==========================================================================
      // Before
      // ==========================================================================
      Before: {},
      After: {}
    }
  },
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  alternative: {
    // ==========================================================================
    // config
    // ==========================================================================
    config: {
      isCategoryTitleVisible: true,
      isCategorySubtitleVisible: true
    },
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.white}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: ``
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: ``
      }
    },
    // ==========================================================================
    // StyledFeedContainer
    // ==========================================================================
    StyledContainer: {
      position: `relative`,
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
      withRowGap: true,
      withColGapp: true,
      gridTemplateColumns: ``,
      display: `grid`,
      position: ``,
      alignItems: `center`,
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
        gridColumn: `1/10`,
        gridRow: ``,
        margin: ``,
        padding: ` 0 0 50px 0`
      },
      widescreen: {
        gridColumn: `1/10`,
        gridRow: ``,
        margin: ``,
        padding: `0 0 82px 0`
      },
      // StyledSubTitle
      // ==========================================================================
      StyledSubTitle: {
        variant: `tertiary`,
        color: colors.greyLighter,
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
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      mobile: {
        gridColumn: `1/9`,
        gridRow: `2`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `1/9`,
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
        gridColumn: `1/9`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `tertiarySmall`,
        color: colors.greyLighter,
        position: `relative`,
        overflow: `hidden`,
        mobile: {
          margin: ``,
          span: {},
          After: {}
        },
        mobileLarge: {
          margin: ``,
          span: {},
          After: {}
        },
        tablet: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        desktop: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        widescreen: {
          margin: ``,
          span: {},
          After: {
            content: ``,
            display: `none`,
            height: ``,
            width: ``,
            margin: ``,
            borderTop: `none`
          }
        },
        span: {
          color: `${colors.greyLighter}`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopy`,
      color: `${colors.greyLighter}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `2/11`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        gridColumn: `2/12`,
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
      display: `flex`,
      alignItems: `end`,
      justifyContent: `end`,
      mobile: {
        gridColumn: `9/13`,
        gridRow: `1`,
        margin: ``,
        padding: ``
      },
      mobileLarge: {
        gridColumn: `11/13`,
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
        gridColumn: `12/13`,
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
    },
    // ==========================================================================
    // StyledFeedWrap
    // ==========================================================================
    StyledFeedWrap: {
      overflow: `hidden`,
      position: `relative`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        Before: {},
        After: {}
      },
      // ==========================================================================
      // HorizontalFeed
      // ==========================================================================
      DefaultFeed: {
        layoutVariant: `default`,
        feedItemComponent: `PortfolioFeedItemDefault`
      },
      // ==========================================================================
      // HorizontalFeed
      // ==========================================================================
      HorizontalFeed: {
        layoutVariant: `default`,
        withArrowButton: true,
        feedItemComponent: `PortfolioFeedItemDefault`
      },
      // Before
      // ==========================================================================
      // Before
      // ==========================================================================
      Before: {},
      After: {}
    }
  }
};
export { PortfolioFeedSection };
