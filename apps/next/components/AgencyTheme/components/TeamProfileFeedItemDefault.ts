import { colors } from '../variables';
// ==========================================================================
// TeamProfileFeedItem Styles
// ==========================================================================
const TeamProfileFeedItemDefault = {
  // ==========================================================================
  // layoutVariant: default
  // ==========================================================================
  default: {
    // ==========================================================================
    // StyledFeedItem
    // ==========================================================================
    StyledFeedItem: {
      position: `relative`,
      mobile: {
        gridColumn: `span 12`,
        padding: `20px 0`
      },
      mobileLarge: {
        gridColumn: `span 12`
      },
      tablet: {
        gridColumn: `span 9`,
        padding: ``
      },
      desktop: {
        gridColumn: ``
      },
      widescreen: {
        gridColumn: ``
      }
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(6, 1fr)`,
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
    // StyledImage
    // ==========================================================================
    StyledImage: {
      mobile: {
        gridColumn: ``,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsiveRounded`,
        fit: `crop`,
        width: 900,
        height: 900,
        cropWidth: 900,
        cropHeight: 900
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      alignSelf: `start`,
      mobile: {
        gridColumn: `1/5`,
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
      StyledSubTitle: {
        variant: `primary`,
        color: `${colors.blackMidGrey}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      alignSelf: `start`,
      mobile: {
        gridColumn: `3/6`,
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
        variant: `primary`,
        color: `${colors.blackMidGrey}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledExcerptWrap
    // ==========================================================================
    StyledExcerptWrap: {
      mobile: {
        gridColumn: `3/6`,
        gridRow: `2`,
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
        color: `${colors.blackMidGrey}`,
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
    // Button
    // ==========================================================================
    Button: {
      variant: `ButtonLinkPrimary`,
      withIcon: false,
      withText: true
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      position: ``,
      zIndex: ``,
      display: ``,
      justifyContent: ``,
      alignSelf: ``,
      mobile: {
        gridColumn: `3/3`,
        gridRow: `3`,
        margin: `0 0 5px`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: ``,
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
      },
      // ==========================================================================
      // StyledCtaWrapper
      // ==========================================================================
      StyledCtaWrapper: {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
      }
    }
  },
  // ==========================================================================
  // layoutVariant: default
  // ==========================================================================
  alterntive: {
    // ==========================================================================
    // Config: Hide/show content
    // ==========================================================================
    config: {
      isTitleVisible: false,
      isImgVisible: true
    },
    // ==========================================================================
    // StyledFeedItem
    // ==========================================================================
    StyledFeedItem: {
      position: `relative`,
      mobile: {
        gridColumn: `span 12`,
        padding: `20px 0`
      },
      mobileLarge: {
        gridColumn: `span 12`
      },
      tablet: {
        gridColumn: `span 9`,
        padding: ``
      },
      desktop: {
        gridColumn: ``
      },
      widescreen: {
        gridColumn: ``
      }
    },
    // ==========================================================================
    // StyledGrid
    // ==========================================================================
    StyledGrid: {
      withRowGap: false,
      withColGapp: true,
      gridTemplateColumns: `repeat(6, 1fr)`,
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
    // StyledImage
    // ==========================================================================
    StyledImage: {
      mobile: {
        gridColumn: ``,
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
      // ==========================================================================
      // ImageTag
      // ==========================================================================
      ImageTag: {
        layoutVariant: `responsiveRounded`,
        fit: `crop`,
        width: 900,
        height: 900,
        cropWidth: 900,
        cropHeight: 900
      }
    },
    // ==========================================================================
    // StyledSubTitleWrap
    // ==========================================================================
    StyledSubTitleWrap: {
      alignSelf: `start`,
      mobile: {
        gridColumn: `1/5`,
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
      StyledSubTitle: {
        variant: `primary`,
        color: `${colors.blackMidGrey}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledHeadingWrap
    // ==========================================================================
    StyledHeadingWrap: {
      alignSelf: `start`,
      mobile: {
        gridColumn: `3/6`,
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
        variant: `primary`,
        color: `${colors.blackMidGrey}`,
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
        span: {}
      }
    },
    // ==========================================================================
    // StyledExcerptWrap
    // ==========================================================================
    StyledExcerptWrap: {
      mobile: {
        gridColumn: `3/6`,
        gridRow: `2`,
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
        color: `${colors.blackMidGrey}`,
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
    // Button
    // ==========================================================================
    Button: {
      variant: `ButtonLinkPrimary`,
      withIcon: false,
      withText: true
    },
    // ==========================================================================
    // StyledCtaNavWrap
    // ==========================================================================
    StyledCtaNavWrap: {
      position: ``,
      zIndex: ``,
      display: ``,
      justifyContent: ``,
      alignSelf: ``,
      mobile: {
        gridColumn: `3/3`,
        gridRow: `3`,
        margin: `0 0 5px`,
        padding: ``
      },
      mobileLarge: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      tablet: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      desktop: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      widescreen: {
        gridColumn: ``,
        gridRow: ``,
        margin: ``,
        padding: ``,
        top: ``,
        left: ``,
        bottom: ``,
        right: ``
      },
      // StyledCtaNav
      // ==========================================================================
      StyledCtaNav: {
        variant: `default`,
        ctaTitle: ``,
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
      },
      // ==========================================================================
      // StyledCtaWrapper
      // ==========================================================================
      StyledCtaWrapper: {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        mobile: {},
        mobileLarge: {},
        tablet: {},
        desktop: {},
        widescreen: {}
      }
    }
  }
};
export { TeamProfileFeedItemDefault };
