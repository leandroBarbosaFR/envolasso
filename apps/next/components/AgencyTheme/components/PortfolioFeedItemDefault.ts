import { colors } from '../variables';
// ==========================================================================
// PortfolioFeedItemDefault Styles
// ==========================================================================
const PortfolioFeedItemDefault = {
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
      background: ``,
      border: `none`,
      borderRadius: `6px`,
      overflow: `hidden`,
      mobile: {
        gridColumn: `span 12`,
        // isHorizontalFeed
        width: `100vw`,
        maxWidth: `300px`
      },
      mobileLarge: {
        gridColumn: `span 6`,
        // isHorizontalFeed
        width: ``,
        maxWidth: ``
      },
      tablet: {
        gridColumn: `span 4`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `320px`
      },
      desktop: {
        gridColumn: `span 4`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `330px`
      },
      widescreen: {
        gridColumn: `span 4`,
        // isHorizontalFeed
        width: ``,
        maxWidth: `380px`
      }
    },
    // ==========================================================================
    // StyledImage
    // ==========================================================================
    StyledImage: {
      borderRadius: `6px`,
      overflow: `hidden`
      // all: `unset`,
      // cursor: `pointer`,
      // transition: `transform 0.25s ease-in-out`,
      // display: `block`
    },
    // ==========================================================================
    // ImageTag
    // ==========================================================================
    ImageTag: {
      layoutVariant: `responsiveBorderRadius`,
      fit: `crop`,
      width: 1500,
      height: 1125,
      cropWidth: 1500,
      cropHeight: 1125
    },
    // ==========================================================================
    // StyledFeedInner
    // ==========================================================================
    StyledFeedInner: {
      position: `absolute`,
      top: `0`,
      left: `0`,
      bottom: `0`,
      right: `0`,
      background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
      borderRadius: `0`,
      // pointerEvent: `none`,
      mobile: {
        height: ``,
        margin: ``,
        padding: `16px 0 0 0`
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
        margin: ``
        // padding: `25px`
      },
      widescreen: {
        height: ``,
        margin: ``
        // padding: `30px`
      },
      // verlay styles & Hover states in StyledFeedItem file
      opacity: `0`,
      display: ``,
      transition: `0.25s opacity ease-in-out`,
      opacityHover: `1`,
      displayHover: `block`,
      transformHoverFirstChild: `scale(1.05)`
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
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      alignSelf: ``,
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
        variant: `headingFeedItem`,
        color: `${colors.white}`,
        mobile: {
          margin: `0 0 5px`
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
        variant: `bodyCopy`,
        color: `${colors.white}`,
        whiteSpace: `pre-wrap`,
        truncateValue: 100,
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
      position: `absolute`,
      zIndex: `1`,
      display: ``,
      justifyContent: ``,
      alignSelf: ``,
      mobile: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: `10px`,
        bottom: `10px`,
        right: `10px`
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: `15px`,
        bottom: `15px`,
        right: `15px`
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: `20px`,
        bottom: `20px`,
        right: `20px`
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
        padding: ``,
        top: ``
        // left: `30px`,
        // bottom: `30px`,
        // right: `30px`
      },
      // StyledCtaNav
      // ==========================================================================
      Button: {
        variant: `buttonBluePrimary`,
        text: `Voir plus`,
        withIcon: true,
        iconName: `arrowRightNew`,
        iconPosition: `right`
      }
    }
  }
};
export { PortfolioFeedItemDefault };
