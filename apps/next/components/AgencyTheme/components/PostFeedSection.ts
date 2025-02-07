import { colors } from '../variables/';

const PostFeedSection = {
  // ==========================================================================
  // layoutVariant
  // ==========================================================================
  default: {
    // ==========================================================================
    // Section Styles
    // ==========================================================================
    StyledSection: {
      background: `${colors.white}`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `30px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: ``
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `30px 16px`
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
        gridRow: `3`,
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
        gridColumn: `1/6`,
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
        variant: `secondaryXs`,
        color: `${colors.greyLight}`,
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
        gridRow: `1`,
        margin: ``,
        padding: `0 0 30px`
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
        gridColumn: `2/12`,
        gridRow: ``,
        margin: ``,
        padding: ``
      },
      widescreen: {
        gridColumn: `4/10`,
        gridRow: ``,
        margin: ``,
        padding: `0 0 60px 0`
      },
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `primary`,
        color: `${colors.greyLight}`,
        position: `relative`,
        overflow: ``,
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
          color: `${colors.greyLight}`
        }
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      display: `flex`,
      alignItems: `end`,
      justifyContent: `flex-end`,
      mobile: {
        gridColumn: `9/13`,
        gridRow: `1/3`,
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
        gridRow: `2`,
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
        feedItemComponent: `PostFeedItemPreviewTitle`
      },
      // ==========================================================================
      // HorizontalFeed
      // ==========================================================================
      HorizontalFeed: {
        layoutVariant: `default`,
        withArrowButton: true,
        feedItemComponent: `PostFeedItemPreviewTitle`
      },
      // Before
      // ==========================================================================
      Before: {},
      After: {}
    }
  }
};
export { PostFeedSection };
