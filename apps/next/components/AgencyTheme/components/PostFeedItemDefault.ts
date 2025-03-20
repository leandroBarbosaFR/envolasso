import { colors } from '../variables';
// ==========================================================================
// PostFeedItemDefault Styles
// ==========================================================================
const PostFeedItemDefault = {
  // ==========================================================================
  // layoutVariant: default
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledFeedItem
    // ==========================================================================
    StyledFeedItem: {
      scrollSnapAlign: `start`,
      position: `relative`,
      color: `${colors.white}`,
      background: `${colors.whiteOff}`,
      border: `none`,
      borderRadius: `6px`,
      overflow: `hidden`,
      mobile: {
        gridColumn: `span 12`,
        // isHorizontalFeed
        width: `100vw`,
        maxWidth: `300px`,
        padding: ``,
        minHeight: ``
      },
      mobileLarge: {
        gridColumn: `span 12`,
        // isHorizontalFeed
        width: ``,
        maxWidth: ``
      },
      tablet: {
        gridColumn: `span 6`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `320px`,
        minHeight: ``
      },
      desktop: {
        gridColumn: `span 4`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `330px`
      },
      widescreen: {
        gridColumn: `span 3`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `347px`
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      borderRadius: ``,
      overflow: ``,
      ImageTag: {
        layoutVariant: `responsive`,
        fit: `crop`,
        width: 347,
        height: 252,
        cropWidth: 347,
        cropHeight: 252
      }
    },
    // ==========================================================================
    // StyledFeedInner
    // ==========================================================================
    StyledFeedInner: {
      // pointerEvents: `none`,
      // position: `absolute`,
      top: `0`,
      left: `0`,
      bottom: `0`,
      right: `0`,
      // background: `rgba(0,0,0,.9)`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `5px 0`
      },
      mobileLarge: {
        height: ``,
        margin: ``,
        padding: `5px 0`
      },
      tablet: {
        height: ``,
        margin: ``,
        padding: `5px 0`
      },
      desktop: {
        height: ``,
        margin: ``,
        padding: `5px 0`
      },
      widescreen: {
        height: ``,
        margin: ``,
        padding: `10px 0`
      },
      // verlay styles & Hover states in StyledFeedItem file
      opacity: `1`,
      display: `block`,
      transition: `0.25s opacity ease-in-out`,
      opacityHover: `1`,
      displayHover: `block`
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      withRowGap: false,
      withColGapp: false,
      gridTemplateColumns: `repeat(4, 1fr)`,
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
        gridRow: `4`,
        margin: ``,
        padding: `0 0 15px 0`,
        zIndex: ``
      },
      mobileLarge: {
        gridColumn: ``,
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
        variant: `tertiarySmallPricing`,
        color: `${colors.blackMid}`,
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
          color: `${colors.blackMid}`
        }
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      all: `unset`,
      pointerEvents: `none`,
      cursor: `default`,
      alignSelf: `start`,
      display: ``,
      textDecoration: `none`,
      mobile: {
        gridColumn: `1/5`,
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
      // StyledHeading
      // ==========================================================================
      StyledHeading: {
        variant: `secondaryXs`,
        color: `${colors.blackMid}`,
        mobile: {
          margin: `0 0 5px`
        },
        mobileLarge: {
          margin: `0 0 7px`
        },
        tablet: {
          margin: `0 0 9px`
        },
        desktop: {
          margin: `0 0 10px`
        },
        widescreen: {
          margin: `0 0 12px`
        }
      }
    },
    // ==========================================================================
    // StyledArticle
    // ==========================================================================
    StyledArticle: {
      variant: `bodyCopyPricingList`,
      color: `${colors.GreyBlue}`,
      mobile: {
        gridColumn: `1/13`,
        gridRow: `3`,
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
        gridColumn: `1/13`,
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
        color: `${colors.blackMidGrey}`,
        truncateValue: 500,
        mobile: {
          margin: `0 0 10px`
        },
        mobileLarge: {
          margin: ``
        },
        tablet: {
          margin: `0 0 15px`
        },
        desktop: {
          margin: ``
        },
        widescreen: {
          margin: `0 0 8px`
        }
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      pointerEvents: `initial`,
      position: ``,
      zIndex: ``,
      display: ``,
      justifyContent: ``,
      alignSelf: ``,
      mobile: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        // top: ``,
        // left: `10px`,
        bottom: `15px`
        // right: `10px`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
        // top: ``,
        // left: `15px`,
        // bottom: `15px`,
        // right: `15px`
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``
        // left: `20px`,
        // bottom: `20px`,
        // right: `20px`
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``
        // left: `25px`,
        // bottom: `25px`,
        // right: `25px`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``
        // top: ``,
        // left: `30px`,
        // bottom: `30px`,
        // right: `30px`
      },
      // StyledCtaNav
      // ==========================================================================
      Button: {
        variant: `buttonBlackBorder`,
        text: `Planifier une démo`
      }
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledBottomWrapper: {
      pointerEvents: `initial`,
      position: `absolute`,
      zIndex: ``,
      display: `flex`,
      justifyContent: ``,
      alignSelf: ``,
      flexDirection: `column`,
      mobile: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        // top: ``,
        // left: `10px`,
        bottom: `50px`
        // right: `10px`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        // top: ``,
        // left: `15px`,
        bottom: `50px`
        // right: `15px`
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        // left: `20px`,
        bottom: `50px`
        // right: `20px`
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        // left: `25px`,
        bottom: `50px`
        // right: `25px`
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        // top: ``,
        // left: `30px`,
        bottom: `50px`
        // right: `30px`
      }
    }
  }
};
export { PostFeedItemDefault };
